<template>
    <header>
        <h1>Find a Recipe</h1>
        <input 
            @keyup.enter="search"
            v-model="searchTerm" placeholder="Search for recipes..." class="searchFood" />
        <button @click="search" class="search">Search</button>
    </header>
    <div class="filter">
        <label for="cuisine">Filter by Cuisines: </label>
        <select name="" id="cuisine" v-model="selectedCuisine"  @change="handleCuisineChange">
            <option value="">All</option>
            <option v-for="cuisine in cuisines" :key="cuisine" :value="cuisine">{{ cuisine }}</option>
        </select>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchTerm: '',
            cuisines: [
                'African', 'Asian', 'American', 'British', 'Cajun', 'Caribbean',
                'Chinese', 'Eastern European', 'European', 'French', 'German',
                'Greek', 'Indian', 'Irish', 'Italian', 'Japanese', 'Jewish',
                'Korean', 'Latin American', 'Mediterranean', 'Mexican',
                'Middle Eastern', 'Nordic', 'Southern', 'Spanish', 'Thai', 'Vietnamese'
            ],
            selectedCuisine: ''
        }
    },
    methods: {
        search() {
            if (this.searchTerm.trim() === ''){
                alert('Please enter a food keyword to search')
                return
            }
            this.$emit('search', this.searchTerm)
        },
        handleCuisineChange() {
            this.$emit('cuisine-change', this.selectedCuisine);
        }
    }
}
</script>

<style>
.filter {
  margin: 2rem 0.8rem;
  font-family: 'Helvetica Neue', sans-serif;
  text-align: center;
}   

.filter label {
  font-size: 1.125rem;
  margin-right: 0.5rem;
  color: #5a2d2d;
}

.filter select {
  padding: 0.3rem 0.3rem;
  font-size: 1rem;
  border: 1px solid #5a2d2d;
  border-radius: 6px;
  background-color: #fff;
  color: #5a2d2d;
  transition: border-color 0.2s ease;
}

.filter select:focus {
  border-color: #a44b4b;
}

</style>