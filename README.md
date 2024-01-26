# Uber Clone App

![image](https://github.com/xrrac42/uberClone/assets/65977793/8ce6ccd3-7608-42d9-aef8-93329b574941)
![image](https://github.com/xrrac42/uberClone/assets/65977793/29f6f487-1c62-4ab8-94dd-efbb431bf45f)

O Uber Clone App é uma aplicação móvel que reproduz a experiência do aplicativo Uber. Este repositório está em desenvolvimento ativo, e a seção "Eats" do aplicativo está sendo implementada. As imagens apresentadas atualmente são parte do estágio inicial do aplicativo.

## Funcionalidades Principais

1. **Solicitação de Corridas:** Os usuários podem solicitar uma corrida, escolher o destino e visualizar informações sobre a rota proposta.

2. **Cálculo de Tempo e Preço:** Utilizando as APIs do Google, o aplicativo calcula o tempo estimado de chegada e o preço da corrida com base no destino selecionado. Foram utilizadas as APIs Matrix e Place Autocomplete para realizar esses cálculos.

## Setup Básico

1. **Instalar Dependências:**

   Certifique-se de ter o Node.js instalado em sua máquina. Em seguida, execute o seguinte comando para instalar as dependências do projeto:

   ```bash
   npm install
   ```

2. **Configurar chave Google API:**

   - Acesse o site de desenvolvedores do Google [aqui](https://developers.google.com/maps/documentation?hl=pt-br) e cadastre sua chave.
   
   - No arquivo `.env`, coloque sua chave disponibilizada na conta do Google:

     ```env
     GOOGLE_MAPS_API_KEY=SuaChaveDeAPIAqui
     ```

3. **Inicie seu app com Expo:**

   Execute o seguinte comando para iniciar seu aplicativo utilizando o Expo:

   ```bash
   npx expo start
   ```
   
   Certifique-se de que o ambiente Expo esteja corretamente configurado.
