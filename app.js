var ex=require('express');
var app=ex();
app.set('view engine','ejs')
app.use(ex.static('public'));
app.listen(process.env.PORT || 5000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });
app.get('/',function(req,res){
    res.render('mainpage');
});
app.get('/lcs',function(req,res){
    res.render('lcs');
});