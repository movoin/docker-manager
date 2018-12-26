<template>
  <div id="app" class="layout">
    <sidebar/>

    <section class="content">
      <router-view/>
    </section>
  </div>
</template>

<script>
  import Sidebar from './components/layout/Sidebar'

  export default {
    components: { Sidebar }
  }
</script>

<style>
  @import './assets/styles/normalize.css';
  @import './assets/styles/default.css';
</style>
