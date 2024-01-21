<template>
  <div class="avatar-accessories">
    <UserAccessoriesItem v-for="(type, index) in types" :key="index" :type="type" />
  </div>
</template>

<script setup>
import { onBeforeMount } from "vue"
import { findObjectsByValue } from "@/utils/objectUtils.js"
import UserAccessoriesItem from "@/components/User/UserAccessoriesItem.vue"

const props = defineProps({
  items: {
    type: Object,
    required: true,
  },
})

const typesSlots = {
  Руны: ["RUNE"],
  Усилители: ["ARTIFACT", "LSWEAPON"],
  Косметика: [
    "LIFESTYLEHEAD",
    "LIFESTYLEBACK",
    "LIFESTYLESUIT",
    "LIFESTYLEUNDERWEAR",
    "LIFESTYLESHOULDER",
    "LIFESTYLEPET",
  ],
  Прочее: ["TABARD", "DEATHINSURANCE", "BAG", "DEPOSITBOX"],
}

const types = []

onBeforeMount(() => {
  Object.entries(typesSlots).forEach(([key, slots]) => {
    const type = {
      title: key,
      items: [],
    }

    slots.forEach((slot) => {
      const items = findObjectsByValue(props.items, "slot", slot, "primary")
      if (items) type.items = [...type.items, ...items]
    })

    if (type.items.length > 0) types.push(type)
  })
})
</script>

<style lang="scss" scoped>
.avatar {
  &-accessories {
    & > *:not(:last-child) {
      margin-bottom: 15px;
    }
  }
}
</style>
