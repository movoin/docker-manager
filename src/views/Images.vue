<template>
  <div class="images unselectble">
    <h1 class="page-title">
      <icon name="images"/>
      {{ $route.meta.title }}
    </h1>

    <div class="table shadow">
      <table>
        <thead>
          <tr>
            <th class="table-checkable">
              <input type="checkbox" v-model="selected" v-on:click="selectedAll">
            </th>
            <th>镜像</th>
            <th>标签</th>
            <th>IMAGE ID</th>
            <th>大小</th>
            <th>创建于</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id" v-bind="item">
            <td class="table-checkable">
              <input type="checkbox" name="images" v-model="selectedItems" :value="item.id">
            </td>
            <td>{{ item.name }}</td>
            <td>{{ item.tag }}</td>
            <td>{{ item.id }}</td>
            <td>{{ item.size }}</td>
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
        { id: '1e1148e4cc1c', name: 'centos1', tag: '7', size: '202MB', created_at: '3 weeks ago' },
        { id: '1e1148e4cc2c', name: 'centos2', tag: '7', size: '202MB', created_at: '3 weeks ago' },
        { id: '1e1148e4cc3c', name: 'centos3', tag: '7', size: '202MB', created_at: '3 weeks ago' },
        { id: '1e1148e4cc4c', name: 'centos4', tag: '7', size: '202MB', created_at: '3 weeks ago' },
        { id: '1e1148e4cc5c', name: 'centos5', tag: '7', size: '202MB', created_at: '3 weeks ago' },
        { id: '1e1148e4cc6c', name: 'centos6', tag: '7', size: '202MB', created_at: '3 weeks ago' },
        { id: '1e1148e4cc7c', name: 'centos7', tag: '7', size: '202MB', created_at: '3 weeks ago' },
        { id: '1e1148e4cc8c', name: 'centos8', tag: '7', size: '202MB', created_at: '3 weeks ago' }
      ]
    }
  }
}
</script>
