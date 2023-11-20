import express from "express"
import cors from "cors"


const app = express()

app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}))

app.get("/", (req, res) => {
    res.send("Hoş Geldiniz Tatil Heyecanı!")
})

const port = 5000;
app.listen(port,() => {
    console.log("Backend çalışıyor port:"+ port);
})