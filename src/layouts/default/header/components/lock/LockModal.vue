<template>
  <BasicModal
    :footer="null"
    :title="lockScreen"
    v-bind="$attrs"
    :class="prefixCls"
    @register="register"
  >
  </BasicModal>

</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicModal } from '/@/components/Modal/index';
  // https://vvbin.cn/doc-next/components/modal.html
  export default defineComponent({
    name: 'LockModal',
    components: { BasicModal },

    setup() {
      return {};
    },
  });
</script>
<style lang="less">
  @prefix-cls: ~'@{namespace}-header-lock-modal';

  .@{prefix-cls} {
    &__entry {
      position: relative;
      height: 240px;
      padding: 130px 30px 30px;
      border-radius: 10px;
    }

    &__header {
      position: absolute;
      top: 0;
      left: calc(50% - 45px);
      width: auto;
      text-align: center;

      &-img {
        width: 70px;
        border-radius: 50%;
      }

      &-name {
        margin-top: 5px;
      }
    }

    &__footer {
      text-align: center;
    }
  }
</style>
