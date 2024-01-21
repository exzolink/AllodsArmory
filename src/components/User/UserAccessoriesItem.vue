<template>
  <VCard class="v-card--background-none" flat>
    <VCardItem class="v-card-item--background-flat">
      <VCardTitle class="text-subtitle-1">{{ type.title }}</VCardTitle>
    </VCardItem>

    <VList class="v-list--background-light">
      <VListItem v-for="(item, index) in type.items" :key="index" min-height="auto">
        <div :class="`item-${formatItemQuality(item.quality)}`" class="d-flex text-lh item-accessories">
          <img :src="item.image" class="icon icon-accessories mr-2" decoding="async" height="24" />

          <span class="align-self-center">{{ item.name }}</span>
        </div>

        <ItemTooltip :item="item" location="start" />
      </VListItem>
    </VList>
  </VCard>
</template>

<script setup>
import { formatItemQuality } from "@/helpers/formatting.js"
import ItemTooltip from "@/components/ItemTooltip.vue"

defineProps({
  type: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.icon-accessories {
  max-width: 24px;
  object-fit: cover;
  border-radius: 2px;
}

.item-accessories {
  cursor: default;
  line-height: normal;
}
</style>
