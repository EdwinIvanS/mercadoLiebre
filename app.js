const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

const pathPublica= path.resolve(__dirname, "./public");
app.use(express.static(pathPublica));


app.get("/home", (req, resp)=>{ 
    resp.sendFile(path.resolve("./views/index.html"));
})

app.get("/register", (req, resp)=>{
    resp.sendFile(path.resolve("./views/register.html"));
})

app.get("/login", (req, resp)=>{
    resp.sendFile(path.resolve("./views/login.html"));
})

app.listen(port, () => {
    console.log("Server is running");
});


/*
app.get("/home", (req, resp)=>{ 
    let rutaHtml = path.join(__dirname,"./views/index.html"); 
    resp.sendFile(rutaHtml);
})

app.get("/register", (req, resp)=>{
    let rutaHtml = path.join(__dirname,"./views/register.html"); 
    resp.sendFile(rutaHtml);
})

app.get("/login", (req, resp)=>{
    let rutaHtml = path.join(__dirname,"./views/login.html"); 
    resp.sendFile(rutaHtml);
})


app.listen(3030, ()=>
    console.log("Servidor corriendo")   
)
*/