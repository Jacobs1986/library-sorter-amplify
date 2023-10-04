import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Amplify } from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);