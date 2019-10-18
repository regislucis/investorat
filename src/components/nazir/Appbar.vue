<template>
    <div>
    <v-app-bar
      color="primary darketn-1"
      dense
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Page title</v-toolbar-title>

      <div class="flex-grow-1"></div>
<v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn light icon v-on="on">
              <v-avatar color="white" size="38">YB</v-avatar>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click.stop="">
            <v-list-item-title>Setting</v-list-item-title>
          </v-list-item>
            <v-list-item :to="{ name: 'welcome'}">
            <v-list-item-title>logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    </div>
</template>

<script>
export default {

}
</script>
