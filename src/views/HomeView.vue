<template>
  <VCardTitle class="pa-0 mb-5 mb-sm-8">
    <h1 class="font-weight-regular text-h5 text-sm-h4">Поиск персонажа</h1>
  </VCardTitle>

  <VRow class="mb-10" no-gutters>
    <VCol cols="12" lg="6">
      <UsersForm :servers="servers" @users-fetched="setNewUsers" />
    </VCol>
  </VRow>

  <UsersTable :loading="loading" :users="users" />
</template>

<script setup>
import UsersTable from "@/components/Users/UsersTable.vue"
import UsersForm from "@/components/Users/UsersForm.vue"
import { onBeforeMount, ref } from "vue"
import { getUsers } from "@/services/api"

const loading = ref(true)
const users = ref([])
const servers = ref([])

const setNewUsers = (items) => {
  users.value = items
}

onBeforeMount(async () => {
  try {
    const response = await getUsers()
    users.value = response.data.data
    servers.value = response.data.meta.servers
    loading.value = false
  } catch (error) {
    console.log(error)
  }
})
</script>
