<template>
  <div style="height: 100%">
    <h1 class="title">Ресторанчики</h1>
    <div class="content">
      <div class="content__form">
        <h2 class="content__title">Оценка заведения</h2>
        <restaurant-form @create="createRestaurant" />
      </div>
      <div class="content__list">
        <h2 class="content__title">Рейтинг заведений</h2>
        <restaurant-list :restaurants="sortItems" />
      </div>
    </div>
  </div>
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
    },
  },
  computed: {
    sortItems() {
      console.log( [...this.restaurants].sort(
        (item1, item2) => item2.assessments.general - item1.assessments.general 
      ))
      return [...this.restaurants].sort(
        (item1, item2) => item2.assessments.general - item1.assessments.general 
      );
    },
  },
};
</script>

<style scoped>
h1,
h2,
h3,
h4,
p {
  margin: 0;
  padding: 0;
}
.title {
  border-bottom: solid 2px #000;
  margin: 0;
  padding: 15px;
}
.content {
  display: flex;
  height: 100%;
}
.content__form {
  border-right: #000 solid 2px;
}
.content__form,
.content__list {
  width: 50%;
  padding: 15px;
}
.content__title {
  padding-bottom: 10px;
  text-decoration: underline;
}
</style>
