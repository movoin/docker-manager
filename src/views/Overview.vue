<template>
  <div class="overview unselectble">
    <h1 class="page-title">{{ $route.meta.title }}</h1>

    <div class="overview-items shadow">
      <data-item v-for="item in data" v-bind="item" v-bind:key="item.title"/>
    </div>

    <div class="shortcuts">
      <h3 class="title">快捷操作</h3>
      <ul class="shadow">
        <li v-for="item in shortcuts" v-bind:key="item.name">
          <shortcut v-bind="item"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Icon from '../components/Icon'
import Shortcut from '../components/Shortcut'
import DataItem from '../components/overview/Item'

export default {
  components: { DataItem, Icon, Shortcut },
  data: () => {
    return {
      data: [
        {
          title: '镜像',
          icon: 'images',
          data: [{ name: '全部镜像', value: 10 }, { name: '异常', value: 2 }]
        },
        {
          title: '容器',
          icon: 'containers',
          data: [{ name: '全部容器', value: 10 }, { name: '异常', value: 2 }]
        }
      ],
      shortcuts: [
        { name: '无效清理容器', desc: '找到并清理构造失败或启动失败的容器', icon: 'clean', link: '/containers' },
        { name: '清理无效镜像', desc: '找到并清理构造失败的镜像', icon: 'layers', link: '/images' }
      ]
    }
  }
}
</script>
