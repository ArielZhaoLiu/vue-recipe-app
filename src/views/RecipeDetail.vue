<template>
  <div v-if="recipe" class="recipe-detail">
    <h2 class="title">{{ recipe.title }}</h2>
    <img :src="recipe.image" :alt="recipe.title" />

    <div class="health-info">
      <p><strong>Vegan:</strong> {{ recipe.vegan ? 'Yes' : 'No' }}</p>
      <p><strong>Dairy Free:</strong> {{ recipe.dairyFree ? 'Yes' : 'No' }}</p>
    </div>

    <h2>Ingredients</h2>
    <ul>
      <li v-for="(ingredient, index) in recipe.extendedIngredients" :key="ingredient.id">
        <input type="checkbox" v-model="checkedIngredients[index]">
        <span :class="{ 'crossed': checkedIngredients[index] }">
          <span class="ingredient-name">{{ ingredient.name }}</span>  
          <span class="ingredient-measure">{{ ingredient.measures.us.amount }} {{ ingredient.measures.us.unitShort }}</span>
      </span>
      </li>
    </ul>

    <h2>Instructions</h2>
    <div v-html="recipe.instructions"></div>
  </div>

  <div v-else>
    <p>Loading recipe details...</p>
  </div>
</template>

<script>
export default {
  name: 'RecipeDetail',
  data() {
    return {
      recipe: null,
      checkedIngredients: {}
    };
  },
  async created() {
    const recipeId = this.$route.params.id;
    const apiKey = '3c59b22c1b3c427ea238afa32409cf6e';
    const url = `https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=false&apiKey=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      this.recipe = data;
    } catch (error) {
      console.error('Error fetching recipe detail:', error);
    }
  }
}
</script>
