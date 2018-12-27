<template>
  <div class="overview">
    <h1 class="page-title">{{ $route.meta.title }}</h1>

    <div class="overview-items shadow">
      <div class="overview-item">
        <h3 class="overview-item-title">
          <icon name="images"/>镜像
        </h3>
        <div class="overview-item-data">
          <div class="overview-item-group">
            <div class="overview-item-name">全部镜像</div>
            <div class="overview-item-value">10</div>
          </div>
          <div class="overview-item-group">
            <div class="overview-item-name">异常镜像</div>
            <div class="overview-item-value">2</div>
          </div>
        </div>
      </div>

      <div class="overview-item">
        <h3 class="overview-item-title">
          <icon name="containers"/>容器
        </h3>
        <div class="overview-item-data">
          <div class="overview-item-group">
            <div class="overview-item-name">全部容器</div>
            <div class="overview-item-value">10</div>
          </div>
          <div class="overview-item-group">
            <div class="overview-item-name">异常容器</div>
            <div class="overview-item-value">2</div>
          </div>
        </div>
      </div>
    </div>

    <div class="shortcuts">
      <h3 class="title">快捷操作</h3>
      <ul>
        <li>
          <a href class="shortcut">
            <div class="image">
              <icon name="clean"/>
            </div>
            <div class="summary">
              <h4>无效清理容器</h4>
              <small>找到并清理构造失败或启动失败的容器</small>
            </div>
          </a>
        </li>
        <li>
          <a href class="shortcut">
            <div class="image">
              <icon name="layers"/>
            </div>
            <div class="summary">
              <h4>清理无效镜像</h4>
              <small>找到并清理构造失败的镜像</small>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Icon from '../components/Icon'

export default {
  components: { Icon }
}
</script>
