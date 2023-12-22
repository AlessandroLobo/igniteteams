// Importando o AsyncStorage do pacote @react-native-async-storage/async-storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// Importando a constante GROUP_COLLECTION do arquivo storageConfig
import { GROUP_COLLECTION } from '../storageConfig';

// Função assíncrona para recuperar todos os grupos armazenados
export async function groupsGetAll() {
  try {
    // Recuperando os grupos do AsyncStorage
    const storage = await AsyncStorage.getItem(GROUP_COLLECTION);

    // Se o grupo estiver armazenado, parseia o JSON para um array de strings
    // Caso contrário, retorna um array vazio
    const groups: string[] = storage ? JSON.parse(storage) : [];

    // Retorna os grupos recuperados
    return groups;
  } catch (error) {
    // Se ocorrer um erro, lança o erro
    throw error;
  }
}
 