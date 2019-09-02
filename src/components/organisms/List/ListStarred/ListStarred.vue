<template>
  <v-card class="mx-auto mt-4" tile v-if="starred">
    <v-list dense>
      <v-subheader>Starred</v-subheader>
      <v-list-item-group color="primary">
        <v-list-item v-for="(item, i) in data" :key="i">
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: null
    },
    starred: {
      type: Boolean,
      default: null
    }
  }
};
</script>