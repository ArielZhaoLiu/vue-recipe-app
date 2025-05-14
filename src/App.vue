<template>
  <SearchHeader @search="handleSearch"></SearchHeader>
  <RouterView :recipes="recipes"></RouterView>
  <SearchFooter></SearchFooter>
</template>

<script>
import SearchHeader from '@/components/SearchHeader.vue';
import SearchFooter from '@/components/SearchFooter.vue';

export default {
  name: 'App',
  components: {
    SearchHeader,
    SearchFooter
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
      const apiKey = '3c59b22c1b3c427ea238afa32409cf6e';
      const url = `https://api.spoonacular.com/recipes/complexSearch?query=${this.searchTerm}&number=5&apiKey=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        this.recipes = data.results;
        this.$router.push('/');
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  }
}
</script>

<style>

</style>