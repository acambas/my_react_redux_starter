const http = require('http');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const compress = require('compression');

//require('dotenv').load();

const app = express();
app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'jade');

if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
    // Step 1: Create & configure a webpack compiler
    
    const webpack = require('webpack');
    const webpackConfig = require(process.env.WEBPACK_CONFIG ? process.env.WEBPACK_CONFIG : './webpack.config');
    const compiler = webpack(webpackConfig);

    // Step 2: Attach the dev middleware to the compiler & the server
    app.use(require("webpack-dev-middleware")(compiler, {
        noInfo: false, publicPath: webpackConfig.output.publicPath
    }));

    // Step 3: Attach the hot middleware to the compiler & the server
    app.use(require("webpack-hot-middleware")(compiler, {
        log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
    }));
}




//------------------set up middleware------------------------------------
app.use(compress()); 
app.use('/', express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//------------------set up api routes------------------------------------

app.get('/api/test', (req, res) => {
    res.json({value:Date.now()});
});


//------------------set up page routes------------------------------------


app.get('*',  (req, res) => {
    // const initialState = {
    //     initialState : JSON.stringify({test:'test'})
    // }
    res.render('index');
});



//------------------set up error handler------------------------------------
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: {}
    });
});




if (require.main === module) {
    const server = http.createServer(app);
    server.listen(process.env.PORT || 1616, function () {
        console.log("Listening on %j", server.address());
    });
}

module.exports = app;