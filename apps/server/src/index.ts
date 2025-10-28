import "dotenv/config";
import express from "express";
import cors from "cors";
import { uptime } from "process";

const app = express();

app.use(express.json());
app.use(
    cors({
        origin: process.env.CLIENT_URL || "http://localhost:5173",
        credentials: true
    })
);

app.get("/health", (_req, res) => {
    res.json( { status: "ok", uptime: process.uptime() });
});

// Temporary

app.get("/cuisines", (_req, res) => {
    res.json(["Indian", "Italian", "Mexican", "Chinese", "American", "Mediterranean", "Thai"]);
});

// Future

app.post("/recommed", (req, res) => {
    // mock response
    res.json({
        params: req.body ?? {},
        results: [
            { id: "1", title: "Chicken Curry", fit: 0.84 },
            { id: "2", title: "Vegetable Stir Fry", fit: 0.78 },
            { id: "3", title: "Pasta Primavera", fit: 0.75 },
            { id: "4", title: "Tacos", fit: 0.72 },
        ]
    })
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});