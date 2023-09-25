import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App';

const root = createRoot(document.getElementById('todoapp'));

root.render(<App />);
