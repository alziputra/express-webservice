const express = require('express');
const app = express();

const routeRoutes = require('./src/routes');

// port environment variable port or 3000
const port = process.env.PORT || 3000;

// paggil route
app.use(express.json());
app.use('/', routeRoutes);

app.listen(port, () => {
    // console.log('Server running on port'+ port);
    console.log(`Server running on port ${port}`);
});