<script setup lang="ts">
import { useStore } from '../store/store';
import { storeToRefs } from "pinia";

const { openCloseModal } = useStore()
const { visitors, filterByName, filterByCompany } = storeToRefs(useStore());
</script>

<template>
  <div className="nav">
      <img src="https://i.ibb.co/xjr3F8P/image.png" alt="" />
      <input placeholder="Поиск по имени" v-model="filterByName"/>
      <input placeholder="Поиск по компании" v-model="filterByCompany"/>
      <button className="add" @click="openCloseModal">
        Добавить
      </button>
      <div>
        Посетители
        <br />
        <span className="all">{{visitors.filter((el) => el.online == true).length}}</span> /{{" "}}
        <span className="online">{{visitors.filter((el) => el.online == false).length}}</span>
      </div>
    </div>
</template>

<style scoped></style>