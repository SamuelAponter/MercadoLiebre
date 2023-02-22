const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname, '../public')))


app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, './views/home.html'))
})
app.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname, './views/login.html'))
})
app.get('/register', (req, res) =>{
    res.sendFile(path.join(__dirname,'./views/register.html'))
})
app.get('*', (req, res) =>{
    res.status(404)
    res.send('Woops, no existe esta página!')
})
app.listen(8000, () => console.log('Servidor corriendo el el puerto 8000!'))