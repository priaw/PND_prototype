const express = require('express');
const app = express();
var cors = require('cors');
const port = process.env.PORT || 3500 ;
const bodyParser = require('body-parser');
const FetchData = require('./models/fetch');
app.use(cors());


app.get('/viewListjob',(req, res)=>{
    res.send(FetchData.FetchAllData());
});



// app.get('/Addlistjob',(req, res)=>{
// 	db.connect((err) => {
//         if (err) {
//             throw err;
//         }
//         console.log('Connected to database');
//     });

//     db.query('INSERT INTO `list-jobs`', 
//         function(err, results, fields) {
//             if (err) throw error;
//             console.log('show db');
//             // console.log(fields);
//             res.send(results);
//             // res.send(fields);
//     });

//     // db.end();

// });

app.listen(port, ()=>{
    console.log("RUN ON PORT " + port + ". Go to localhost:" + port + "/listjob too see jobs");
});
