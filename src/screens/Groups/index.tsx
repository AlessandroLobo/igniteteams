import { useCallback, useState } from 'react';
import { GroupCard } from '../../components/GroupCard';
import { Header } from '../../components/Header';
import { Highlight } from '../../components/Highlight';
import { Container } from './styles';
import { FlatList } from 'react-native';
import { ListEmpty } from '../../components/ListEmpty';
import { Button } from '../../components/Button';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { groupsGetAll } from '../../Storage/group/groupsGetAll';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])

  const navigation = useNavigation();


  function handleNewGroup() {
    navigation.navigate('newGroup');
  }

  async function fetchGroups() {
    try {
      const data = await groupsGetAll();
      console.log(data)
      setGroups(data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleOpenGroup(group: string) {
    console.log(group)
    navigation.navigate('players', { group })
  }

  useFocusEffect(useCallback(() => {
    console.log(groups)
    fetchGroups();
  }, []))

  return (
    <Container>
      <Header />
      <Highlight
        title="Turmas"
        subtitle="jogue com a sua turma"
      />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard
            title={item}
            onPress={() => handleOpenGroup(item)}
          />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?"
          />)}
      />
      <Button
        title='Criar nova turma'
        onPress={handleNewGroup}
      />
    </Container>
  );
}

