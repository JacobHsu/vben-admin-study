<template>
  <Layout :class="prefixCls" v-bind="lockEvents">
    <!-- <LayoutFeatures /> -->
    <LayoutHeader fixed  />
  </Layout>
</template>

<script lang="ts">
  import { defineComponent, computed, unref } from 'vue';
  import { Layout } from 'ant-design-vue';

  import LayoutHeader from './header/index.vue';
  import { createAsyncComponent } from '/@/utils/factory/createAsyncComponent';
  import { useHeaderSetting } from '/@/hooks/setting/useHeaderSetting';
  import { useDesign } from '/@/hooks/web/useDesign';
  import { useLockPage } from '/@/hooks/web/useLockPage';
  
  export default defineComponent({
    name: 'DefaultLayout',
    components: {
      LayoutFeatures: createAsyncComponent(() => import('/@/layouts/default/feature/index.vue')),
      LayoutHeader,
      Layout,
    },
    setup() {
      const { prefixCls } = useDesign('default-layout');
      const { getShowFullHeaderRef } = useHeaderSetting();

      // Create a lock screen monitor
      const lockEvents = useLockPage();

      return {
        getShowFullHeaderRef,
        prefixCls,
        lockEvents,
      };
    },
  });
</script>
