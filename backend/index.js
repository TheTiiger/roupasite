const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 5000;
app.use(cors());

app.get("/api/home", (req, res) => {
    res.json({ message: "Hello World!" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});