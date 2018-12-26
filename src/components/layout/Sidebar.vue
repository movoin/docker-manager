<template>
  <aside class="sidebar">
    <window-buttons/>
    <navbar :items="navs"/>
  </aside>
</template>

<script>
  import WindowButtons from './WindowButtons'
  import Navbar from './Navbar'

  export default {
    components: { WindowButtons, Navbar },
    data: () => {
      return {
        navs: [
          { name: '概览', link: '/overview', icon: 'overview' },
          { name: '镜像', link: '/images', icon: 'images' },
          { name: '容器', link: '/containers', icon: 'containers' }
        ]
      }
    }
  }
</script>
