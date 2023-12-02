import { Header } from '../../components/Header';
import { Highlight } from '../../components/Highlight';
import { Container, Title } from './styles';

export function Groups() {
  return (
    <Container>
      <Header />
      <Highlight
        title="Turmas"
        subtitle="jogue com a sua turma"
      />
    </Container>
  );
}

