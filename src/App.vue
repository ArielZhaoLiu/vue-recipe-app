<template>
  <SearchHeader @search="handleSearch"></SearchHeader>
  <SearchList :recipes="recipes"></SearchList>
  <SearchFooter></SearchFooter>
</template>

<script>
import SearchFooter from './components/SearchFooter.vue';
import SearchHeader from './components/SearchHeader.vue';
import SearchList from './components/SearchList.vue';

export default {
  components: {
    SearchFooter,
    SearchHeader,
    SearchList
  },
  data() {
    return {
      searchTerm: '',
      recipes: []
    }
  },
  methods: {
    async handleSearch(term) {
      this.searchTerm = term;
      await this.search(); 
    },
    async search() {
      const apiKey = '283f13aa7bac49a7a91d0aee0ec334f3';
      const url = `https://api.spoonacular.com/recipes/complexSearch?query=${this.searchTerm}&number=5&apiKey=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        this.recipes = data.results;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  }
}
</script>

<style>

</style>