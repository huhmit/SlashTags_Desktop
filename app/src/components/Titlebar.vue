<template>
  <div>
    <v-app-bar
      class="titlebar"
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
        <v-icon id="minimise" v-on:click="minimizeWindow" size="20" class="minimise">mdi-minus</v-icon>
        <v-icon id="maximise" v-on:click="maximizeWindow" size="20" class="maximise">mdi-checkbox-blank-outline</v-icon>
        <v-icon id="close" v-on:click="closeWindow" size="20" class="close">mdi-close</v-icon>
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
        document.activeElement.blur()
    },

    minimizeWindow () {  
        var window = remote.BrowserWindow.getFocusedWindow();
        window.minimize();
        document.activeElement.blur()
    },

    maximizeWindow () {
        var window = remote.BrowserWindow.getFocusedWindow();
        window.isMaximized() ? window.unmaximize() : window.maximize();
        document.activeElement.blur()
    }
  }
};
</script>
<style>
  .titlebar {
  -webkit-user-select: none;
  -webkit-app-region: drag;
  }
  .minimise {
    -webkit-app-region: no-drag;
    margin-right: 20px;
  }
  .maximise {
    -webkit-app-region: no-drag;
    margin-right: 20px;
  }
  .close {
    -webkit-app-region: no-drag;
  }
</style>