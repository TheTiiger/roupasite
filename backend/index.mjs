import express from 'express';
import mongoose from 'mongoose';
const app = express();
import cors from 'cors';
const PORT = 5000;
app.use(cors());

app.get("/api/home", (req, res) => {
    res.json({ message: "Hello World!" });
});

mongoose.connect("mongodb+srv://ms8310737:yZTG8CK1JbVGvzga@cluster0.sapnfy9.mongodb.net/")
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.log('Failed to connect to MongoDB', error));
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});