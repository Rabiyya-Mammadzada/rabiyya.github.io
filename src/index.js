import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import { TodoProvider } from './components/Context'


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <TodoProvider>
        <App tab="home" />
    </TodoProvider>
);

reportWebVitals();
