<template>
    <section class="main">
        <ul class="recipe-list">
            <li v-for="(item, index) in recipes" :key="item.id">
                <div class="view">
                    <span class="index">{{ index + 1 }}.</span>
                    <span class="recipe-title">                      
                        <router-link :to="`/recipes/${item.id}`" class="link-detail">
                            <img :src="item.image" alt="" class="recipe-image">
                            {{ item.title }}
                        </router-link>
                    </span>

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
