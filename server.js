const express = require('express');

// set port as environment variable or default to 3001
const PORT = process.env.PORT || 3001;

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});