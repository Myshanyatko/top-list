<template>
  <!-- <div>
    <h2>Заведения</h2>
    <div class="restaurant">
      <transition-group name="user-list">
        <restaurant-item
          v-for="restaurant in restaurants"
          :restaurant="restaurant"
          :key="restaurant.id"
        />
      </transition-group>
    </div>
  </div> -->
  <div v-if="restaurants.length > 0">
    <table>
      <thead>
        <tr>
          <th>Место</th>
          <th>Название</th>
          <th>Баллы</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(restaurant, index) in restaurants" :key="restaurant.id">
          <td>{{ index + 1 }}</td>
          <td>{{ restaurant.name }}</td>
          <td>{{ restaurant?.assessments?.general }}</td>
        </tr>
      </tbody>
    </table>
    <!-- <restaurant-item
      v-for="restaurant in restaurants"
      :restaurant="restaurant"
      :key="restaurant.id"
      @remove="$emit('remove', restaurant)"
    /> -->
  </div>
  <p v-else style="color: red">Список пуст</p>
</template>

<script>
export default {
  props: {
    restaurants: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
  text-align: left;
  border-spacing: inherit;
}
table td,
tr {
  border: solid 1px;
}
</style>
