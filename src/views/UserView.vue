<template>
  <VProgressCircular v-if="loading" class="d-flex mx-auto my-16" indeterminate size="300">
    <VChip class="text-h6 font-weight-regular">Загрузка...</VChip>
  </VProgressCircular>

  <VContainer v-else>
    <VRow class="mb-10 flex-md-row flex-column">
      <UserInfo :user="user" />
    </VRow>

    <VRow>
      <VCol class="d-flex pa-0 pr-md-3" cols="12" md="8">
        <UserGear :class-name="user.class" :items="user.items" />
      </VCol>

      <VCol class="avatar-sidebar pa-0 pl-md-3 mt-6 mt-md-0" cols="12" md="4">
        <UserAccessories :items="user.items" />
      </VCol>
    </VRow>
  </VContainer>
</template>

<script setup>
import { onBeforeMount, ref } from "vue"
import { getUser } from "@/services/api"
import { useRoute, useRouter } from "vue-router"
import UserAccessories from "@/components/User/UserAccessories.vue"
import UserGear from "@/components/User/UserGear.vue"
import UserInfo from "@/components/User/UserInfo.vue"

const loading = ref(true)

const router = useRouter()
const route = useRoute()

const id = route.params.id
const user = ref({})

onBeforeMount(async () => {
  try {
    const response = await getUser(id)
    user.value = response.data.data
    loading.value = false
  } catch (error) {
    await router.push({ name: "home" })
  }
})
</script>

<style lang="scss">
.item-quality {
  &-common {
    color: #00e526;
  }

  &-uncommon {
    color: #2080ff;
  }

  &-rare {
    color: #c040ff;
  }

  &-epic {
    color: #ff8000;
  }

  &-legendary {
    color: #00ff96;
  }

  &-relic {
    color: #e0ff40;
  }

  &-dragon {
    color: #fb5ead;
  }
}
</style>
