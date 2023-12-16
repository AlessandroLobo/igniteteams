import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { Input } from "../../components/Input";
import { Container, Content, UsersThree } from "./styles";


export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <UsersThree name={("users")} />
        <Highlight
          title="Nova Turma"
          subtitle="Crie a turma para adicionar as pessoas" />


        <Input />

        <Button
          title="Criar Turma"
          style={{ marginTop: 20 }}
        />
      </Content>

    </Container>
  )
} 
