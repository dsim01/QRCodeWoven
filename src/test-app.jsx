import React from 'react';
import ReactDom from 'react-dom/client';
import { QrCodeWoven } from './lib';

const container = document.querySelector('#test-app');

const root = ReactDom.createRoot(container);

root.render(<QrCodeWoven />);
