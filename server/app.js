import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import apiRoutes from './routes/api.js'; // Note the .js extension

const app = express();
const PORT = process.env.PORT || 5001;

app.use(bodyParser.json());
app.use(cors()); 
app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Add this to confirm the server is running
app.get('/', (_req, res) => {
    res.send('Server is up and running!');
});


