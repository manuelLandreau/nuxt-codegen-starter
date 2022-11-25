<script setup lang="ts">
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';
definePageMeta({ title: 'Home' });
</script>

<template>
  <Header />
  <slot />
  <Footer />
</template>