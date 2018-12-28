<template>
  <div class="images unselectble">
    <h1 class="page-title">
      <icon name="containers"/>
      {{ $route.meta.title }}
    </h1>

    <div class="table shadow">
      <table>
        <thead>
          <tr>
            <th class="table-checkable">
              <input type="checkbox" v-model="selected" v-on:click="selectedAll">
            </th>
            <th>容器</th>
            <th>镜像</th>
            <th>状态</th>
            <th>创建于</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id" v-bind="item">
            <td class="table-checkable">
              <input type="checkbox" name="images" v-model="selectedItems" :value="item.id">
            </td>
            <td>{{ item.name }}</td>
            <td>{{ item.image }}</td>
            <td>{{ item.status }}</td>
            <td>{{ item.created_at }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2">
              <button class="btn">
                <icon name="del"/>&nbsp;删除
              </button>
            </td>
            <td colspan="4">
              <div class="pagination">
                <button class="prev">
                  <icon name="left"/>
                </button>
                <button class="next" disabled>
                  <icon name="right"/>
                </button>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
import Icon from '../components/Icon'

export default {
  components: { Icon },
  methods: {
    selectedAll: function () {
      this.selectedItems = []

      if (this.selected === false) {
        this.items.forEach((item) => {
          this.selectedItems.push(item.id)
        })
      }
    }
  },
  watch: {
    selectedItems: function () {
      if (this.selectedItems.length === this.items.length) {
        this.selected = true
      } else {
        this.selected = false
      }
    }
  },
  data: () => {
    return {
      selected: false,
      selectedItems: [],
      items: [
        { id: '1e1148e4cc1c', name: 'devops_name', image: 'movoin/devops-centos:7', status: 'Exited (1)', created_at: '3 weeks ago' }
      ]
    }
  }
}
</script>
