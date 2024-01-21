<template>
  <VForm ref="form" @submit.prevent="handleForm">
    <VTextField
      v-model="name"
      :rules="validateName"
      clearable
      class="mb-5"
      hide-details="auto"
      placeholder="Экзолинк"
      label="Имя персонажа"
    ></VTextField>

    <VSelect
      v-model="server"
      clearable
      :items="servers"
      class="mb-6"
      item-title="name"
      item-value="id"
      hide-details
      placeholder="Выберите сервер"
      label="Сервер"
    >
    </VSelect>

    <div class="d-flex flex-column flex-sm-row">
      <VBtn :loading="loading" :disabled="loading" type="submit" variant="outlined" class="color--submit" height="40"
        >Применить</VBtn
      >
      <VDivider color="transparent" vertical class="mx-2 my-2 my-sm-0"></VDivider>
      <VBtn
        :loading="loading"
        :disabled="loading"
        type="button"
        @click="resetTable"
        variant="outlined"
        class="color--danger"
        height="40"
        >Сбросить</VBtn
      >
    </div>
  </VForm>
</template>

<script setup>
import { ref } from "vue"
import { validateName } from "@/helpers/validation"
import { getUsers } from "@/services/api"

defineProps({
  servers: Array,
})

const emit = defineEmits(["usersFetched"])

const form = ref()
const name = ref("")
const server = ref(null)
const loading = ref(false)

const handleForm = async () => {
  const { valid } = await form.value.validate()

  if (valid) {
    loading.value = true
    try {
      const response = await getUsers(name.value, server.value)
      emit("usersFetched", response.data.data)
    } catch (error) {
      console.log(error)
    } finally {
      loading.value = false
    }
  }
}

const resetTable = async () => {
  loading.value = true
  form.value.reset()
  try {
    const response = await getUsers()
    emit("usersFetched", response.data.data)
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
}
</script>

<style lang="scss" scoped>
.color {
  &--submit {
    color: $green;
  }

  &--danger {
    color: $orange;
  }
}
</style>
