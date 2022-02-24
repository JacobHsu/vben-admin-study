<template>
  <div @click="openDrawer(true)">
    <Icon icon="ion:settings-outline" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import Icon from '/@/components/Icon';

  import { useDrawer } from '/@/components/Drawer';

  export default defineComponent({
    name: 'SettingButton',
    components: { Icon },
    setup() {
      const [register, { openDrawer }] = useDrawer();

      return {
        register,
        openDrawer,
      };
    },
  });
</script>
