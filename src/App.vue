<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <ConfigProvider :locale="getAntdLocale">
    <AppProvider>
      <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
    </AppProvider>
  </ConfigProvider>
  Hello World
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<script setup lang="ts">
import { ConfigProvider } from 'ant-design-vue';
import { AppProvider } from '/@/components/Application';
import { useLocale } from '/@/locales/useLocale';
// support Multi-language
const { getAntdLocale } = useLocale();

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>
