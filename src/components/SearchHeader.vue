<template>
    <header>
        <h1>Recipe Search</h1>
        <input 
            @keyup.enter="search"
            v-model="searchTerm" placeholder="Enter a food" class="searchFood" />
        <button @click="search" class="search">Search</button>
    </header>
</template>

<script>
export default {
    data() {
        return {
            searchTerm: ''
        }
    },
    methods: {
        search() {
            //console.log(this.searchTerm)
            this.$emit('search', this.searchTerm)
        }
    }
}
</script>

<style>

</style>