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

<script setup> 
import RestaurantForm from "@/components/RestaurantForm";
import RestaurantList from "@/components/RestaurantList";
import { db } from "@/firebase"
import { collection, getDocs } from "firebase/firestore";
import {  onMounted } from "vue";

// const restaurants = ref([])

onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, "restaurans"))
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data())
  });
})
export default {
  name: "App",
  components: {
    RestaurantForm,
    RestaurantList,
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
      return [...this.restaurants].sort(
        (item1, item2) => item2.assessments.general - item1.assessments.general
      );
    },
  },
};
</script>
