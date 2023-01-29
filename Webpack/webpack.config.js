const path = require("path")

module.exports = {
    entry : "./src/index.js",
    output: {
        path: path.join(__dirname,"buildnew"), // folder name
       filename: "bundlenew.js",
    },
     mode:"development",  // bydefault it is in production mode.
     module:{
         rules:[
             {
                 test: /\.css$/,
                 use: ["style-loader","css-loader"]
             }
         ]
     }
}