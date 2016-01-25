require("babel-register")({
    presets: ["react", "es2015"]
});
require("babel-polyfill");
const path = require('path');
const glob = require("glob");

//client
const optionsClient = {
    cwd:path.resolve(__dirname, '../client')
};

const clientTestPaths = glob.sync("**/*-test.js", optionsClient)
.map((testPath) => {
    return  path.resolve(__dirname, '../client', testPath);
});

//server
const optionsServer = {
    cwd:path.resolve(__dirname, '../server')
};
const serverTestPaths = glob.sync("**/*-test.js", optionsServer)
.map( (testPath) => {
    return  path.resolve(__dirname, '../server', testPath);
});


const allFiles = clientTestPaths.concat(serverTestPaths);
allFiles.forEach((testPath) => {
    require(testPath);
});

