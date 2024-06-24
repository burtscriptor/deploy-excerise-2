const express = require('express')
const axios = require('axios')
const path = require('path');
const app = express()

app.use(express.static(path.join(__dirname, 'client/build')));

app.get("/api", (request, response) =>  {
    response.json({ "users": ["userOne", "userTwo", "userThree" ]})
  
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});


app.listen(5000, () => { console.log("server started on port 5000") })
