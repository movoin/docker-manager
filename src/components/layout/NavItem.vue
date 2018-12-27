<template>
  <li class="nav-item">
    <router-link :to="link">
      <icon v-if="icon" :name="icon"/>
      {{ name }}
    </router-link>
  </li>
</template>

<script>
import Icon from '../Icon'

export default {
  props: {
    name: String,
    link: String,
    icon: String
  },
  components: { Icon }
}
</script>
