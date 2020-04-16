<template>
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
              Seja bem vindx futurx super estagiárix a jornada Mercadou. Nós da
              equipe de Desenvolvimento e Tecnologia somos fãs de POKEMON
              <s>(75% da equipe é)</s> e achamos uma API muito maneira para
              desafiar vocês.
              <a href="https://pokeapi.co/" target="_blank"
                ><b>POKEMON API</b></a
              >, é uma api que contém informações do universo da franquia
              Pokemon, e queremos fazer um desafio com base nos dados da
              POKEAPI. Para não deixar vocês perdidos, nós do time de Tech
              estamos montando um pequeno tutorial de como consumir essa API.
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
              conhece esses tópicos, não precisa ler essa descrição pois vai ser
              bem básica, já podendo partir para o desafio.
            </p>
            <p class="text-justify">
              <b>Representational State Transfer</b>, em português
              <b>Transferência Representacional de Estado</b>, é um estilo de
              arquitetura de software que define um conjunto de recursos a serem
              usadas para a criação de aplicações. Resumidamente, o REST permite
              a criação de um projeto com interfaces bem definidas. Desta forma,
              permitindo, por exemplo, que aplicações se comuniquem. Grandes
              empresas como <b>Mercadou</b>, Google, Twitter, Facebook,
              Instagram usam esse conceito de API.
              <a
                href=" https://becode.com.br/o-que-e-api-rest-e-restful/ "
                target="_blank"
                >LEIA MAIS</a
              >
            </p>
            <p class="text-justify">
              Para isso, vamos usar o modulo
              <a href="https://github.com/axios/axios" target="_blank">axios</a>
              do Javascript, esse carinha é responsável por fazer requisições
              HTTP/HTTPS como GET/POST, no caso dessa api, só vamos usar o
              método GET do <b>axios</b>.
            </p>
            <p>
              Essa página Web foi desenvolvida usando o Framework VueJs e para
              ver mais detalhes do código e espiar o método a seguir basta
              acessar o repositório no
              <a href="https://github.com/mercadou/ps-mercadou" target="_blank"
                >GitHub</a
              >.
            </p>
            <p>
              Logo abaixo tem um exemplo de consulta na api, no método
              "getFavoritePokemon"
            </p>
            <center>
              <v-btn @click="getFavoritePokemon()" color="red" text>
                getFavoritePokemon
              </v-btn>
            </center>
            <v-expand-transition>
              <v-card v-show="expand" class="mx-auto">
                <v-row>
                  <template v-for="p in pokemon">
                    <v-col :key="p.id" cols="4" md="4">
                      <img
                        :src="p.sprites.back_default || ''"
                        height="100px"
                        width="100px"
                      />
                      <h3 class="found">Nome: {{ p.name }}</h3>
                      <h3 class="found">Numero da Pokedex: {{ p.id }}</h3>
                      <h3 class="found">Peso: {{ p.weight }} kg</h3>
                      <h3 class="found">
                        Tipo: {{ p.types[0].type.name || "" }}
                      </h3>
                      <h3 class="found">...</h3>
                    </v-col>
                  </template>
                </v-row>
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
              A região de Kanto foi a primeira região conhecida da história de Pokemon,
              e assim como outras regiões, tem sua pokedex própria: (https://pokeapi.co/api/v2/pokedex/2/).
              Uma pokedex nada mais é do que uma enciclopédia virtual portátil que os treinadores pokemon
              transportam para registro e consulta de pokemon (https://pokeapi.co/api/v2/pokemon/{nomeOuNumero}/).
              O desafio é consumir as informações da API e montar sua própria Pokedex da região de Kanto
              com todas as informações que achar relevante, com um filtro de pokemon pelo tipo (https://pokeapi.co/api/v2/type/{id}/),
              sinta-se livre para adicionar quantos outros filtros quiser.
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
              - Você pode fazer uma pagina web para mostrar o resultado do
              desafio, você está livre pra usar a criatividade de como vai
              resolver o problema seguindo as instruções;
            </li>
            <li>
              - Lembre-se que o objeto "types" dentro da resposta de Pokemon possui as URLs dos tipos do pokemon que pode ser consultado na API type para mais informações.
            </li>
            <li>
              - Os Ids de tipos vão de 1 até 18, parte do desafio é identificar e tratar nome e Id dos tipos.
            </li>
            <li>
              - O código deve ser enviado para o email:
              <b>maia@mercadou.com.br</b> contendo o link do repositório do
              projeto. Para evitar cola, sugerimos que você coloque o nome do
              seu repositório usando a seguinte codificação: Meu nome é Gustavo
              Garcia, meu repositório vai ficar: <b>Gust4v0G4rci4</b>
            </li>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
    <loading :loading="loading" />
  </v-content>
</template>

<script>
import getPokemon from "../services/getPokemon.js";
import loading from "./loading";
export default {
  name: "messagePS",
  data: () => ({
    pokemon: [
      {
        sprites: {
          back_default: "",
        },
        types: [
          {
            type: {
              name: "",
            },
          },
          {
            type: {
              name: "",
            },
          },
        ],
      },
    ],
    expand: false,
    panel: [0, 1, 2],
    loading: false,
  }),
  components: { loading },
  methods: {
    async getFavoritePokemon() {
      // essa variável loading serve para controlar a tela de loading, true ligada, false desligada
      this.loading = true;
      // chamando o método para consumir a POKEAPI
      const array = await getPokemon();
      this.pokemon = array;
      this.loading = false;
      console.log("Pokemons:", array);
      // expand controla o componete do vuetify, framework visual, que esconde conteudo.
      this.expand = true;
    },
  },
};
</script>

<style></style>
