import React from "react";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import "./app.scss";
import router from "./routes";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "http://localhost:8080/graphql"
});

const client = new ApolloClient({
  link,
  cache
});

function App() {
  return (
    <div className="main">
      <ApolloProvider client={client}>
        <Header client={client} />
        <main className="main-container">{router()}</main>
        <Footer />
      </ApolloProvider>
    </div>
  );
}

export default App;
