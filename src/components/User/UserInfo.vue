<template>
  <div class="d-flex avatar-info align-sm-center">
    <div class="icon-wrapper d-flex justify-center mr-3">
      <img :src="raceIcon" class="icon icon-general" decoding="async" height="50" />
    </div>

    <div class="d-flex flex-column">
      <h1 :class="`avatar-class-${user.class}`" class="font-weight-regular avatar-name">{{ user.name }}</h1>

      <div class="d-flex flex-wrap">
        <span v-if="user.guild"> {{ user.guild }}</span>
        <VDivider v-if="user.guild" class="mx-2 border-opacity-50" vertical></VDivider>
        <span>{{ user.faction }}</span>
        <VDivider class="mx-2 border-opacity-50" vertical></VDivider>
        <span>{{ user.server }}</span>
      </div>
    </div>
  </div>

  <VDivider
    :class="{ 'v-divider--vertical': !smAndDown }"
    class="border-opacity-50 mx-md-12 my-4 my-md-0 w-100"
  ></VDivider>

  <div class="d-flex avatar-info align-sm-center">
    <div class="icon-wrapper d-flex justify-center mr-3">
      <img :src="classIcon" class="icon icon-general" decoding="async" height="50" />
    </div>

    <div class="d-flex flex-column">
      <span>
        <template v-if="user.greatness">Великий</template>
        {{ formatClass(user.class) }}
        {{ user.level }} уровня
      </span>
      <span
        >Уровень снаряжения: <strong class="font-weight-medium">{{ user.gear_score }}</strong></span
      >
    </div>
  </div>
</template>

<script setup>
import { formatClass } from "@/helpers/formatting.js"
import { useDisplay } from "vuetify"

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
})

const { smAndDown } = useDisplay()

const raceIcon = new URL(`/src/assets/images/icons/races/${props.user.race}.webp`, import.meta.url)
const classIcon = new URL(`/src/assets/images/icons/classes/${props.user.class}.webp`, import.meta.url)
</script>

<style lang="scss" scoped>
.icon-wrapper {
  width: 50px;
}

.avatar {
  &-name {
    line-height: normal;

    @media screen and (max-width: 415px) {
      font-size: 24px;
    }
  }

  &-class {
    &-mage {
      color: #7e9fff;
    }

    &-paladin {
      color: #cfdc9b;
    }

    &-psionic {
      color: #dd7bf5;
    }

    &-warlock {
      color: #957cff;
    }

    &-priest {
      color: #ffcf7b;
    }

    &-bard {
      color: #6ae6df;
    }

    &-stalker {
      color: #96cc56;
    }

    &-necromancer {
      color: #d0454b;
    }

    &-druid {
      color: #ff763c;
    }

    &-warrior {
      color: #8f774b;
    }

    &-engineer {
      color: #869cae;
    }
  }
}

@media screen and (max-width: 415px) {
  .avatar {
    &-info {
      & span {
        font-size: 14px;
      }
    }
  }
}
</style>
