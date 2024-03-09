<template>
  <v-app>
    <v-main>
      <v-container style="margin-bottom: 20px">
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
      <v-container>
        <restaurant-list :restaurants="sortItems"> </restaurant-list
      ></v-container>
    </v-main>
  </v-app>
</template>

<script>
import RestaurantForm from "@/components/RestaurantForm";
import RestaurantList from "@/components/RestaurantList";
import { db } from "@/firebase";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { ref, onMounted, computed } from "vue";

export default {
  components: {
    RestaurantForm,
    RestaurantList,
  },

  data() {
    return {
      dialog: false,
    };
  },

  setup() {

    let restaurants = ref([]);
    const collectionRestaurants = collection(db, "restaurants");

    onMounted(() => {
      onSnapshot(collectionRestaurants, (querySnapshot) => {
        let values = [];
        querySnapshot.forEach((rest) => {
          values.push({ ...rest.data(), id: rest.id });
        });
        restaurants.value = values;
      });
    });

    const sortItems = computed(() => {
      return [...restaurants.value].sort(
        (item1, item2) => item2.assessments.general - item1.assessments.general
      );
    });

    const createRestaurant = (restaurant) => {
      addDoc(collectionRestaurants, restaurant);
    };

    return { sortItems, createRestaurant };
  },
};
</script>
