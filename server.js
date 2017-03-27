var express = require('express');

// _now we have access to express api
var app = express();
const PORT = process.env.PORT || 3000;

// app.use( function (req, res, next ){
//
//   if (req.headers['x-forwarded-proto'] === 'http'){
//     next();
//   }
//   else {
//     res.redirect('http://' + req.hostname + req.url);
//   }
// });

app.use(express.static('public'));

app.listen(PORT,function (){
  console.log('listening in port ' + PORT);
});
