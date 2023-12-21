// Importando o AsyncStorage do pacote @react-native-async-storage/async-storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// Importando a constante GROUP_COLLECTION do arquivo storageConfig
import { GROUP_COLLECTION } from '../storageConfig';

// Importando a função groupsGetAll do arquivo groupsGetAll
import { groupsGetAll } from './groupsGetAll';

// Função assíncrona para criar um novo grupo
export async function groupCreate(newGroup: string) {
  try {
    // Recuperando todos os grupos existentes
    const storageGroups = await groupsGetAll();

    // Criando um novo array com todos os grupos existentes e o novo grupo
    const storage = JSON.stringify([...storageGroups, newGroup]);

    // Armazenando o novo array no AsyncStorage
    await AsyncStorage.setItem(GROUP_COLLECTION, storage);

  } catch (error) {
    // Se ocorrer um erro, lança o erro
    throw error;
  }
}
