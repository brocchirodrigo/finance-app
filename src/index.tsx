import React from 'react';
import ReactDOM from 'react-dom/client';

import { createServer, Model } from 'miragejs';

import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Contrato de consultoria',
          type: 'deposit',
          category: 'Dev',
          amount: 12000,
          createdAt: new Date('2022-06-05 09:00:00'),
        },
        {
          id: 2,
          title: 'Gasolina',
          type: 'withdraw',
          category: 'carro',
          amount: 500,
          createdAt: new Date('2022-06-05 09:30:00'),
        },
      ],
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => [
      this.schema.all('transaction'),
    ]);

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });
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
