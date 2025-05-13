<template>
    <SearchList :recipes="recipes"></SearchList>
    <SearchFooter></SearchFooter>
</template>

<script>
import SearchFooter from '@/components/SearchFooter.vue';
import SearchList from '@/components/SearchList.vue';

export default {
  props: ['recipes'],
    name: 'HomePage',
  components: {
    SearchFooter,
    SearchList
  }
}
</script>

<style>

</style>