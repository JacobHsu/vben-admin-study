<template>
  <Layout :class="prefixCls" v-bind="lockEvents">
    <LayoutFeatures />
    Layout
  </Layout>
</template>

<script lang="ts">
  import { defineComponent, computed, unref } from 'vue';
  import { Layout } from 'ant-design-vue';
  import { createAsyncComponent } from '/@/utils/factory/createAsyncComponent';
  import { useDesign } from '/@/hooks/web/useDesign';
  import { useLockPage } from '/@/hooks/web/useLockPage';
  
  export default defineComponent({
    name: 'DefaultLayout',
    components: {
      LayoutFeatures: createAsyncComponent(() => import('/@/layouts/default/feature/index.vue')),
      Layout,
    },
    setup() {
      const { prefixCls } = useDesign('default-layout');

      // Create a lock screen monitor
      const lockEvents = useLockPage();

      return {
        prefixCls,
        lockEvents,
      };
    },
  });
</script>
