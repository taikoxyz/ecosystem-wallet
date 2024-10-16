import express from 'express';
import cors from 'cors'; // Import the cors middleware
import dotenv from 'dotenv';
import Openfort from '@openfort/openfort-node';

const app = express();
dotenv.config();

const PORT = process.env.PORT ?? 3000;


if (!process.env.OPENFORT_SECRET_KEY) {
    throw new Error(
        `Unable to load the .env file. Please copy .env.example to .env and fill in the required environment variables.`
    );
}
const openfort = new Openfort(process.env.OPENFORT_SECRET_KEY);

// Use the cors middleware to disable CORS
app.use(cors());

app.get("/", (req, res) => {
    res.send("Service is running");
});

app.post("/api/protected-create-encryption-session", async (req, res) => {
    const session = await openfort.registerRecoverySession(process.env.SHIELD_PUBLIC_KEY!, process.env.SHIELD_SECRET_KEY!, process.env.ENCRYPTION_SHARE!)
    res.json({ session });
});


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});