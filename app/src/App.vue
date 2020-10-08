<template>
  <v-app>
  <Titlebar/>
  <vue-custom-scrollbar class="scroll-area"  :settings="settings" @ps-scroll-y="scrollHanle">
    <v-main>
      <v-container class="mt-10">
      <v-card-text>
        <v-text-field
          @keydown.enter="search_videos"
          label="Enter Keyword(s)"
          append-icon="mdi-magnify"
          color="#03dac6"
          v-model="search"
          hide-details
          filled
          solo
        />
      </v-card-text>
      </v-container>
      <HelloWorld :videos="videos"/>
    </v-main>
  </vue-custom-scrollbar>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Titlebar from './components/Titlebar'
import axios from 'axios'
import vueCustomScrollbar from 'vue-custom-scrollbar'
import "vue-custom-scrollbar/dist/vueScrollbar.css"

export default {
  name: 'App',

  components: {
    HelloWorld,
    Titlebar,
    vueCustomScrollbar
  },

  data: () => ({
    search: '',
    videos: [],
    settings: {
      suppressScrollY: false,
      suppressScrollX: true,
      wheelPropagation: false
    }
  }),
  methods: {
    search_videos: function()
    {
      console.log(this.search)
      axios.get('http://127.0.0.1:5000/tags/api/videos',{
        params: {
          query: this.search
        }
      }).then(response => {
        this.videos = response.data
        console.log(this.videos)
      })
    },
    scrollHanle(evt) 
    {
      console.log(evt)
    }
  }
};
</script>
<style>
.scroll-area {
  position: relative;
  margin: auto;
  width: 1280px;
  height: 720px;
}
::-webkit-scrollbar {
  width: 0px; /* Remove scrollbar space */
}
</style>
