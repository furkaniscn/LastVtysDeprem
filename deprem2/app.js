const express = require('express')
const bodyParser = require('body-parser')
var mysql = require('mysql2');


var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "123456",
    database: "example"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

const depremInfos = [{
        
    }
]
  
const app = express()
  
app.set('view engine', 'ejs')
  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

  
app.get("/", function (req, res) {
    res.render("deprem", {
    depremInfos
    })
})
  
app.get("/info", function (req, res) {
    let plakaKod = req.query.plaka

    con.connect(function(err) {
        if (err) throw err;
        var sql = "SELECT * FROM example.deprem_bilgileri where plaka=" + plakaKod;
         con.query(sql, function (err, result, fields) {
          if (err) throw err;
          result.forEach(function(column) {  
            depremInfos.push({
                id: column.id.toString(),
                tarih: column.tarih.toString(),
                saat: column.saat.toString(),
                sehirAdi: column.konum.toString(),
                siddet: column.siddet.toString(),
                canKaybi: column.can_kaybi.toString(),
                hasarliBina: column.hasarli_bina.toString(),
                plakaKodu: column.plaka.toString()
            }) 
          });
        })});
        

    setTimeout(function() {
      res.render("depremInfo", {
        data: depremInfos
    
    })
    depremInfos.length = 0;
    res.end();
    }, 50);
    
   
    
})
  
  
app.listen(3000, (req, res) => {
    console.log("App is running on port 3000")
})

app.use(express.static(__dirname + '/styles'));
app.use(express.static("."));
console.log(__dirname);