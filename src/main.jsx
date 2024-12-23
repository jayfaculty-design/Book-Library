import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faSearch, faCoffee } from "@fortawesome/free-solid-svg-icons";
import BookDetails from "./Pages/BookDetails";

library.add(fab, faCoffee, faSearch);

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="book-detail/:title" element={<BookDetails />} />
    </Routes>
  </BrowserRouter>
);
