<template>
  <div :class="`item-${formatItemQuality(item.quality)}`" class="d-flex icon-item-wrapper">
    <img v-if="item.image" :src="item.image" class="icon-item" decoding="async" height="45" loading="lazy" width="45" />
    <img
      v-if="item.tier"
      :src="item.tier"
      class="icon icon-item-tier"
      decoding="async"
      height="17"
      loading="lazy"
      width="18"
    />
    <div class="icon-item-border"></div>

    <ItemTooltip v-if="item.id" :item="item" :location="index % 2 === 0 ? 'end' : 'start'" />
  </div>
</template>

<script setup>
import { formatItemQuality } from "@/helpers/formatting.js"
import ItemTooltip from "@/components/ItemTooltip.vue"

defineProps({
  item: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
})
</script>
