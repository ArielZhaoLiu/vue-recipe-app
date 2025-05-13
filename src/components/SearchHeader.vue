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
            if (this.searchTerm.trim() === ''){
                alert('Please enter a food keyword to search')
                return
            }
            this.$emit('search', this.searchTerm)
        }
    }
}
</script>

<style>

</style>