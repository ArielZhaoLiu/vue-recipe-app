<template>
  <SearchHeader 
    @search="handleSearch"
    @cuisine-change="handleCuisineChange"
  ></SearchHeader>
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
      totalPages: 0,
      selectedCuisine: ''
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
    handleCuisineChange(cuisine){
      this.selectedCuisine = cuisine;
      this.search();
    },
    async search(page = 1) {
      const apiKey = '283f13aa7bac49a7a91d0aee0ec334f3';
      const number = 5;
      const offset = (page - 1) * number;
      let url = `https://api.spoonacular.com/recipes/complexSearch?query=${this.searchTerm}&number=${number}&offset=${offset}&apiKey=${apiKey}`;

      if (this.selectedCuisine) {
        url += `&cuisine=${this.selectedCuisine}`;
      }

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