import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
//app.use(bodyParser.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root@123",
    port: 3304,
    database:"Littlelemon"
})

app.get("/menu",(req,res)=>
{
    const q = "SELECT * FROM MENU";
    db.query(q,(err,data)=>
    {
        if(err)
        {
            console.log(err);
        }
        else
        {
            //console.log(data);
            return res.json(data);
        }
            
    })
    
})

app.listen(3000, () => {
    console.log("HELLO 1");
});
