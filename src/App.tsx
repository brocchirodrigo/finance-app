import { useState } from 'react';

import { TransactionsProvider } from './context/TransactionsContext';

import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';

import { GlobalStyle } from './styles/global';

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function HandleControlTransactionModal() {
    switch (isNewTransactionModalOpen) {
      case false:
        setIsNewTransactionModalOpen(true);
        break;
      default:
        setIsNewTransactionModalOpen(false);
    }
  }

  return (

    <TransactionsProvider>
      <GlobalStyle />
      <Header HandleControlTransactionModal={HandleControlTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={HandleControlTransactionModal}
      />
    </TransactionsProvider>

  );
}
