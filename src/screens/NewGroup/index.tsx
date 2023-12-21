import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { Input } from "../../components/Input";
import { Container, Content, UsersThree } from "./styles";


export function NewGroup() {
  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate('players', { group: 'Rocket' });
  }
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <UsersThree name={("users")} />
        <Highlight
          title="Nova Turma"
          subtitle="Crie a turma para adicionar as pessoas" />


        <Input
          placeholder="Nome da Turma"
        />

        <Button
          title="Criar Turma"
          style={{ marginTop: 20 }}
          onPress={handleNewGroup}
        />
      </Content>

    </Container>
  )
} 
