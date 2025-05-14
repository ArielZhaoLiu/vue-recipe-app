<template>
    <footer class="footer">
        <button class="pre"
            :disabled="currentPage === 1"
            @click="$emit('changePage', currentPage - 1)"
        >Prev</button>

        <span>Page {{ currentPage }} of {{ totalPages }}</span>

        <button class="next"
            :disabled="currentPage === totalPages"
            @click="$emit('changePage', currentPage + 1)"
        >Next</button>
    </footer>
</template>

<script>
export default {
    name: 'SearchFooter',
    props: ['currentPage', 'totalPages']
}
</script>

<style>

</style>