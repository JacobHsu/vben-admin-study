<template>
  <transition name="fade-bottom" mode="out-in">
    LockPage
  </transition>
</template>
<script lang="ts" setup>
  import { computed } from 'vue';

  import { useLockStore } from '/@/store/modules/lock';

  const lockStore = useLockStore();
  const getIsLock = computed(() => lockStore?.getLockInfo?.isLock ?? false);
</script>
