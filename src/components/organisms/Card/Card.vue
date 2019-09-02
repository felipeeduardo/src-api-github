<template>
  <v-card class="elevation-3">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-card-title>Searche GitHub</v-card-title>
      <v-card-text>
        <v-text-field
          v-model="userGitHub"
          :counter="30"
          :rules="userGitHubRules"
          label="User GitHub"
          required
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="primary" @click="goSearche()">Searche</v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
import router from "@/router";
export default {
  data() {
    return {
      valid: true,
      userGitHub: "",
      userGitHubRules: [
        v => !!v || "User GitHub is required",
        v =>
          (v && v.length <= 30) || "User GitHub must be less than 10 characters"
      ]
    };
  },
  methods: {
    goSearche() {
      if (this.$refs.form.validate()) {
        router.push({
          name: "Searche",
          params: { user: this.userGitHub }
        });
      }
    }
  }
};
</script>

<style>
</style>
