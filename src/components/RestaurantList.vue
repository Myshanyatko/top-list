<template>
  <div class="for">
    <h2>Заведения</h2>
    <div class="restaurant">
      <restaurant-item
        v-for="restaurant in restaurants"
        :restaurant="restaurant"
        :key="restaurant.id"
      />
    </div>
  </div>
</template>

<script>
import RestaurantItem from "@/components/RestaurantItem";
export default {
  components: {
    RestaurantItem,
  },
  props: {
    restaurants: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
