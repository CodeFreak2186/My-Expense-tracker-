export async function getTransactionsByUserId(req, res) {
    try {
        const { userId } = req.params;
        const transactions = await sql`
          SELECT * FROM transactions WHERE user_id = ${userId} ORDER BY created_at DESC
        `;
        res.status(200).json(transactions);
    } catch (error) {
        console.error("Error fetching transactions:", error);
        res.status(500).json({ error: "Internal server error." });
    }
}


export async function deleteTransactionById(req, res) {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ error: "Transaction ID is required." });
        }
        if (isNaN(id)) {
            return res.status(400).json({ error: "invalid transaction IS." });
        }


        const deleteCount = await sql`
          DELETE FROM transactions WHERE id = ${id}
        `;
        if (deleteCount === 0) {
            return res.status(404).json({ error: "Transaction not found." });

        }
        res.status(204).send({ message: "Transaction deleted successfully." });
    } catch (error) {
        console.error("Error deleting transaction:", error);
        res.status(500).json({ error: "Internal server error." });
    }
}



export async function createTransaction(req, res) {
    try {
        const { user_id, title, amount, category } = req.body;
        if (!user_id || !title || !amount || !category) {
            return res.status(400).json({ error: "All fields are required." });
        }
        const newTransaction = await sql`
          INSERT INTO transactions (user_id, title, amount, category)
          VALUES (${user_id}, ${title}, ${amount}, ${category})
          RETURNING *
        `;
        res.status(201).json(newTransaction[0]);
    } catch (error) {
        console.error("Error creating transaction:", error);
        res.status(500).json({ error: "Internal server error." });
    }
}



export async function getTransactionSummary(req, res) {
    try {
        const { userId } = req.params;

        const balanceResult = await sql`
      SELECT COALESCE(SUM(amount), 0) AS balance
      FROM transactions
      WHERE user_id = ${userId}
    `;
        const incomeResult = await sql`
      SELECT COALESCE(SUM(amount), 0) AS income
      FROM transactions
        WHERE user_id = ${userId} AND amount > 0
    `;
        const expenseResult = await sql`
      SELECT COALESCE(SUM(amount), 0) AS expense
      FROM transactions
        WHERE user_id = ${userId} AND amount < 0
    `;



        res.status(200).json({
            balance: parseFloat(balanceResult[0].balance),
            income: parseFloat(incomeResult[0].income),
            expenses: parseFloat(expenseResult[0].expense)
        });
    } catch (error) {
        console.error("Error fetching summary:", error);
        res.status(500).json({ error: "Internal server error." });
    }
}

