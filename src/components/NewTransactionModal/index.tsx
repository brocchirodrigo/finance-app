import Modal from 'react-modal';
import { useState } from 'react';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, TransactionTypeContainer, RadioBox } from './styles';

Modal.setAppElement('#root');

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: ModalProps) {
  const [type, setType] = useState('deposit');

  function HandleDefineTransactionType(typeTransaction: 'deposit' | 'withdraw') {
    switch (typeTransaction) {
      case 'withdraw':
        setType('withdraw');
        break;
      case 'deposit':
        setType('deposit');
        break;
      default:
        setType('deposit');
        break;
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close-button"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container>
        <h2>Cadastrar Transação</h2>

        <input placeholder="Titulo" />
        <input placeholder="Valor" type="number" />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => HandleDefineTransactionType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => HandleDefineTransactionType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input placeholder="Categoria" />

        <button type="submit">Cadastrar</button>

      </Container>
    </Modal>
  );
}
