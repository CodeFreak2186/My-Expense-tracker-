import express from "express";
import dotenv from "dotenv";
import { initDB} from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import transactionsRoutes from "./routes/transactionsRoutes.js";
import job from "./config/corn.js";
import cors from "cors";





dotenv.config();

const app = express(); 
app.use(cors());

if (process.env.NODE_ENV === "production") {
  job.start();
}

const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(rateLimiter);





app.use("/api/transactions", transactionsRoutes);
app.get("/api/check", (req, res) => {
  res.status(200).send("API is running...");
});



initDB().then(() => {
  app.listen(PORT, () => {
    console.log(` Server is running on http://localhost:${PORT}`);
  });
});
