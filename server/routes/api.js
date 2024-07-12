import express from 'express';
import { ApifyClient } from 'apify-client';
import axios from 'axios';

const router = express.Router();

// Initialize the ApifyClient with API token
const client = new ApifyClient({
    token: 'your_apify_token_here',
});

const APIFY_TASK_ID = 'your_task_ID_here';
const APIFY_API_TOKEN = 'your_apify_token_here';

const updateTaskInput = async (city, maxItemsPerQuery) => {
    try {
        const url = `https://api.apify.com/v2/actor-tasks/${APIFY_TASK_ID}/input?token=${APIFY_API_TOKEN}`;
        const newInput = {
            currency: "USD",
            includeAiReviewsSummary: false,
            includeAttractions: true,
            includeHotels: false,
            includeNearbyResults: false,
            includePriceOffers: true,
            includeRestaurants: false,
            includeTags: true,
            includeVacationRentals: false,
            language: "en",
            locationFullName: city, // Update city dynamically
            maxItemsPerQuery: maxItemsPerQuery // Set maxItemsPerQuery based on days
        };

        const response = await axios.put(url, newInput);
        console.log('Task input updated successfully:', response.data);
    } catch (error) {
        console.error('Error updating task input:', error);
        throw error;
    }
};

const startTask = async () => {
    try {
        const run = await client.task(APIFY_TASK_ID).call();
        return run;
    } catch (error) {
        console.error('Error starting task:', error);
        throw error;
    }
};

const calculateDays = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const difference = Math.ceil((end - start) / (1000 * 60 * 60 * 24)); // Calculate the difference in days
    return difference > 0 ? difference : 1; // Ensure at least 1 item is returned
};

router.post('/search', async (req, res) => {
    const { startDate, endDate, city } = req.body;

    try {
        console.log('Updating Apify task input for city:', city);
        const days = calculateDays(startDate, endDate);
        await updateTaskInput(city, days);

        console.log('Starting Apify task for city:', city);
        const runData = await startTask();
        console.log('Run Data:', runData);

        if (!runData.defaultDatasetId) {
            throw new Error('No defaultDatasetId found in runData');
        }

        const datasetId = runData.defaultDatasetId;
        console.log('Fetching dataset with ID:', datasetId);

        const { items } = await client.dataset(datasetId).listItems();
        console.log('Dataset fetched successfully:', items);

        const filteredData = items.filter(attraction => {
            const attractionCity = attraction.locationString ? attraction.locationString.toLowerCase() : '';
            const searchCity = city ? city.toLowerCase() : '';
            const isCityMatch = attractionCity.includes(searchCity);
            const isDateMatch = !attraction.date || (new Date(attraction.date) >= new Date(startDate) && new Date(attraction.date) <= new Date(endDate));
            return isCityMatch && isDateMatch;
        });

        res.json(filteredData);
    } catch (error) {
        console.error('Error fetching or processing data:', error);
        if (error.response) {
            console.error('Response data:', error.response.data);
            console.error('Response status:', error.response.status);
            console.error('Response headers:', error.response.headers);
        }
        res.status(500).send('Server Error');
    }
});

export default router;
