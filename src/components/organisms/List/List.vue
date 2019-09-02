<template>
  <div>
    <v-card class="mx-auto mt-4" tile>
      <v-list dense>
        <v-subheader>
          GitHub: {{name}}
          <v-spacer></v-spacer>
          <v-btn class="primary mr-2" @click="goRepos">Repos</v-btn>
          <v-btn class="primary" @click="goStarred">Starred</v-btn>
        </v-subheader>
        <v-list-item-group color="primary">
          <v-list-item v-for="(item, i) in data" :key="i">
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>

    <list-repos :data="dataRepos" :repos="this.repos"></list-repos>
    <list-starred :data="dataStarred" :starred="this.starred"></list-starred>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import ListRepos from "@/components/organisms/List/ListRepos";
import ListStarred from "@/components/organisms/List/ListStarred";
export default {
  components: {
    ListRepos,
    ListStarred
  },
  data: () => ({
    repos: false,
    starred: false,
    dataRepos: [],
    dataStarred: []
  }),
  props: {
    data: {
      type: Array,
      default: null
    },
    name: {
      type: String,
      default: null
    }
  },
  methods: {
    ...mapActions("user", ["getRepos"]),
    ...mapActions("user", ["getStarred"]),
    goRepos() {
      this.dataRepos = [];
      this.repos = true;
      const dataRes = {
        nameUserGitHub: this.$route.params.user
      };
      this.getRepos(dataRes)
        .then(res => {
          res.data.forEach(element => {
            this.dataRepos.push({ text: element.name });
          });
        })
        .catch(err => {
          console.log("err: ", err);
        });
    },
    goStarred() {
      this.dataStarred = [];
      this.starred = true;
      const dataRes = {
        nameUserGitHub: this.$route.params.user
      };
      this.getStarred(dataRes)
        .then(res => {
          if (res.data != "") {
            res.data.forEach(element => {
              this.dataStarred.push({
                text:
                  "Owner: " +
                  element.owner.login +
                  " | Repository: " +
                  element.name
              });
            });
          } else {
            this.dataStarred.push({ text: "No results" });
          }
        })
        .catch(err => {
          console.log("err: ", err);
        });
    }
  }
};
</script>

<style>
</style>
