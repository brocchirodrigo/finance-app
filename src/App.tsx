import { useState } from 'react';

import Modal from 'react-modal';

import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';

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
    <>
      <GlobalStyle />
      <Header HandleControlTransactionModal={HandleControlTransactionModal} />
      <Dashboard />
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={HandleControlTransactionModal}
        ariaHideApp={false}
      >
        <h2>Cadastrar Transação</h2>
      </Modal>
    </>

  );
}
