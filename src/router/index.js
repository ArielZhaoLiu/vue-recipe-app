import { createRouter, createWebHistory } from "vue-router";
import RecipeDetail from "../views/RecipeDetail.vue";

const routes = [
    { path: '/recipes/:id', name: 'RecipeDetail', component: RecipeDetail }
]

const router = createRouter({    // create a router instanciate
    history: createWebHistory(), // use browser "History" mode, no # 
    routes
})

export default router