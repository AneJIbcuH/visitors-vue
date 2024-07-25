<script setup lang="ts">
import { useStore } from "../store/store";
import { storeToRefs } from "pinia";
import { LS_VISITORS_KEY } from "../vars/const";

const { openCloseModal, addVisitor } = useStore();
const { isOpenModal, changedVisitor, visitors } = storeToRefs(useStore());

const addNewVisitorOrChangeHim = () => {
  // меняем визитора
  if (changedVisitor.value.id) {
    const obj = JSON.parse(JSON.stringify(changedVisitor.value));
    visitors.value = visitors.value.map((vis) => {
      if (vis.id == changedVisitor.value.id) {
        return obj;
      }
      return vis;
    });
    localStorage.setItem(LS_VISITORS_KEY, JSON.stringify(visitors.value))
  } else {
    // добавляем нового визитора
    changedVisitor.value.id = Date.now().toString();
    const obj = JSON.parse(JSON.stringify(changedVisitor.value));
    addVisitor(obj);
  }

  clearForm();
};

const clearForm = () => {
  changedVisitor.value = {
    id: "",
    name: "",
    company: "",
    group: "Не выбрано",
    online: false,
  };
  openCloseModal();
};
</script>

<template>
  <el-dialog v-model="isOpenModal" width="500" :before-close="clearForm">
    <form action="" className="form" @submit.prevent="addNewVisitorOrChangeHim">
      <div className="form-row">
        <div>ФИО</div>
        <input v-model="changedVisitor.name" />
      </div>

      <div className="form-row">
        <div>Компания</div>
        <input v-model="changedVisitor.company" />
      </div>

      <div className="form-row">
        <div>Группа</div>
        <select defaultValue="Не выбрано" v-model="changedVisitor.group">
          <option value="Не выбрано">Не выбрано</option>
          <option value="Клиент">Клиент</option>
          <option value="Прохожий">Прохожий</option>
          <option value="Партнер">Партнер</option>
        </select>
      </div>

      <div className="form-row">
        <div>Присутствие</div>
        <input
          type="checkbox"
          className="checkbox"
          v-model="changedVisitor.online"
        />
      </div>
      <button :className="changedVisitor.id ? 'save' : 'add'" type="submit">
        {{ changedVisitor.id ? "Сохранить" : "Добавить" }}
      </button>
      <button @click="clearForm" type="button">Закрыть</button>
    </form>
  </el-dialog>
</template>

<style scoped></style>
