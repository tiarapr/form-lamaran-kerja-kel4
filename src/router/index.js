import { createRouter, createWebHistory } from "vue-router";
import TableData from "@/components/TableData.vue";
import Form from '@/components/Form.vue'
import Detail from '@/components/Detail.vue'

const routes = [
  {path: "/", name: "home", component: TableData},
  {path: "/create", name: "create-data", component: Form},
  {path: "/:id", name: "detail", component: Detail, props: true},
  {path: "/:id/edit", name: "edit", component: Form, props: true}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router