<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout';
import HomePage from '@/components/pages/HomePage/HomePage.vue';

definePageMeta({ title: 'Home' });
</script>

<template>
  <MainLayout>
    <HomePage />
  </MainLayout>
</template>
