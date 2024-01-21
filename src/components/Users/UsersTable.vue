<template>
  <VSkeletonLoader :class="{ loaded: !loading }" :loading="loading" type="table-row-divider@7">
    <VDataTable :headers="headers" :items="users" :items-per-page="0" class="allods-table" hover>
      <template #item.name="{ item, value }">
        <RouterLink :to="{ name: 'user', params: { id: item.id, slug: item.slug } }" class="color--active">
          {{ value }}
        </RouterLink>
        <span v-if="item.guild" class="ml-1 text-caption">&lt;{{ item.guild }}&gt;</span>
      </template>

      <template #item.class="{ value }">
        {{ formatClass(value) }}
      </template>

      <template #item.race="{ value }">
        {{ formatRace(value) }}
      </template>

      <template #bottom></template>
    </VDataTable>
  </VSkeletonLoader>
</template>

<script setup>
import { formatClass, formatRace } from "@/helpers/formatting"

defineProps({
  users: Array,
  loading: Boolean,
})

const headers = [
  {
    align: "center",
    key: "gear_score",
    title: "Рейтинг",
  },
  {
    key: "name",
    sortable: false,
    title: "Персонаж",
  },
  {
    align: "center",
    key: "level",
    sortable: false,
    title: "Уровень",
  },
  {
    align: "center",
    key: "class",
    sortable: false,
    title: "Класс",
  },
  {
    align: "center",
    key: "race",
    sortable: false,
    title: "Раса",
  },
  {
    align: "center",
    key: "faction",
    sortable: false,
    title: "Фракция",
  },
  {
    align: "center",
    key: "server",
    sortable: false,
    title: "Сервер",
  },
]
</script>

<style lang="scss">
.allods-table.v-table {
  background: $bg-default-flat;

  & .v-table__wrapper > table {
    & > thead > tr > th,
    & > tbody > tr > td {
      padding: 14px;
      font-size: 16px;
      font-weight: 700;

      @media screen and (max-width: 600px) {
        padding: 10px 5px;
        font-size: 12px;
      }
    }

    & > tbody > tr > td {
      font-weight: 400;
    }

    & > thead > tr > th:not(.v-data-table__th--sorted) .v-data-table-header__sort-icon {
      opacity: 0.25;
    }
  }

  & .color--active {
    color: $pink;
    text-decoration: none;
    border-bottom: 1px solid transparent;

    &:hover {
      border-color: $pink;
    }
  }
}
</style>
