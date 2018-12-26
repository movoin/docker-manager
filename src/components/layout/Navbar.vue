<template>
  <ul class="navs">
    <nav-item v-for="item in items" v-bind:key="item.name" v-bind="item"/>
  </ul>
</template>

<script>
  import NavItem from './NavItem'

  export default {
    props: {
      items: Array
    },
    components: { NavItem }
  }
</script>

