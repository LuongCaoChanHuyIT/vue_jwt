<script setup lang="ts">
import { useThemeLayout } from '@/composable/useThemeLayout';
import { RouterView } from 'vue-router';
useThemeLayout();
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
