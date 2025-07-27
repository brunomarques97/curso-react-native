import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TextInput, 
  ScrollView, 
  KeyboardAvoidingView, 
  Platform, 
  Button, 
  TouchableOpacity, 
  TouchableHighlight, 
  Pressable,
  FlatList, 
  SectionList,
} from 'react-native';

import localImage from "./assets/react.png";

// --- Dados de Exemplo para FlatList ---
const flatListData = [
  { id: '1', title: 'Item da FlatList 1' },
  { id: '2', title: 'Item da FlatList 2' },
  { id: '3', title: 'Item da FlatList 3' },
  { id: '4', title: 'Item da FlatList 4' },
  { id: '5', title: 'Item da FlatList 5' },
  { id: '6', title: 'Item da FlatList 6' },
  { id: '7', title: 'Item da FlatList 7' },
  { id: '8', title: 'Item da FlatList 8' },
  { id: '9', title: 'Item da FlatList 9' },
  { id: '10', title: 'Item da FlatList 10' },
  { id: '11', title: 'Item da FlatList 11' },
  { id: '12', title: 'Item da FlatList 12' },
  { id: '13', title: 'Item da FlatList 13' },
  { id: '14', title: 'Item da FlatList 14' },
  { id: '15', title: 'Item da FlatList 15' },
];

// --- Dados de Exemplo para SectionList ---
const sectionListData = [
  {
    title: 'Frutas:',
    data: ['Maçã', 'Banana', 'Laranja', 'Uva'],
  },
  {
    title: 'Vegetais:',
    data: ['Cenoura', 'Brócolis', 'Espinafre', 'Batata'],
  },
  {
    title: 'Laticínios:',
    data: ['Leite', 'Queijo', 'Iogurte'],
  },
  {
    title: 'Grãos:',
    data: ['Arroz', 'Feijão', 'Trigo', 'Milho'],
  },
];

export default function App() {

  //inputs
  const [texto, setTexto] = useState('');
  const [senha, setSenha] = useState('');
  const [numero, setNumero] = useState('');
  const [valorMoeda, setValorMoeda] = useState(''); 
  const [valorNumerico, setValorNumerico] = useState(0); 
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [multiplaLinha, setMultiplaLinha] = useState('');

  const [feedbackInteracao, setFeedbackInteracao] = useState('Nenhum botão pressionado.');

  const formatarMoeda = (value) => {
    let limpaValor = value.replace(/\D/g, ''); 

    if (limpaValor === '') {
      setValorNumerico(0);
      return '';
    }

    let valorNumero = parseFloat(limpaValor) / 100;
    
    setValorNumerico(valorNumero);

      return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(valorNumero);
  };

  
  const formatarTelefone = (value) => {

    let limpaValor = value.replace(/\D/g, ''); 
    let formataValor = '';

    if (limpaValor.length > 0) {
      formataValor = '(' + limpaValor.substring(0, 2);
      if (limpaValor.length > 2) {
        formataValor += ') ' + limpaValor.substring(2, 7);
        if (limpaValor.length > 7) {
          formataValor += '-' + limpaValor.substring(7, 11);
        }
      }
    }
    return formataValor;
  };

  const moedaChange = (text) => {
    const formatted = formatarMoeda(text);
    setValorMoeda(formatted);
  };

  const telefoneChange = (text) => {
    const formatted = formatarTelefone(text);
    setTelefone(formatted);
  };

  const renderFlatListItem = ({ item }) => (
    <View style={styles.flatListItem}>
      <Text style={styles.flatListItemText}>{item.title}</Text>
    </View>
  );

  const renderSectionListItem = ({ item }) => (
    <View style={styles.sectionListItem}>
      <Text style={styles.sectionListItemText}>{item}</Text>
    </View>
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderText}>{title}</Text>
    </View>
  );

  return (
    // KeyboardAvoidingView para evitar que o teclado cubra os inputs
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 20}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContentContainer}>
        <View style={styles.secao}>
          <Text style={styles.mainTitle}>Bem-vindo ao aplicativo de aprendizado</Text>
          <Text style={styles.paragraph}>Nesse aplicativo irei fazer todo meu aprendizado no React Native.</Text>
        </View>

        <View style={styles.secao}>
          <Text style={styles.subtitle}>Nessa seção está o carregamento de imagem</Text>

          <Text style={styles.label}>Essa é uma imagem local:</Text>
          <Image
            source={localImage}
            style={styles.image}
            resizeMode="contain"
          />

          <Text style={styles.label}>E essa é uma imagem através de uma URL:</Text>
          <Image
            source={{ uri: "https://alexandrefreire.dev.br/wp-content/uploads/2024/11/Como-Instalar-React-Native-Windows-e-Android.png" }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        <View style={styles.secao}>
          <Text style={styles.subtitle}>Nessa seção serão todos os tipos de inputs</Text>

          <Text style={styles.label}>Input de texto:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome..."
            onChangeText={setTexto}
            value={texto}
          />

          <Text style={styles.label}>Input de senha:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha..."
            onChangeText={setSenha}
            value={senha}
            secureTextEntry
          />

          <Text style={styles.label}>Input de número:</Text>
          <TextInput
            style={styles.input}
            placeholder="Apenas números..."
            onChangeText={setNumero}
            value={numero}
            keyboardType="numeric"
          />

          <Text style={styles.label}>Valor em Moeda (R$):</Text>
          <TextInput
            style={styles.input}
            placeholder="R$ 0,00"
            onChangeText={moedaChange} 
            value={valorMoeda} 
            keyboardType="numeric" 
          />
          <Text style={styles.displayValue}>
            Valor numérico real: {valorNumerico.toFixed(2)}
          </Text>
          <Text style={styles.displayValue}>
            Valor formatado (exibição): {valorMoeda}
          </Text>

          <Text style={styles.label}>Input de e-mail:</Text>
          <TextInput
            style={styles.input}
            placeholder="seu.email@exemplo.com"
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.label}>Input de telefone:</Text>
           <TextInput
              style={styles.input}
              placeholder="(XX) XXXXX-XXXX"
              onChangeText={telefoneChange}
              value={telefone} 
              keyboardType="phone-pad" 
              maxLength={15} 
            />

          <Text style={styles.label}>Input de mensagem (multilinha):</Text>
          <TextInput
            style={[styles.input, styles.multilineInput]}
            placeholder="Digite sua mensagem aqui..."
            onChangeText={setMultiplaLinha}
            value={multiplaLinha}
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />
        </View>

         <View style={styles.secao}>
          <Text style={styles.subtitle}>Nessa seção esta a manipulação dos botões</Text>

          <Text style={styles.label}>Feedback de Interação: {feedbackInteracao}</Text>

          <Text style={styles.label}>Componente Button:</Text>
          <Button
            title="Pressione o Botão Padrão"
            onPress={() => setFeedbackInteracao('Botão Padrão Pressionado!')}
            color="#841584" 
          />

          <Text style={styles.label}>Componente TouchableOpacity:</Text>
          <TouchableOpacity 
            style={styles.touchableOpacityButton}
            onPress={() => setFeedbackInteracao('TouchableOpacity Pressionado!')}
          >
            <Text style={styles.touchableText}>Pressione TouchableOpacity</Text>
          </TouchableOpacity>

          <Text style={styles.label}>Componente TouchableHighlight:</Text>
          <TouchableHighlight
            style={styles.touchableHighlightButton}
            onPress={() => setFeedbackInteracao('TouchableHighlight Pressionado!')}
            underlayColor="#DDDDDD" 
          >
            <Text style={styles.touchableText}>Pressione TouchableHighlight</Text>
          </TouchableHighlight>

          <Text style={styles.label}>Componente Pressable:</Text>
          <Pressable
            onPress={() => setFeedbackInteracao('Pressable Pressionado (onPress)!')}
            onLongPress={() => setFeedbackInteracao('Pressable Pressionado Longamente (onLongPress)!')}
            onPressIn={() => console.log('Pressable: Pressionado IN')}
            onPressOut={() => console.log('Pressable: Pressionado OUT')}
            style={({ pressed }) => [
              styles.pressableButton,
              {
                backgroundColor: pressed ? '#0056b3' : '#007bff', 
                transform: [{ scale: pressed ? 0.98 : 1 }], 
              },
            ]}
          >
            {({ pressed }) => (
              <Text style={styles.pressableText}>
                {pressed ? 'Solte-me!' : 'Pressione o Pressable'}
              </Text>
            )}
          </Pressable>
          
        </View>

        <View style={styles.secao}>
          <Text style={styles.subtitle}>Nessa seção está o carregamento de listas</Text>

          <Text style={styles.subtitle}>Exemplo de FlatList:</Text>
          <FlatList
            data={flatListData}
            renderItem={renderFlatListItem}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />

        <Text style={styles.subtitle}>Exemplo de SectionList:</Text>
        <SectionList
          sections={sectionListData}
          renderItem={renderSectionListItem}
          renderSectionHeader={renderSectionHeader}
          keyExtractor={(item, index) => item + index} 
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />


          
        </View>

        <StatusBar style="auto" />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardAvoidingContainer: {
    flex: 1,
  },
  scrollViewContentContainer: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F5FCFF',
  },
  secao: {
    marginBottom: 30,
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#444',
    marginBottom: 20,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 15,
    color: '#555',
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    alignSelf: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 10,
  },
  multilineInput: {
    height: 120,
    paddingVertical: 10,
  },
  displayValue: {
    marginTop: 20,
    fontSize: 16,
    color: '#666',
  },

  // Estilos para os botões de interatividade
  touchableOpacityButton: {
    backgroundColor: '#28a745', 
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    width: '80%', 
  },
  touchableHighlightButton: {
    backgroundColor: '#ffc107', 
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    width: '80%',
  },
  touchableText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  pressableButton: {
    backgroundColor: '#007bff', 
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    width: '80%',
  },
  pressableText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  //listas
  flatListItem: {
    padding: 15,
    backgroundColor: '#ADD8E6',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    borderRadius: 5,
    marginVertical: 4,
  },
  flatListItemText: {
    fontSize: 16,
    color: '#333',
  },
   sectionListItem: {
    padding: 15,
    backgroundColor: '#E6F7FF', 
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginVertical: 2,
    borderRadius: 5,
  },
  sectionListItemText: {
    fontSize: 16,
    color: '#333',
  },
  separator: {
    height: 1,
    backgroundColor: '#f0f0f0',
    marginHorizontal: 10, 
  },
});
