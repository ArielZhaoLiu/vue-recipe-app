<template>
  <div>
    <SearchList :recipes="recipes"></SearchList>
  </div>
</template>

<script>
import SearchList from '@/components/SearchList.vue';

export default {
  
  name: 'HomePage',
  components: {
    SearchList
  },
  props: ['recipes', 'currentPage', 'totalPages']
}
</script>

<style>

</style>