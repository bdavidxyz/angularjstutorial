var express = require('express'),
   http = require('http'),
   path = require('path'),
   authRoute = require('./routes/authRoute'),
   userRoute = require('./routes/userRoute'),
   projectRoute = require('./routes/projectRoute'),
   tagRoute = require('./routes/tagRoute');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/public');
  app.engine('.html', require('ejs').renderFile);
  app.set('view engine', 'html');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, '../../')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

/*   AUTH REST REQUESTS   */
app.get('/heinebier/user', userRoute.listUsers);
app.post('/heinebier/user', userRoute.postUser);
app.delete('/heinebier/user/:id', userRoute.deleteUser);
app.put('/heinebier/user/:id', userRoute.updateUser);

app.get('/heinebier/project', projectRoute.listProjects);
app.get('/heinebier/tag', tagRoute.listTags);
app.get('/heinebier/auth', authRoute.getAuth);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});