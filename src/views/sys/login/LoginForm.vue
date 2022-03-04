<template>
  <LoginFormTitle v-show="getShow" class="enter-x" />
</template>
<script lang="ts" setup>
import { reactive, ref, unref, computed } from 'vue';
import LoginFormTitle from './LoginFormTitle.vue';
import { LoginStateEnum, useLoginState, useFormRules, useFormValid } from './useLogin';
const { setLoginState, getLoginState } = useLoginState();
const getShow = computed(() => unref(getLoginState) === LoginStateEnum.LOGIN);

</script>