<template>
    <footer class="footer">
        <div v-if="showPage">
            <button class="pre"
                :disabled="currentPage === 1"
                @click="$emit('changePage', currentPage - 1)"
            >Prev</button>

            <span>Page {{ currentPage }} of {{ totalPages }}</span>

            <button class="next"
                :disabled="currentPage === totalPages"
                @click="$emit('changePage', currentPage + 1)"
            >Next</button>
        </div>
        <div v-else class="before-search">
            <p>🤔 Not sure what’s for dinner?</p>
            <p>🍳 Want to try cooking something new?</p>
            <p>🔍 Start searching and cook up some inspiration!</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'SearchFooter',
    props: ['currentPage', 'totalPages'],
    computed: {
        showPage() {
            return this.totalPages > 0;
        }
    }
}
</script>

<style>
.before-search{
    height: 6.5rem;
    text-align: left;
}
</style>