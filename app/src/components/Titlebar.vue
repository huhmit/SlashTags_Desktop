<template>
  <div>
    <v-app-bar
      dark
      fixed
      dense
      height="25"
    >
        <v-img
          alt="SlashTags Logo"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          src="@/assets/slash_logo.png"
          height="25"
          width="50"
          align-left
        />
        <v-spacer></v-spacer>
        <v-icon id="minimise" v-on:click="minimizeWindow" size="20" class="mr-5">mdi-minus</v-icon>
        <v-icon id="maximise" v-on:click="maximizeWindow" size="20" class="mr-5">mdi-checkbox-blank-outline</v-icon>
        <v-icon id="close" v-on:click="closeWindow" size="20">mdi-close</v-icon>
    </v-app-bar>
  </div>
</template>

<script>
const {remote} = require("electron")

export default {
  name: 'Titlebar',

  data: () => ({
    search: '',
    videos: [],
  }),
  methods: {
    closeWindow () 
    {
        var window = remote.BrowserWindow.getFocusedWindow();
        window.close();
    },

    minimizeWindow () {  
        var window = remote.BrowserWindow.getFocusedWindow();
        window.minimize();
    },

    maximizeWindow () {
        var window = remote.BrowserWindow.getFocusedWindow();
        window.isMaximized() ? window.unmaximize() : window.maximize();
    }
  }
};
</script>