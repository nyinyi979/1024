const express = require('express');
const path = require('path');
const app = new express();
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname,'/public')))
app.get('/',(req, res)=>{
    res.render(path.join(__dirname, '/public/index'))
})
app.listen(3000)