const express = require('express');
const cors = require('cors')
const app = express();

// add CORS as a middleware **still don't know what the f*ck this is
app.use(cors());

/**
 * Using app.use, we need the path the app will listen to
 * then, a callback function that does something when the path is being listened to
 * 
 * Callback takes two arguments that hold, the request req, and the result res,
 * */ 
app.use('/login', (req, res) => {
    res.send({
        token: 'test12345'
    });
});

// run app on port 8080, using app.listen
app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));