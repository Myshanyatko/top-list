<template>
  <div class="form">
    <form @submit.prevent>
      <!-- <h2>Оценка заведения</h2> -->
      <h3>Название</h3>
      <input type="text" v-model="restaurant.name" />
      <h3>Прайс</h3>
      <input type="number" min="0" max="2.5" v-model="restaurant.price.a" />
      <input type="number" min="0" max="2.5" v-model="restaurant.price.p" />
      <div class="">
        <button @click="createRestaurant">Сохранить</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      restaurant: {
        name: "",
        price: {
          a: 0,
          p: 0,
        },
        taste: {
          a: 0,
          p: 0,
        },
        interior: {
          a: 0,
          p: 0,
        },
      },
    };
  },
  methods: {
    createRestaurant() {
      this.restaurant.id = Date.now();
      this.$emit("create", this.restaurant);
      restaurant.name = "";
      restaurant.price.a = 0;
      restaurant.price.p = 0;
    },
  },
};
</script>

<style scoped></style>
