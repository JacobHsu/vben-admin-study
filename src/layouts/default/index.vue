<template>
  <Layout :class="prefixCls">
    Layout
  </Layout>
</template>

<script lang="ts">
  import { defineComponent, computed, unref } from 'vue';
  import { Layout } from 'ant-design-vue';
  import { useDesign } from '/@/hooks/web/useDesign';
  
  export default defineComponent({
    name: 'DefaultLayout',
    components: {
      Layout,
    },
    setup() {
      const { prefixCls } = useDesign('default-layout');

      return {
        prefixCls,
      };
    },
  });
</script>
