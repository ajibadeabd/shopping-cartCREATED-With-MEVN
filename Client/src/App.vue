<template>
  <div id="app">
    <Navbar />
    <error v-if="error" :msg='error'/>
    <success v-if="success" :msg='success'/>
      <router-view />
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue'
import error from './components/error.vue'
import success from './components/success.vue'
import {mapGetters} from 'vuex'

export default {
  name: 'app',
  components: {
   error,success,
    Navbar
  },
  computed:{
    ...mapGetters(['error'])
  }
  
}
</script>

<style>

</style>
