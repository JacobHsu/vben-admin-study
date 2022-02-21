<script lang="ts">
  import { defineComponent, computed, unref } from 'vue';
  import { BackTop } from 'ant-design-vue';
  import { useRootSetting } from '/@/hooks/setting/useRootSetting';

  export default defineComponent({
    name: 'LayoutFeatures',
    components: {
      BackTop,
    },
    setup() {
      const { getUseOpenBackTop, getShowSettingButton, getSettingButtonPosition, getFullContent } =
        useRootSetting();

      return {
        getTarget: () => document.body,
        getUseOpenBackTop,
      };
    },
  });
</script>

<template>
  <BackTop v-if="getUseOpenBackTop" :target="getTarget" />
</template>

<style lang="less">
  @prefix-cls: ~'@{namespace}-setting-drawer-feature';

  .@{prefix-cls} {
    position: absolute;
    top: 45%;
    right: 0;
    z-index: 10;
    display: flex;
    padding: 10px;
    color: @white;
    cursor: pointer;
    background-color: @primary-color;
    border-radius: 6px 0 0 6px;
    justify-content: center;
    align-items: center;

    svg {
      width: 1em;
      height: 1em;
    }
  }
</style>
