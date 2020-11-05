const webpack = require("webpack");
const merge = require("webpack-merge");
const path = require("path");

var config = {
    output: {
        path: path.resolve(path.join(__dirname, "/dist/")),
    },
    resolve: {
        extensions: ["*", ".js"],
        modules: [path.join(__dirname, "src"), "node_modules"], // add a directory search src/* over node_modules/
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                },
                include: __dirname,
                exclude: /node_modules/,
            },
            {
                test: /\\.rtf$/,
                exclude: __dirname,
            }
        ],
    },
    externals: {
    },
    mode: 'production',
    optimization: {
        minimize: true //Update this to true or false
    }
};

module.exports = [
    merge(config, {
        entry: path.resolve(path.join(__dirname, "index.js")),
        output: {
            filename: "[name].js",
            libraryTarget: "window",
            library: "html-to-rtf-browser",
        },
    }),
];
