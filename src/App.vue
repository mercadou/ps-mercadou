<template>
  <v-app id="app">
    <v-content>
      <v-container>
        <center><h1>MERCADOU - SUPER ESTAGIÁRIO - DEV</h1></center>
        <v-expansion-panels v-model="panel" multiple>
          <!-- Introdução -->
          <v-expansion-panel>
            <v-expansion-panel-header>
              <h3>Introdução</h3>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <p class="text-justify">
                Seja bem vindx futurx super estagiárix a nave Mercadou. Nós da
                equipe de Desenvolvimento e Tecnologia somos fãs de star wars
                <s>(50% da equipe é)</s> e achamos uma API muito maneira para
                desafiar os mochileiros vindo da AU.
                <a href="https://swapi.co/" target="_blank"
                  ><b>STAR WARS API (SWAPI)</b></a
                >, é uma api que contém informações do universo da franquia SW,
                e queremos fazer um desafio com base nos dados da SWAPI. Para
                não deixar vocês perdidos, nós do time de Tech estamos montando
                um pequeno tutorial de como consumir essa API.
              </p>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <!-- Tutorial -->
          <v-expansion-panel>
            <v-expansion-panel-header>
              <h3>Tutorial</h3>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>
                Pois bem, antes de entrar na descrição do desafio vamos explicar
                alguns conceitos de API REST e como consumi-las. Se você já
                conhece esses tópicos, não precisa ler essa descrição pois vai
                ser bem básica, já podendo partir para o desafio.
              </p>
              <p class="text-justify">
                <b>Representational State Transfer</b>, em português
                <b>Transferência Representacional de Estado</b>, é um estilo de
                arquitetura de software que define um conjunto de recursos a
                serem usadas para a criação de aplicações. Resumidamente, o REST
                permite a criação de um projeto com interfaces bem definidas.
                Desta forma, permitindo, por exemplo, que aplicações se
                comuniquem. Grandes empresas como <b>Mercadou</b>, Google, Twitter, Facebook,
                Instagram usam esse conceito de API.
                <a
                  href=" https://becode.com.br/o-que-e-api-rest-e-restful/ "
                  target="_blank"
                  >LEIA MAIS</a
                >
              </p>
              <p class="text-justify">
                Para isso, vamos usar o modulo
                <a href="https://github.com/axios/axios" target="_blank"
                  >axios</a
                >
                do Javascript, esse carinha é responsável por fazer requisições
                HTTP/HTTPS como GET/POST, no caso dessa api, só vamos usar o
                método GET do <b>axios</b>.
              </p>
              <p>
                Logo abaixo tem um exemplo de consulta na api, no método
                "getLukeSkywalker"
              </p>
              <center>
                <v-btn @click="getLukeSkywalker" color="orange" text>
                  getLukeSkywalker
                </v-btn>
              </center>
              <v-expand-transition>
                <v-card v-show="expand" class="mx-auto">
                  <h3 class="found">Nome: {{ Luke.name }}</h3>
                  <h3 class="found">Massa: {{ Luke.mass }} kg</h3>
                  <h3 class="found">Aniversário: {{ Luke.birth_year }}</h3>
                  <h3 class="found">...</h3>

                </v-card>
              </v-expand-transition>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <!-- Desafio -->
          <v-expansion-panel>
            <v-expansion-panel-header>
              <h3>Desafio</h3>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <p class="text-justify">
                Han Solo (https://swapi.co/api/people/14/) está levando 99% da
                capacidade da Nave Millennium Falcon
                (https://swapi.co/api/starships/10/) em carga, ele vai pousar em
                um planeta aleatório e pegar 6 passageiros, 5 passageiros são
                personagens aleatórios do filme: "A nova esperança"
                (https://swapi.co/api/films/1/), sendo que você, é o sexto
                passageiro. O desafio é consumir todas essas informações da api,
                ter uma entrada de dado que é referente ao seu peso e verificar
                se a Nave excedeu o capacidade limite.
              </p>
              <li>
                - Você tem que usar javascript para realizar esse desafio, pode
                utilizar qualquer framework da linguagem se preferir;
              </li>
              <li>
                - O código deve está comentado, explicado seus passos em cada
                etapa;
              </li>
              <li>
                - Deve haver um campo de entrada para informar seu peso;
              </li>
              <li>
                - Considere, que todos os valores referente a peso na SWAPI são
                em KG;
              </li>
              <li>
                - Você pode fazer uma pagina web para mostrar o resultado do
                desafio, você está livre pra usar a criatividade de como vai
                resolver o problema seguindo as instruções;
              </li>
              <li>
                - O código deve ser enviado para o email:
                <b>maia@mercadou.com.br</b> contendo o link do repositório do
                projeto. Para evitar cola, seguerimos que você coloque o nome do
                seu repositório usando a seguinte codificação: Meu nome é
                Gustavo Garcia, meu repositório vai ficar: <b>Gust4v0G4rci4</b>
              </li>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-container>
    </v-content>
    <!-- Componete de Laoding FullScreen -->
    <loading :loading="loading" />
  </v-app>
</template>
<script>
import axios from "axios";
import loading from "@/components/loading.vue";
export default {
  components: { loading },
  data: () => ({
    Luke: {},
    expand: false,
    panel: [0, 1, 2],
    loading: false
  }),
  created() {
    // Deixar o tema no modo escuro
    this.$vuetify.theme.dark = true;
  },
  methods: {
    async getLukeSkywalker() {
      // essa variável loading serve para controlar a tela de loading, true ligada, false desligada
      this.loading = true;
      const { data } = await axios.get(
        "https://swapi.co/api/people/1/?format=json"
      );
      this.Luke = data;
      console.log(data);
      this.loading = false;
      // expand controla o componete do vuetify, framework visual, que esconde conteudo.
      this.expand = true;
    }
  }
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
html,
h1,
h3 {
  color: orange;
}
.found {
  padding: 15px;
}
body {
  color: white;
  margin: 0;
  overflow-x: hidden;
  max-width: 100vw;
  min-height: 100vh;
  background-color: #212121;
  font-family: "Roboto", sans-serif;
}
</style>