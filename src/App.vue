<template>
  <SearchHeader @search="handleSearch"></SearchHeader>
  <RouterView :recipes="recipes"></RouterView>
</template>

<script>
import SearchHeader from '@/components/SearchHeader.vue';

export default {
  name: 'App',
  components: {
    SearchHeader
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