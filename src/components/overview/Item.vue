<template>
  <div class="overview-item">
    <h3 class="overview-item-title">
      <icon :name="icon"/>
      {{ title }}
    </h3>
    <div class="overview-item-data">
      <item-data v-for="item in data" v-bind="item" v-bind:key="item.name"/>
    </div>
  </div>
</template>

<script>
import Icon from '../Icon'
import ItemData from './ItemData'

export default {
  components: { Icon, ItemData },
  props: {
    title: String,
    icon: String,
    data: Array
  }
}
</script>
