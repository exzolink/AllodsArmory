<template>
  <AppHeader />

  <main>
    <VCard class="pa-3 pa-sm-6">
      <RouterView />
    </VCard>
  </main>

  <AppFooter />
</template>

<script setup>
import AppHeader from "@/components/AppHeader.vue"
import AppFooter from "@/components/AppFooter.vue"
</script>
