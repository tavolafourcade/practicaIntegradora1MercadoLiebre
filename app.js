const express = require('express');
const app = express();

const path = require('path');

//Estableciendo la ruta de archivos estáticos
const publicPath = path.resolve(__dirname, './public');

//Haciendo uso de archivos estáticos
app.use(express.static(publicPath));

app.listen(process.env.PORT || 3030, ()=>{
  console.log('Servidor corriendo en puerto 3030')
})

app.get('/', (req,res)=>{
  res.sendFile(path.resolve(__dirname, './views/home.html'));
  
})

app.get('/register.html', (req,res)=>{
  res.sendFile(path.resolve(__dirname, './views/register.html'));
  
})

app.get('/login.html', (req,res)=>{
  res.sendFile(path.resolve(__dirname, './views/login.html'));
  
})


