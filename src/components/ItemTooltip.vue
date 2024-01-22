<template>
  <v-tooltip
    :location="location"
    :location-strategy="mobile ? 'static' : 'connected'"
    activator="parent"
    class="item-tooltip"
    close-on-back="true"
    close-on-content-click="true"
    max-width="350"
    min-width="300"
    open-on-focus="true"
    transition="fade-transition"
  >
    <span :class="`item-${formatItemQuality(item.quality)}`" class="font-weight-bold item-tooltip__name mb-1 d-block">
      {{ item.name }}
    </span>
    <span v-if="item.binding !== 'BindNone'" class="ao_golden">{{ formatBinding(item.binding) }}</span>

    <div class="d-flex justify-space-between ao_gray">
      <span v-if="item.slot">{{ formatSlotName(item.slot) }}</span>
      <span v-if="item.item_class">{{ item.item_class }}</span>
    </div>

    <div class="d-flex justify-space-between ao_base">
      <span v-if="item.level > 1">Уровень: {{ item.level }}</span>
      <span v-if="item.required_level > 1">Требуемый уровень: {{ item.required_level }}</span>
    </div>

    <template v-if="!isEmpty(item.stats_special)">
      <div class="d-flex justify-space-between ao_white">
        <span>Спец. характеристики</span>
        <span class="font-weight-bold">{{ sumValues(item.stats_special) }}</span>
      </div>

      <div class="d-flex flex-column ml-3 ao_gray">
        <template v-for="(statValue, statName, index) in item.stats_special" :key="index">
          <span v-if="statValue > 0">+{{ statValue }} {{ formatStatName(statName) }}</span>
        </template>
      </div>
    </template>

    <template v-if="!isEmpty(item.stats_main)">
      <div class="d-flex justify-space-between ao_white">
        <span>Характеристики</span>
        <span class="font-weight-bold">{{ sumValues(item.stats_main) }}</span>
      </div>

      <div class="d-flex flex-column ml-3 ao_gray">
        <template v-for="(statValue, statName, index) in item.stats_main" :key="index">
          <span v-if="statValue > 0">+{{ statValue }} {{ formatStatName(statName) }}</span>
        </template>
      </div>
    </template>

    <template v-if="!isEmpty(item.stats_def)">
      <div class="d-flex justify-space-between ao_white">
        <span>Сопротивляемость</span>
      </div>

      <div class="d-flex flex-column ml-3 ao_gray">
        <template v-for="(statValue, statName, index) in item.stats_def" :key="index">
          <span v-if="statValue > 0">+{{ statValue }} {{ formatStatName(statName) }}</span>
        </template>
      </div>
    </template>

    <template v-if="item.defence && item.offence">
      <VDivider class="my-2 border-opacity-50" />

      <div class="d-flex flex-column ml-3 mb-1 ao_gray">
        <span>{{ item.offence }}% - Атакующая эффективность</span>
        <span>{{ item.defence }}% - Защитная эффективность</span>
      </div>
    </template>

    <div class="item-tooltip__description ao_golden" v-html="item.description"></div>
    <span v-if="item.lifetime > 0" class="ao_blue"
      >Предмет исчезнет через: {{ convertMsToDays(item.lifetime) }} дн.</span
    >
  </v-tooltip>
</template>

<script setup>
import { useDisplay } from "vuetify"
import {
  convertMsToDays,
  formatBinding,
  formatItemQuality,
  formatSlotName,
  formatStatName,
} from "@/helpers/formatting.js"
import { isEmpty, sumValues } from "@/utils/objectUtils.js"

defineProps({
  item: {
    type: Object,
    required: true,
  },
})

const { mobile } = useDisplay()
</script>

<style lang="scss">
.item-tooltip {
  &.v-tooltip > .v-overlay__content {
    font-size: 12px;
    background-color: darken($black, 4%);
    padding: 16px;
  }

  &__name {
    display: flex;
    font-size: 14px;
    line-height: normal;
  }
}

.ao {
  &_green {
    color: #00e526;
  }

  &_white {
    color: #ddd;
  }

  &_golden {
    color: #ffd400;
  }

  &_base {
    color: #a0d0b0;
  }

  &_gray {
    color: #aaa;
  }

  &_red {
    color: #d22;
  }

  &_purple {
    color: #a1b;
  }

  &_blue {
    color: #508cff;
  }
}
</style>
