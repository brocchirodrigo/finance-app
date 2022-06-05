import Modal from 'react-modal';
import { FormEvent, useState } from 'react';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, TransactionTypeContainer, RadioBox } from './styles';
import { api } from '../../api';

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
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');

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

  function HandleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data = {
      title,
      type,
      amount,
      category,
    };

    api.post('/transactions', data);
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

      <Container onSubmit={HandleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>

        <input
          placeholder="Titulo"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input
          placeholder="Valor"
          type="number"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

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

        <input
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>

      </Container>
    </Modal>
  );
}
