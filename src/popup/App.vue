<script lang="ts">
import { h, defineComponent, Component } from 'vue'
import {
  NSpace,
  NLayout,
  NLayoutSider,
  NMenu,
  NButton,
  NIcon,
  NLoadingBarProvider,
  useLoadingBar
} from 'naive-ui'
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon
} from '@vicons/ionicons5'
import { useLocalRef } from './hooks'

export default defineComponent({
  components: {
    NSpace,
    NLayout,
    NLayoutSider,
    NMenu,
    NButton,
    NLoadingBarProvider
  },
  setup() {
    const tabKey = useLocalRef<string>('popup-tab-key', 'power')
    const loadingBar = useLoadingBar()
    console.log(tabKey)

    const handleMenuSelect = (newKey: string) => {
      tabKey.value = newKey
    }
    const handleTest = () => {
      loadingBar.start()
    }
    function renderIcon(icon: Component) {
      return () => h(NIcon, null, { default: () => h(icon) })
    }
    const menuOptions = [
      {
        label: '且听风吟',
        key: 'hear-the-wind-sing',
        icon: renderIcon(BookIcon)
      },
      {
        label: '1973年的弹珠玩具',
        key: 'pinball-1973',
        icon: renderIcon(BookIcon),
        disabled: true,
        children: [
          {
            label: '鼠',
            key: 'rat'
          }
        ]
      },
      {
        label: '寻羊冒险记',
        key: 'a-wild-sheep-chase',
        disabled: true,
        icon: renderIcon(BookIcon)
      },
      {
        label: '舞，舞，舞',
        key: 'dance-dance-dance',
        icon: renderIcon(BookIcon),
        children: [
          {
            type: 'group',
            label: '人物',
            key: 'people',
            children: [
              {
                label: '叙事者',
                key: 'narrator',
                icon: renderIcon(PersonIcon)
              },
              {
                label: '羊男',
                key: 'sheep-man',
                icon: renderIcon(PersonIcon)
              }
            ]
          },
          {
            label: '饮品',
            key: 'beverage',
            icon: renderIcon(WineIcon),
            children: [
              {
                label: '威士忌',
                key: 'whisky'
              }
            ]
          },
          {
            label: '食物',
            key: 'food',
            children: [
              {
                label: '三明治',
                key: 'sandwich'
              }
            ]
          },
          {
            label: '过去增多，未来减少',
            key: 'the-past-increases-the-future-recedes'
          }
        ]
      }
    ]
    return {
      tabKey,
      handleMenuSelect,
      menuOptions,
      handleTest
    }
  }
})
</script>

<template>
  <n-loading-bar-provider>
    <div class="app-root">
      <n-button type="info" @click="handleTest">测试点击</n-button>

      <n-space vertical size="large">
        <n-layout has-sider sider-placement="right">
          <n-layout style="max-height: 320px" />
          <n-layout-sider
            bordered
            show-trigger
            collapse-mode="width"
            :collapsed-width="64"
            :width="240"
            :native-scrollbar="false"
            style="max-height: 320px"
          >
            <n-menu
              :collapsed-width="64"
              :collapsed-icon-size="22"
              :options="menuOptions"
            />
          </n-layout-sider>
        </n-layout>
      </n-space>
    </div>
  </n-loading-bar-provider>
</template>

<style>
body {
  padding: 0;
  margin: 0;
  font-size: 14px;
  width: 100vw;
  height: 100vh;
  /* background-color: aqua; */
  --helper-font1: #252933;
  --helper-font2: #515767;
  --helper-font3: #8a919f;
  --helper-font4: #c2c8d1;
  font-family: Chinese Quote, -apple-system, BlinkMacSystemFont, Segoe UI,
    Roboto, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue,
    Helvetica, Arial, sans-serif;
}
a {
  text-decoration: none;
  cursor: pointer;
}
.app-root {
  width: 100vw;
  height: 100vh;
  display: block;
}
.center-line {
  display: flex;
  flex-flow: row nowrap;
  min-height: 300px;
}
.content-box {
  flex: 1;
  box-sizing: border-box;
  padding: 12px;
}
.scroll-content {
  flex: 1;
  box-sizing: border-box;
  padding: 0 12px;
  min-height: 200px;
  max-height: 450px;
  overflow-y: scroll;
}
.result-title em,
.result-desc em {
  color: red;
  font-style: normal;
}
.el-menu {
  background-color: transparent !important;
}
</style>
