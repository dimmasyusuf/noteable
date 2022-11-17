import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/style.css';
import NotesApp from './components/NotesApp';

const root = createRoot(document.getElementById('root'));
root.render(<NotesApp />);