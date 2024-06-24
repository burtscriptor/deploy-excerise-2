const express = require('express')
const axios = require('axios')
const path = require('path');
const app = express()

app.use(express.static('build'));

app.get("/api/users", (request, response) =>  {
    response.json({ "users": ["userOne", "userTwo", "userThree", "userFour" ]})
  
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});


app.listen(5000, () => { console.log("server started on port 5000") })
