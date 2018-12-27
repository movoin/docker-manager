<template>
  <i :class="'icon icon-' + name"></i>
</template>

<script>
export default {
  props: {
    name: String
  }
}
</script>
