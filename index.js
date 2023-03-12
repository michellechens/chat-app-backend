const express = require('express');
const router = require('./router');
const cors = require('cors');
const http = require('http');

const app = express();
app.use(router);
app.use(cors());

// Initialize HTTP server
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
server.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
});
