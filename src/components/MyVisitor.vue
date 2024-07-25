<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "../store/store";
import { storeToRefs } from "pinia";
import { FilterByState } from "../models/models";

const { deleteVisitor, openCloseModal } = useStore();
const {
  visitors,
  filterByName,
  filterByCompany,
  filterByState,
  changedVisitor,
} = storeToRefs(useStore());

const filteredVisitors = computed(() =>
  visitors.value
    .filter(
      (vis) =>
        vis.name.toLowerCase().includes(filterByName.value.toLowerCase()) &&
        vis.company.toLowerCase().includes(filterByCompany.value.toLowerCase())
    )
    .filter((vis) => {
      switch (filterByState.value) {
        case FilterByState.online:
          return vis.online;
        case FilterByState.offline:
          return !vis.online;
        case FilterByState.all:
          return vis;
        default:
          return "all";
      }
    })
);
</script>

<template>
  <div
    className="row"
    v-for="(visitor, index) in filteredVisitors"
    :key="visitor.id"
    @click="
      () => {
        changedVisitor = visitor;
        openCloseModal();
      }
    "
  >
    <div className="col-1">{{ index + 1 }}</div>
    <div className="col-2">{{ visitor.name }}</div>
    <div className="col-3">{{ visitor.company }}</div>
    <div className="col-4">{{ visitor.group }}</div>
    <div className="center col-5">
      <div :className="visitor.online ? 'true' : 'false'"></div>
    </div>
    <div className="col-6 center">
      <div
        className="icon"
        @click="
          (e) => {
            e.stopPropagation();
            deleteVisitor(visitor.id);
          }
        "
      >
        &#10006;
      </div>
    </div>
  </div>
</template>

<style scoped></style>
