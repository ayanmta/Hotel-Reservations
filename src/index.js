import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import RoomProvider from "./Context";
import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
  <Router>
      <App />
    </Router>
  </ChakraProvider>
);
