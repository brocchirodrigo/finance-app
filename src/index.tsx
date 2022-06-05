import React from 'react';
import ReactDOM from 'react-dom/client';

import { createServer } from 'miragejs';

import { App } from './App';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => [
      {
        id: 1,
        title: 'Desenvolvimento de site',
        amount: 12000,
        type: 'deposit',
        category: 'Recebíveis',
        date: new Date(),
      },
      {
        id: 2,
        title: 'Dog louco',
        amount: 53.20,
        type: 'withdraw',
        category: 'Comida',
        date: new Date(),
      },
      {
        id: 3,
        title: 'Aluguel',
        amount: 1100,
        type: 'withdraw',
        category: 'Casa',
        date: new Date(),
      },
      {
        id: 4,
        title: 'Participação de lucros',
        amount: 350,
        type: 'deposit',
        category: 'Recebíveis',
        date: new Date(),
      },
    ]);
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
