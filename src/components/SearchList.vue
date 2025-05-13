<template>
    <section class="main">
        <ul class="recipe-list">
            <li v-for="(item, index) in recipes" :key="item.id">
                <div class="view">
                    <span class="index">{{ index + 1 }}.</span>
                    <router-link :to="`/recipes/${item.id}`" class="recipe-title">
                        <img :src="item.image" alt="" class="recipe-image">
                        {{ item.title }}
                    </router-link>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    props: {
        recipes: Array
    }
}
</script>

<style>

</style>
