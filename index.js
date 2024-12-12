const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({ message: "Hello World from CICD 🍕" }); 
});

app.get('/healthy', (req, res) => {
    res.json({ status: "I am healthy 🍕" }); 
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

module.exports = app; 
