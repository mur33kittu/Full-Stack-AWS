import React from "react";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import "./app.scss";
import router from "./routes";

function App() {
  return (
    <div className="main">
      <Header />
      <main className="main-container">{router()}</main>
      <Footer />
    </div>
  );
}

export default App;
