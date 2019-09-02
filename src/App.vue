<template>
  <v-app>
    <v-app-bar app dark class="primary">
      <v-toolbar-title class="headline text-uppercase">
        <span>API GITHUB</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <Content/>
    </v-content>
  </v-app>
</template>

<script>
import Content from "./components/Layouts/Content";

export default {
  name: 'App',
  components: {
    Content,
  },
  data: () => ({
    //
  }),
};
</script>
