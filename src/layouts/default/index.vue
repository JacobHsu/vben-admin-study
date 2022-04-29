<template>
  <Layout :class="prefixCls" v-bind="lockEvents">
    <!-- <LayoutFeatures /> -->
    <LayoutHeader fixed  />
    <Layout :class="[layoutClass]">
        <LayoutSideBar />
    </Layout>
  </Layout>
</template>

<script lang="ts">
  import { defineComponent, computed, unref } from 'vue';
  import { Layout } from 'ant-design-vue';

  import LayoutHeader from './header/index.vue';
  import LayoutSideBar from './sider/index.vue';
  import { createAsyncComponent } from '/@/utils/factory/createAsyncComponent';
  import { useHeaderSetting } from '/@/hooks/setting/useHeaderSetting';
  import { useMenuSetting } from '/@/hooks/setting/useMenuSetting';
  import { useDesign } from '/@/hooks/web/useDesign';
  import { useLockPage } from '/@/hooks/web/useLockPage';
  
  export default defineComponent({
    name: 'DefaultLayout',
    components: {
      LayoutFeatures: createAsyncComponent(() => import('/@/layouts/default/feature/index.vue')),
      LayoutHeader,
      LayoutSideBar,
      Layout,
    },
    setup() {
      const { prefixCls } = useDesign('default-layout');
      const { getShowFullHeaderRef } = useHeaderSetting();
      const { getIsMixSidebar, getShowMenu } = useMenuSetting();

      // Create a lock screen monitor
      const lockEvents = useLockPage();

      const layoutClass = computed(() => {
        let cls: string[] = ['ant-layout'];
        if (unref(getIsMixSidebar) || unref(getShowMenu)) {
          cls.push('ant-layout-has-sider');
        }
        return cls;
      });

      return {
        getShowFullHeaderRef,
        prefixCls,
        lockEvents,
        layoutClass,
      };
    },
  });
</script>
