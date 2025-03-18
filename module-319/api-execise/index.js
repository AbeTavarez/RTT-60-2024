import express from "express";
import dotenv from "dotenv";
dotenv.config();

// Grades Router
import router from "./routes/grades.js";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(express.json());

// Root Route
app.get("/", (req, res) => {
  res.send("Welcome to the API.");
});

// API Routes
app.use('/grades', router)

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Seems like we messed up somewhere...");
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
