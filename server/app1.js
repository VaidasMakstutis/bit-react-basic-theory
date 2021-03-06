const express = require('express');
const app = express();
const port = 3003;
const cors = require('cors');
const mysql = require('mysql');

app.use(cors());
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  // password: "",
  database: "domino"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Database is connected!");
});

//Routes

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/hello/:vardas", (req, res) => {
  res.send(`Hello, ${req.params.vardas}`);
});

app.get("/sum/:a/:b", (req, res) => {
  res.send(`Sum: ${parseFloat(req.params.a) + parseFloat(req.params.b)}`);
});

app.get("/diff/:a/:b", (req, res) => {
  res.send(`Difference: ${parseFloat(req.params.a) - parseFloat(req.params.b)}`);
});

app.get("/multi/:a/:b", (req, res) => {
  res.send(`Multiplication: ${parseFloat(req.params.a) * parseFloat(req.params.b)}`);
});

app.get("/div/:a/:b", (req, res) => {
  res.send(`Division: ${parseFloat(req.params.a) / parseFloat(req.params.b)}`);
});

app.post("/calculator", (req, res) => {
    
    const d1= parseFloat(req.body.d1);
    const d2= parseFloat(req.body.d2);
    let errMsg;
    let answer;

    switch(req.body.action) {
        case '+': 
            answer = d1 + d2;
            break;

        case '-': 
            answer = d1 - d2;
            break;

        case '*': 
            answer = d1 * d2;
            break;

        case '/': 
            if (d2 === 0) {
                errMsg = "Dalyba iš nulio negalima!"
            }
            else {
                answer = d1 / d2;
            }
            break;
            default: errMsg = 'Nepasirinktas veiksmas';
    }

    res.json({
        answer: answer,
        errMsg: errMsg,
    })
});

app.get('/dominos', (req, res) => {
  const sql = `
      SELECT * FROM 
      domino
  `;
  con.query(sql, (err, result) => {
      if (err) {
          throw err;
      }
      res.json({
          msg: 'OK',
          dominos: result
      })
  })
})

app.post("/dominos/add", (req, res) => {
  const sql = `
  INSERT INTO
  domino
  (left_side, right_side)
  VALUES (?, ?)
  `;

  con.query(sql, [req.body.left, req.body.right], err => {
    if (err) throw err;
    console.log('Record has been added');
  });

  res.json ({
    msg: 'OK',
  })
});

  app.put("/dominos/update/:id", (req, res) => {
    const sql =`
    UPDATE domino
    SET left_side = ?, right_side = ?
    WHERE id = ?
    `;

    con.query(sql, [req.body.left, req.body.right, req.params.id], err => {
      if (err) throw err;
      console.log('1 record updated');
    });
  
    res.json ({
      msg: 'OK',
    })

  });

  app.delete("/dominos/delete/:id", (req, res) => {
    const sql =`
    DELETE from domino
    WHERE id = ?
    `;

    con.query(sql, [req.params.id], err => {
      if (err) throw err;
      console.log('1 record deleted');
    });
  
    res.json ({
      msg: 'OK',
    })

  });

  app.get('/dominos/sort/:sort', (req, res) => {
    let sql = `
        SELECT * 
        FROM domino
    `;
    let orderSQL = '';
    switch (req.params.sort) {
        case 'LA':
            orderSQL = 'ORDER BY left_side ASC';
            break;
        case 'LD':
            orderSQL = 'ORDER BY left_side DESC';
            break;
        case 'RA':
            orderSQL = 'ORDER BY right_side ASC';
            break;
        case 'RD':
            orderSQL = 'ORDER BY right_side DESC';
            break;
        case 'BA':
            orderSQL = 'ORDER BY (left_side + right_side) ASC';
            break;
        case 'BD':
            orderSQL = 'ORDER BY (left_side + right_side) DESC';
            break;
        default:
    }
    sql += orderSQL;
    con.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.json({
            msg: 'OK',
            dominos: result
        })
    })
})

app.get('/dominos/filter/:filter', (req, res) => {
    let sql = `
    SELECT * FROM domino
    `;
    let filterSQL = '';
    switch(req.params.filter) {
        case 'SS':
        filterSQL = 'WHERE left_side = right_side'
        break;
        case 'ES':
        filterSQL = 'WHERE left_side = 0 OR right_side = 0'
        break;
        default:
    }
    sql += filterSQL;
    con.query(sql, (err, result) => {
      if (err) {
          throw err;
      }
      res.json({
          msg: 'OK',
          dominos: result
      })
  })
})

app.listen(port, () => {
  console.log(`Your server is working on: http://localhost:${port}`);
});