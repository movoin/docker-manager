<template>
  <router-link :to="link" class="shortcut">
    <div class="image">
      <icon :name="icon"/>
    </div>
    <div class="summary">
      <h4>{{ name }}</h4>
      <small>{{ desc }}</small>
    </div>
  </router-link>
</template>

<script>
import Icon from './Icon'

export default {
  props: {
    name: String,
    desc: String,
    icon: String,
    link: String
  },
  components: { Icon }
}
</script>
