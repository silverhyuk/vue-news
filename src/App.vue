<template>
  <div id="app">
    <tool-bar />
    <router-view v-slot="{ Component }">
      <transition name="page">
        <component :is="Component" />
      </transition>
    </router-view>
    <spinner :loading="loadingState" />
  </div>
</template>

<script>
import ToolBar from '@/components/ToolBar.vue'
import Spinner from '@/components/Spinner.vue'
import { RouterView } from 'vue-router'
import bus from '@/utils/bus'

export default {
  name: 'App',
  components: {
    ToolBar,
    RouterView,
    Spinner,
  },
  data() {
    return {
      loadingState: false
    }
  },
  methods: {
    startSpinner() {
      this.loadingState = true
    },
    endSpinner() {
      this.loadingState = false
    }
  },
  created() {
    bus.on('start:spinner', this.startSpinner)
    bus.on('end:spinner', this.endSpinner)
  },
  beforeDestroy() {
    bus.off('start:spinner', this.startSpinner)
    bus.off('end:spinner', this.endSpinner)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 0;
  margin: 0;
}

/* router transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}

a {
  color: #3498db;
  text-decoration: none;
}

a.router-link-exact-active {
  color: #42b983;
  text-decoration: underline;
}

a:hover {
  color: #42b983;
  text-decoration: underline;
}
</style>