<template>
  <div class="overview-item-group">
    <div class="overview-item-name">{{ name }}</div>
    <div class="overview-item-value">{{ value }}</div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    value: Number
  }
}
</script>
