<template>
  <Layout :class="prefixCls" v-bind="lockEvents">
    Layout
  </Layout>
</template>

<script lang="ts">
  import { defineComponent, computed, unref } from 'vue';
  import { Layout } from 'ant-design-vue';
  export default defineComponent({
    name: 'DefaultLayout',
    components: {
      Layout,
    },
  });
</script>
