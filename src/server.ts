import mongoose from 'mongoose';
import app from './index.js';
import { config } from 'dotenv';

config()

const PORT = process.env.PORT || 5000;

async function main() {
    try {
        await mongoose.connect(process.env.MONGO_URL || '');
        console.log("Database connected successfully");

        app.listen(PORT, () => {
            console.log(`Server is running on port http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Error starting the server:", error);
    }
}

main();