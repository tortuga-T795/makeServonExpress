const express = require('express');
const app = express();


// app.on((req, res)=>{
//     res.send('app on');
// });

app.get('/get',(req, res) =>{
res.send('hell');
});

app.post('/posts', (req, res)=>{
    console.log('app post');
});

app.listen(1888, (req, res)=> {
    console.log('well done');
});


//app.listen(1888);
