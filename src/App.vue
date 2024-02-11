<template>
  <v-app>
    <v-main>
      <v-container>
        <v-dialog
          v-model="dialog"
          persistent
          width="1024"
        >
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              block
              size="x-large"
              color="primary"
              >Добавить заведение
            </v-btn>
          </template>
          <restaurant-form
            @create="createRestaurant"
            @close="dialog = false"
          >
          </restaurant-form>
        </v-dialog>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import RestaurantForm from "@/components/RestaurantForm";

export default {
  name: "App",
  components: {
    RestaurantForm,
  },
  data() {
    return {
      restaurants: [],
      dialog: false,
    };
  },
  methods: {
    createRestaurant(restaurant) {
      console.log(restaurant);
      this.restaurants.push(restaurant);
    },
  },
  computed: {
    sortItems() {
      console.log(
        [...this.restaurants].sort(
          (item1, item2) =>
            item2.assessments.general - item1.assessments.general
        )
      );
      return [...this.restaurants].sort(
        (item1, item2) => item2.assessments.general - item1.assessments.general
      );
    },
  },
};
</script>
