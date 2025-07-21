import express from "express";
import dotenv from "dotenv";
import {connectDB} from "./config/db.js";
import transactionRoutes from "./routes/transaction.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());//allows to accept JSON data in the req.body(middle layer)

app.use("/api/transactions",transactionRoutes);

app.listen(PORT, ()=>{
    connectDB();
    console.log("Server started at http://localhost"+PORT);
    
})

//PB1BB2jrzaHly16S