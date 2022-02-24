<template>
  <div :class="prefixCls" class="relative w-full h-full px-4">
    SessionTimeoutLogin > Login.vue
  </div>
</template>
<script lang="ts" setup>
  import { useGlobSetting } from '/@/hooks/setting';
  import { useDesign } from '/@/hooks/web/useDesign';
  const globSetting = useGlobSetting();
  const { prefixCls } = useDesign('login');
</script>
