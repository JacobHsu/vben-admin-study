<template>
  <Layout :class="prefixCls" v-bind="lockEvents">
    Layout
  </Layout>
</template>

<script lang="ts">
  import { defineComponent, computed, unref } from 'vue';
  import { Layout } from 'ant-design-vue';
  import { useDesign } from '/@/hooks/web/useDesign';
  import { useLockPage } from '/@/hooks/web/useLockPage';
  
  export default defineComponent({
    name: 'DefaultLayout',
    components: {
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
