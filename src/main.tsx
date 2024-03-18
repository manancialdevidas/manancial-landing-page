import React from "react";
import ReactDOM from "react-dom/client";
import Helmet from "react-helmet";
import App from "./App.tsx";

import "./index.css";

import { Navbar } from "./components/navbar.tsx";
import { Footer } from "./components/footer.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Helmet>
      <title>Comunidade Terapêutica Manancial de Vidas</title>
      <meta name="description" content="" />
      <link rel="icon" href="/manancial-icon.png" type="image/png" />
    </Helmet>

    <>
      <Navbar />
      <App />
      <Footer />
    </>
  </React.StrictMode>
);
