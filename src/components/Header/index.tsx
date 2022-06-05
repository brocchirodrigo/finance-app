import logoImg from '../../assets/logoNovo.svg';

import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Finance App" />
        <button type="button">
          Nova Transação
        </button>
      </Content>
    </Container>
  );
}
