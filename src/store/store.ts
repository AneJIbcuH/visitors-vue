import { defineStore } from "pinia";
import { ref } from "vue";
import { Visitor } from "../models/models";
import { LS_VISITORS_KEY } from "../vars/const";

export const useStore = defineStore("visitors", () => {
  // модалка
  const isOpenModal = ref<boolean>(false);

  function openCloseModal() {
    isOpenModal.value = !isOpenModal.value;
  }

  // пользователи
  const changedVisitor = ref<Visitor>({
    id:  "",
    name: "",
    company: "",
    group: "Не выбрано",
    online: false,
  })
  const visitors = ref<Visitor[]>(JSON.parse(localStorage.getItem(LS_VISITORS_KEY) ?? '[]'));
  const filterByName = ref<string>("");
  const filterByCompany = ref<string>("");
  const filterByState = ref<string>('all')

  function addVisitor(vis: Visitor) {
    visitors.value.push(vis);
    localStorage.setItem(LS_VISITORS_KEY, JSON.stringify(visitors.value))
  }

  function deleteVisitor(id: string) {
    visitors.value = visitors.value.filter((vis) => vis.id != id);
    localStorage.setItem(LS_VISITORS_KEY, JSON.stringify(visitors.value))
  }

  return {
    isOpenModal,
    openCloseModal,
    visitors,
    addVisitor,
    deleteVisitor,
    filterByName,
    filterByCompany,
    filterByState,
    changedVisitor
  };
});
