<template>
  <SearchHeader @search="handleSearch"></SearchHeader>
  <RouterView
    :recipes="recipes"
    :current-page="currentPage"
    :total-pages="totalPages"
    @change-page="handlePageChange"
  ></RouterView>
  <SearchFooter 
      :currentPage="currentPage" :totalPages="totalPages" @changePage="handlePageChange"
    ></SearchFooter>
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
      recipes: [],
      currentPage: 1,
      totalResults: 0, 
      totalPages: 0
    }
  },
  methods: {
    async handleSearch(term) {
      this.searchTerm = term;
      this.currentPage = 1;
      await this.search(); 
    },
    handlePageChange(page){
      this.search(page);
    },
    async search(page = 1) {
      const apiKey = '3c59b22c1b3c427ea238afa32409cf6e';
      const number = 5;
      const offset = (page - 1) * number;
      const url = `https://api.spoonacular.com/recipes/complexSearch?query=${this.searchTerm}&number=${number}&offset=${offset}&apiKey=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        this.recipes = data.results;
        this.totalResults = data.totalResults;
        this.totalPages = Math.ceil(this.totalResults / number);
        this.currentPage = page;
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