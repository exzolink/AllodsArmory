<template>
  <VCard class="avatar-card v-card--background-flat d-flex align-center px-8 px-sm-10" flat>
    <img :alt="formatClass(className)" :src="classImage" class="avatar-image" decoding="async" />

    <VRow class="items my-7">
      <VCol v-for="(item, index) in currentItems" :key="index" class="d-flex item" cols="6">
        <UserGearItem :item="item" :index="index" />
      </VCol>

      <VCol class="d-flex justify-center py-2" cols="12">
        <VBtn
          :class="{ 'btn-toggle--equip': !isPrimaryItemsSelected }"
          class="btn-toggle flex-grow-1 flex-sm-grow-0"
          height="36"
          rounded
          variant="tonal"
          @click="toggleItems"
          >{{ isPrimaryItemsSelected ? "Драконий облик" : "Экипировка" }}
        </VBtn>
      </VCol>
    </VRow>
  </VCard>
</template>

<script setup>
import { onBeforeMount, ref } from "vue"
import { findObjectByValue } from "@/utils/objectUtils.js"
import { formatClass } from "@/helpers/formatting.js"
import UserGearItem from "@/components/User/UserGearItem.vue"

const props = defineProps({
  className: {
    type: String,
    required: true,
  },
  items: {
    type: Object,
    required: true,
  },
})

const classImage = new URL(`/src/assets/images/characters/${props.className}.webp`, import.meta.url)

let isPrimaryItemsSelected = ref(true)
const currentItems = ref([])
const primaryItems = []
const dragonItems = []

const slots = [
  "HELM",
  "EARRINGS",
  "MANTLE",
  "EARRINGS",
  "CLOAK",
  "NECKLACE",
  "ARMOR",
  "SHIRT",
  "GLOVES",
  "BRACERS",
  "BELT",
  "RING",
  "PANTS",
  "RING",
  "BOOTS",
  "TRINKET",
  "MAINHAND",
  "TWOHANDED",
  "DUALWIELD",
  "RANGED",
  "OFFHAND",
  "AMMO",
]

const toggleItems = () => {
  if (isPrimaryItemsSelected.value) {
    currentItems.value = dragonItems
  } else {
    currentItems.value = primaryItems
  }
  isPrimaryItemsSelected.value = !isPrimaryItemsSelected.value
}

const insertItem = (item, array, slot) => {
  if (!item) {
    if (slot !== "MAINHAND" && slot !== "TWOHANDED" && slot !== "DUALWIELD") array.push({})
    return
  }
  array.push(item)
}

onBeforeMount(() => {
  slots.forEach((slot) => {
    const primaryItem = findObjectByValue(props.items, "slot", slot, "primary", primaryItems)
    insertItem(primaryItem, primaryItems, slot)

    if (slot !== "AMMO") {
      const dragonItem = findObjectByValue(props.items, "slot", slot, "secondary", dragonItems)
      insertItem(dragonItem, dragonItems, slot)
    }
  })
  currentItems.value = primaryItems
})
</script>

<style lang="scss" scoped>
.item {
  &:nth-child(2n) {
    justify-content: flex-end;
  }
}

.avatar {
  &-card {
    position: relative;
  }

  &-image {
    position: absolute;
    max-width: 55%;
    max-height: 580px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media screen and (max-width: 500px) {
      display: none;
    }
  }
}

.btn {
  &-toggle {
    color: $pink;
    width: 35%;
    min-width: 200px;

    &--equip {
      color: $darkgreen;
    }
  }
}
</style>
