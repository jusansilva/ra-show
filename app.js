const Express = require('express')
var app = new Express()


app.get('/', (req, res)=>{
       res.render('resources/views/index');

})

app.listen(5000, function () {
  console.log('Example app listening on port 3000!');
});
