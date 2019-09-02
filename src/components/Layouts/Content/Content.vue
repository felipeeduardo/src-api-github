<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12>
        <v-img :src="require('@/assets/github.png')" class="my-3" contain height="100"></v-img>
      </v-flex>

      <v-flex xs12 sm12>
        <h4 class="display-1 mb-4 text-center">Github User Information</h4>
      </v-flex>
      <router-view></router-view>
    </v-layout>
  </v-container>
</template>
