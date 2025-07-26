# 🚀 Dominando React Native: Meu Projeto de Aprendizado (curso-react-native)

Bem-vindo ao meu projeto `curso-react-native`! Este repositório serve como meu laboratório pessoal para explorar, implementar e dominar cada faceta do desenvolvimento mobile com React Native. Cada item do checklist abaixo representa um conceito ou funcionalidade que foi estudado, aplicado e compreendido neste aplicativo.

---

## 🎯 Checklist de Domínio do React Native

### 1. Fundamentos do React Native na Prática

#### Componentes Essenciais:
* [ ] Implementar **`View`** para criar blocos de layout e containers.
* [ ] Utilizar **`Text`** para exibir diferentes tipos de conteúdo textual.
* [ ] Inserir e manipular **`Image`** (locais e de URLs).
* [ ] Criar campos de entrada com **`TextInput`** e gerenciar seu valor.
* [ ] Adicionar interatividade com **`Button`**, **`TouchableOpacity`**, **`TouchableHighlight`** e **`Pressable`**.
* [ ] Gerenciar conteúdo que excede a tela com **`ScrollView`**.
* [ ] Exibir listas de dados otimizadas usando **`FlatList`** e **`SectionList`**.

#### Estilização e Layout:
* [ ] Organizar estilos com **`StyleSheet.create`** para modularidade.
* [ ] Dominar o **Flexbox** para construir layouts complexos e responsivos.
* [ ] Aplicar propriedades de estilo comuns (cores, fontes, espaçamentos, bordas).
* [ ] Entender e aplicar as diferenças entre estilos inline e externos.

#### Gestão de Dados em Componentes:
* [ ] Praticar a passagem de dados entre componentes pai e filho via **`props`**.
* [ ] Gerenciar o estado interno de componentes com o **`useState` Hook**.

#### Hooks para Lógica e Efeitos:
* [ ] Utilizar **`useState`** para controlar o estado da UI.
* [ ] Empregar **`useEffect`** para lidar com efeitos colaterais (chamadas de API, listeners, etc.).
* [ ] Explorar **`useContext`** para compartilhar estado global de forma simples.
* [ ] Investigar **`useRef`**, **`useCallback`**, **`useMemo`** para otimizações de performance.

#### Interatividade do Usuário:
* [ ] Implementar manipulação de eventos como `onPress` (toques) e `onChangeText` (mudanças em inputs).

---

### 2. Navegação entre Telas e Fluxo do App

#### React Navigation:
* [ ] Instalar e configurar as bibliotecas necessárias para navegação.
* [ ] Construir uma navegação em pilha com **`Stack Navigator`**.
* [ ] Criar abas na parte inferior da tela usando **`Tab Navigator`**.
* [ ] Desenvolver um menu lateral deslizante com **`Drawer Navigator`**.
* [ ] Praticar a passagem de parâmetros e dados entre diferentes telas na navegação.

---

### 3. Consumo de Dados Externos (APIs)

#### Requisições HTTP:
* [ ] Fazer requisições GET para buscar dados usando a **`Fetch API`**.
* [ ] Ou, utilizar a biblioteca **`Axios`** para chamadas HTTP.
* [ ] Praticar outros métodos HTTP como POST, PUT, DELETE.

#### Exibição e Tratamento de Dados:
* [ ] Renderizar dados dinâmicos obtidos de uma API na interface.
* [ ] Implementar lógicas para exibir estados de **carregamento (`loading`)** e tratar **erros** na requisição.

---

### 4. Gerenciamento de Estado Avançado

#### Estado Global para Apps Maiores:
* [ ] Utilizar **Context API** combinado com **`useReducer`** para gerenciar o estado global de forma mais robusta.
* [ ] (Opcional, para apps mais complexos) Estudar e aplicar uma biblioteca como **Redux**, **Zustand** ou **Recoil** para gerenciamento de estado escalável.

---

### 5. Persistência de Dados Local

#### Armazenamento Simples:
* [ ] Salvar e recuperar dados simples de chave-valor usando **`AsyncStorage`**.

#### Banco de Dados Local (para dados mais complexos):
* [ ] Explorar e implementar soluções de banco de dados locais como **SQLite**, **Realm** ou **WatermelonDB**.

---

### 6. Otimização e Recursos Avançados

#### Performance do Aplicativo:
* [ ] Aplicar técnicas de otimização para **`FlatList`** e **`ScrollView`**.
* [ ] Entender e usar **`useMemo`** e **`useCallback`** para otimizar re-renderizações.

#### Testes:
* [ ] Iniciar a escrita de testes unitários e de integração com **Jest** e **React Native Testing Library**.

#### Depuração Efetiva:
* [ ] Dominar as **ferramentas de desenvolvedor do React Native**.
* [ ] Utilizar o **Flipper** para depuração avançada.

#### Animações e Interações Visuais:
* [ ] Criar animações usando a **`Animated API`** nativa.
* [ ] Explorar **`React Native Reanimated`** para animações mais complexas e fluidas.

#### Recursos Nativos do Dispositivo:
* [ ] Implementar **Notificações** (locais e/ou push).
* [ ] Utilizar o **Giroscópio** para interações baseadas em movimento.
* [ ] Obter e exibir a **Localização** do usuário (GPS, rede).
* [ ] Acessar e manipular **Contatos** do dispositivo.
* [ ] Capturar imagens e vídeos com a **Câmera**.
* [ ] Selecionar imagens e vídeos da **Galeria/Biblioteca de Mídia**.
* [ ] Gravar e reproduzir **Áudio**.
* [ ] Acessar e usar o **Microfone**.
* [ ] Lidar com a **Rede** (status da conexão, tipo de rede).
* [ ] Acessar e manipular arquivos do **Sistema de Arquivos** do dispositivo.
* [ ] Utilizar o **Acelerômetro** para detecção de movimento e orientação.
* [ ] Ler dados do **Sensor de Proximidade**.
* [ ] Controlar a **Vibração** do dispositivo.
* [ ] Usar o **Calendário** do dispositivo para eventos.
* [ ] Acessar e manipular o **Bluetooth**.
* [ ] Interagir com **NFC (Near Field Communication)**.
* [ ] Autenticação biométrica (ex: **Touch ID/Face ID**).
* [ ] Compartilhar conteúdo com outros aplicativos (Share API).
* [ ] Enviar **SMS** e fazer **Chamadas Telefônicas**.
* [ ] Monitorar o **Estado da Bateria**.

#### Integração Nativa (se necessário):
* [ ] (Avançado) Entender como criar **Módulos Nativos** e **Componentes Nativos** (se precisar de funcionalidades muito específicas da plataforma).

#### Publicação do Aplicativo:
* [ ] Aprender o processo de build e publicação na **Google Play Store (Android)**.
* [ ] Aprender o processo de build e publicação na **Apple App Store (iOS)**.

---

### 7. Boas Práticas e Ferramentas de Desenvolvimento

#### Controle de Versão:
* [ ] Utilizar **Git** para controle de versão e gerenciar o projeto no **GitHub**.

#### Qualidade de Código:
* [ ] Configurar e usar **ESLint** e **Prettier** para padronização e formatação automática do código.

#### Estrutura do Projeto:
* [ ] Aplicar o conceito de **componentização**, dividindo a UI em componentes reutilizáveis.
* [ ] Manter uma **organização de pastas** lógica e escalável para o projeto.