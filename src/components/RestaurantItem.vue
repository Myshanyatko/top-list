<template>
  <div class="restaurant-item">
    <h3>{{ restaurant.id }}</h3>
    <div><strong>Название:</strong> {{ restaurant.name }}</div>
    <div><strong>Описание:</strong> {{ restaurant.body }}</div>
    <!-- <p>
      Прайс a: <b>{{ restaurant.price.a }}</b>
    </p>
    <p>
      Прайс p: <b>{{ restaurant.price.p }}</b>
    </p> -->
  </div>
</template>

<script>
export default {
  props: {
    restaurant: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped></style>
