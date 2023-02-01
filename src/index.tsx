import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { App } from './components/App';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const root = ReactDOMClient.createRoot(document.getElementById("app"));
root.render(<App />);