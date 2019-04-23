const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Hi! this is microservice - 1');
});

if (module === require.main) {
    const server = app.listen(process.env.PORT || 8080, () => {
        const port = server.address().port;
        console.log(`App listening on port ${port}`);
    });
}

module.exports = app;