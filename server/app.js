const express = require('express')
const app = express()
const cors = require('cors')
const port = 3003
const mysql = require('mysql')

app.use(cors())

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "bk"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});


//Route
app.get('/', (req, res) => {
    res.send('Ate')
})


// UPDATE table_name
// SET column1 = value1, column2 = value2, ...
// WHERE condition;
app.put('/update-likes', (req, res) => {
    const sql = `
        UPDATE likes
        SET time = ?, likes = ?
        WHERE id = 24
    `;
    con.query(sql, [req.body.time, req.body.likes], err => {
        if (err) throw err;
        console.log("1 record updated");
    });
    res.json({
        msg: 'OK',
    })

});

app.get('/likes', (req, res) => {
    const sql = `
        SELECT time, likes 
        FROM likes
        WHERE id = 24
    `;
    con.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.json({
            msg: 'OK',
            likes: result
        })
    })
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})