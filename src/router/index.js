import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import RecipeDetail from "../views/RecipeDetail.vue";

const routes = [
    { path: '/', name: 'HomePage', component: HomePage},
    { path: '/recipes/:id', name: 'RecipeDetail', component: RecipeDetail }
]

const router = createRouter({    // create a router instanciate
    history: createWebHistory(), // use browser "History" mode, no # 
    routes
})

export default router