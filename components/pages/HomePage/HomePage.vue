<script setup lang="ts">
import { useHomepageQuery } from './HomePage.generated'

const { data, pending } = await useAsyncData('HomepageQuery', async () =>
  await useHomepageQuery({
    variables: {
      locale: 'fr'
    }
  }).then(resp => resp.data.value?.homepage)
)
</script>

<template>
  <div v-if="!pending">
    <h1 class="text-3xl font-bold underline">
      {{ data.title }}
    </h1>
  </div>
  <div v-else>Loading...</div>
</template>
