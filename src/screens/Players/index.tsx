import { Alert, FlatList, TextInput } from "react-native";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Filter } from "../../components/Filter";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { Input } from "../../components/Input";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { useEffect, useRef, useState } from "react";
import { PlayerCard } from "../../components/PlayerCard";
import { ListEmpty } from "../../components/ListEmpty";
import { Button } from "../../components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { PlayerAddByGroup } from "../../Storage/player/playerAddByGroup";
import { AppError } from "../../utils/AppError";
import { PlayersGetByGroupAndTeam } from "../../Storage/player/playersGetByGroupAndTeam";
import { PlayerStorageDTO } from "../../Storage/player/PlayerStorageDTO";
import { PlayerRemoveByGroup } from "../../Storage/player/playerRemoveByGroup";
import { GroupRemoveByName } from "../../Storage/group/groupRemoveByName";
import { Loading } from "../../components/Loading";


type RouteParams = {
  group: string;
}

export function Players() {
  const [isLoading, setIsLoading] = useState(true);

  const [newPlayerName, setNewPlayerName] = useState('');

  const [team, setTeam] = useState('Time A');

  const navigation = useNavigation();

  const route = useRoute();

  const { group } = route.params as RouteParams;

  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

  const newPlayerNameInputRef = useRef<TextInput>(null);


  async function handleAddPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert('Nova pessoa', 'Informe o nome da pessoa para adicionar.');
    }

    const newPlayer = {
      name: newPlayerName,
      team,
    }

    try {
      await PlayerAddByGroup(newPlayer, group);
      newPlayerNameInputRef.current?.blur();
      setNewPlayerName('');
      fetchPlayersByTeam();

    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova pessoa', error.message);
      } else {
        console.log(error);
        Alert.alert('Nova pessoa', 'Não foi possível adicionar.');
      }
    }
  }

  async function fetchPlayersByTeam() {
    try {
      setIsLoading(true);

      const playersByTeam = await PlayersGetByGroupAndTeam(group, team);
      setPlayers(playersByTeam);
    } catch (error) {
      console.log(error);
      Alert.alert('Pessoas', 'Não foi possível carregar as pessoas.');
    } finally {
      setIsLoading(false);
    }
  }

  async function handlePlayerRemove(playerName: string) {
    try {
      await PlayerRemoveByGroup(playerName, group);
      fetchPlayersByTeam();
    } catch (error) {
      console.log(error);
      Alert.alert('Remover Pessoas', 'Não foi possível remover essa pessoa.');
    }
  }
  async function groupRemove() {
    try {
      await GroupRemoveByName(group);
      navigation.navigate('groups');
    } catch (error) {
      console.log(error);
      Alert.alert('Remover Turma', 'Não foi possível remover essa turma.');

    }
  }

  async function handleGroupRemove() {
    Alert.alert(
      'Remover Turma',
      'Deseja remover essa turma?'
      , [
        {
          text: 'Não',
          style: 'cancel'
        },
        {
          text: 'Sim',
          onPress: () => groupRemove()
        }
      ]);
  }

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team]);

  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title={group}
        subtitle="adicione a galera e separe os times"
      />
      <Form>
        <Input
          inputRef={newPlayerNameInputRef}
          onChangeText={setNewPlayerName}
          value={newPlayerName}
          placeholder="Nome da pessoa"
          autoCorrect={false}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />
        <ButtonIcon
          icon="add"
          onPress={handleAddPlayer}
        />
      </Form>

      <HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <NumberOfPlayers>
          {players.length} Players
        </NumberOfPlayers>
      </HeaderList>

      {isLoading ? <Loading /> :
        <FlatList
          data={players}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <PlayerCard name={item.name}
              onRemove={() => handlePlayerRemove(item.name)} />
          )}
          ListEmptyComponent={() => (
            <ListEmpty message="Não a pessoas nesse time"
            />)}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            { paddingBottom: 100 },
            players.length === 0 && { flex: 1 }
          ]}

        />
      }

      <Button
        title="Remover Turma"
        type="SECONDARY"
        onPress={handleGroupRemove}
      />
    </Container>
  )
}