require("dotenv").config();
const express = require("express");
const historyApiFallback = require("connect-history-api-fallback");
const { ApolloServer, makeExecutableSchema } = require("apollo-server-express");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const mongoose = require("mongoose");
const path = require("path");
const config = require("../config/config");
const webpackConfig = require("../webpack.config");
const cors = require("cors");
const isDev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 8080;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var corsOptions = {
  origin: "http://localhost:8080",
  credentials: true // <-- REQUIRED backend setting
};

app.use(cors(corsOptions));

// Configuration
// ================================================================================================

// Set up Mongoose
mongoose.connect(isDev ? config.db_dev : config.db);
mongoose.Promise = global.Promise;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});
const server = new ApolloServer({
  schema,
  tracing: false,
  debug: true,
  introspection: true,
  playground: true,
  cacheControl: {
    defaultMaxAge: 5
  }
});

server.applyMiddleware({ app });

if (isDev) {
  const compiler = webpack(webpackConfig);

  app.use(
    historyApiFallback({
      verbose: false
    })
  );

  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
      contentBase: path.resolve(__dirname, "../client/public"),
      stats: {
        colors: true,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false,
        modules: false
      }
    })
  );

  app.use(webpackHotMiddleware(compiler));
  app.use(express.static(path.resolve(__dirname, "../dist")));
} else {
  app.use(express.static(path.resolve(__dirname, "../dist")));
  app.get("*", function(req, res) {
    res.sendFile(path.resolve(__dirname, "../dist/index.html"));
    res.end();
  });
}

app.listen(port, "0.0.0.0", err => {
  if (err) {
    console.log(err);
  }

  console.info(">>> 🌎 Open http://0.0.0.0:%s/ in your browser.", port);
});

module.exports = app;
