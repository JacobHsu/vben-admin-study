<script lang="ts">
  import { defineComponent, computed, unref } from 'vue';
  import { BackTop } from 'ant-design-vue';

  export default defineComponent({
    name: 'LayoutFeatures',
    components: {
      BackTop,
    },
  });
</script>

<template>
  <BackTop />
</template>


