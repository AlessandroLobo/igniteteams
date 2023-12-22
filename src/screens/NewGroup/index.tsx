import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { Input } from "../../components/Input";
import { Container, Content, UsersThree } from "./styles";
import { useState } from "react";
import { groupCreate } from "../../Storage/group/groupCreate";
import { AppError } from "../../utils/AppError";
import { Alert } from "react-native";


export function NewGroup() {
  const [group, setGroup] = useState('')

  const navigation = useNavigation();

  async function handleNewGroup() {
    try {

      if (group.trim().length === 0) {
        Alert.alert('Novo grupo', 'O nome do grupo é obrigatório');
        return;
      }

      await groupCreate(group)
      navigation.navigate('players', { group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo grupo', 'Ocorreu um erro ao criar o grupo');
      } else {
        console.log(error);
      }
    }
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
          onChangeText={setGroup}
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
