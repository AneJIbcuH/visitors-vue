<script setup lang="ts">
import { useStore } from "../store/store";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { FilterByState } from "../models/models";

const { filterByState } = storeToRefs(useStore());

const activeBtn = ref(3);
</script>

<template>
  <div className="filter">
    Фильтровать по:
    <button
      :className="activeBtn == 1 ? 'active' : ''"
      @click="
        () => {
          activeBtn = 1;
          filterByState = FilterByState.offline
        }
      "
    >
      Отсутствующим
    </button>
    <button
      :className="activeBtn == 2 ? 'active' : ''"
      @click="
        () => {
          activeBtn = 2;
          filterByState = FilterByState.online
        }
      "
    >
      Присутствующим
    </button>
    <button
      :className="activeBtn == 3 ? 'active' : ''"
      @click="
        () => {
          activeBtn = 3;
          filterByState = FilterByState.all
        }
      "
    >
      Без фильтра
    </button>
  </div>
</template>

<style scoped></style>
