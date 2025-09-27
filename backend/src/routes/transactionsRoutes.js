import express from 'express';
import { sql } from '../config/db.js';
import { getTransactionsByUserId, deleteTransactionById, createTransaction, getTransactionSummary } from '../controllers/transactionsController.js';



const router = express.Router();


router.get("/:userId", getTransactionsByUserId);



router.post("/", createTransaction);


router.delete("/:id", deleteTransactionById);


router.get("/summary/:userId", getTransactionSummary);



export default router;