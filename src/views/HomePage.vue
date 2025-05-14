<template>
    <SearchList :recipes="recipes"></SearchList>
</template>

<script>
import SearchList from '@/components/SearchList.vue';

export default {
  props: ['recipes'],
    name: 'HomePage',
  components: {
    SearchList
  }
}
</script>

<style>

</style>