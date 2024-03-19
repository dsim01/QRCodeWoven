import React from 'react';
import ReactDom from 'react-dom/client';
import { QrCodeWoven } from './lib/index.mjs';

const container = document.querySelector('#test-app');

const root = ReactDom.createRoot(container);

root.render(
  <QrCodeWoven
    type='canvas'
    value={'https://rozetka.com.ua'}
    options={{
      level: 'Q',
      size: 500,
      background: '#eaeaea',
      foreground: 'black',
      padding: 25,
    }}
  />,
);
