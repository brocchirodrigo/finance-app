import logoImg from '../../assets/logoNovo.svg';

import { Container, Content } from './styles';

interface IHeaderProps {
  HandleControlTransactionModal: () => void;
}

export function Header({ HandleControlTransactionModal }: IHeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Finance App" />
        <button type="submit" onClick={HandleControlTransactionModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  );
}
