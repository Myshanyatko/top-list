<template>
  <restaurantForm @create="createRestaurant" />
  <restaurantList :restaurants="restaurants" />
</template>

<script>
import RestaurantForm from "@/components/RestaurantForm";
import RestaurantList from "@/components/RestaurantList";
export default {
  components: {
    RestaurantForm,
    RestaurantList,
  },
  data() {
    return {
      restaurants: [],
    };
  },
  methods: {
    createRestaurant(restaurant) {
      this.restaurants.push(restaurant);
      console.log(this.restaurants);
    },
  },
};
</script>

<style></style>
