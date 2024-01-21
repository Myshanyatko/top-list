<template>
  <div class="restaurant-item">
    <h3>{{ restaurant.name }}</h3>
    <p>
      Прайс a: <b>{{ restaurant.price.a }}</b>
    </p>
    <p>
      Прайс p: <b>{{ restaurant.price.p }}</b>
    </p>
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
