<template>
  <div v-if="restaurants?.length > 0">
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Место</th>
          <th class="text-left">Название</th>
          <th class="text-left">Город</th>
          <th class="text-left">Оценка</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in restaurants"
          :key="index"
        >
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.city }}</td>
          <td>{{ item.assessments.general }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
  <v-alert
    v-else
    text=" Список пуст"
  ></v-alert>
</template>

<script>
export default {
  props: {
    restaurants: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      headers: [
        {
          align: "start",
          key: "name",
          sortable: false,
          title: "Название",
        },
        { key: "interiorP", title: "Интерьер Паша" },
        { key: "interiorA", title: "Интерьер Арина" },
      ],
    };
  },
};
</script>

<style scoped></style>
