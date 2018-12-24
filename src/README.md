Steps:

1. mkdir belong
2. cd belong
   nmp init -y
3. -y flag skips all questions and prompts
4. create /src, /src/index.js and /src/index.html, /src/components/, /src/styles/
   npm install webpack webpack-cli --save-dev
5. webpack-cli helps with running webpack from command line
6. Install react and react dom
   npm install react react-dom --save
7. Install babel-core, babel-loader, babel-preset-env, babel-preset-react
   npm install @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev

   babel-core: Transforms ES6 code in ES5
   babel-loader: Helps webpack helper to transform your Javascript dependencies with babel
   babel-preset-env: Determines which plugin to use based on the preset
   babel-preset-react : Transform JSX code to Javascript

8. index.js add console.log(" hello ")
9. index.html add a div with some id
10. Webpack configuration

    1. define the entry and output filenames
       module.exports = {
       entry: "./src/index.js",
       output: {
       path: path.join(\_\_dirname, "/dist")
       filename:"index_bundle.js"
       }
       }

    2. Define babel loaders -> it is used to load JSX/Javascript files
       module: {
       rules:[
       test:/\.js$/,
       exclude:/node_modules/
       use:{
       loader:"babel-loader"
       }
       ]
       }
    3. Define CSS loaders - used to load css style
       rules:[
       {
       test:/\.css\$/,
       use:["style-loader", "css-loader"]
       }
       ]

11. Create .babelrc file and define presets within it. These presets are used by babel to transpile ES6 and React code to javascript.
    {
    preset:["babel-preset-env", "babel-preset-react"]
    }

12. env -> This preset will transpile ES6 code to ES5
13. react -> This preset will transpile JSX code to javascript.

14. Compiling files with webpack
    "start":"webpack --mode development --watch"
    "build":"webpack --mode production"
15. npm install html-webpack-plugin --save-dev
    plugins:[
    new HtmlWebpackPlugin({
    template:"./src/index.html"
    })
    ]
