<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12 sm12>
        <List :data="data" :name="nameGitHub"></List>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
import List from "@/components/organisms/List";
export default {
  data: () => ({
    data: [],
    nameGitHub: ""
  }),
  components: {
    List
  },
  computed: {
    ...mapState("user", ["user"])
  },
  methods: {
    ...mapActions("user", ["getUser"])
  },
  created() {
    const dataRes = {
      nameUserGitHub: this.$route.params.user
    };
    this.getUser(dataRes)
      .then(res => {
        this.nameGitHub = res.data.name;
        this.data.push({ text: "Url: " + res.data.html_url });
        this.data.push({ text: "Public repos: " + res.data.public_repos });
        this.data.push({ text: "Location: " + res.data.location });
      })
      .catch(err => {
        console.log("err: ", err);
      });
  }
};
</script>
