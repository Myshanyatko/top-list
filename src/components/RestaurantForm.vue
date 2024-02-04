<template>
  <form @submit.prevent>
    <input type="text" v-model="restaurant.name" />
    <h3>Прайс</h3>
    <!-- <input type="number" min="0" max="2.5" v-model="restaurant.price.a" /> -->
    <!-- <input type="number" min="0" max="2.5" v-model="restaurant.price.p" /> -->
    <input
      type="text"
      v-model="restaurant.assessments.price.a"
      placeholder="Описание"
    />
    <div class="">
      <button @click="createRestaurant">Сохранить</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      restaurant: {
        name: "",
        assessments: {
          general: "",
          price: {
            a: "",
            p: "",
          },
          taste: {
            a: "",
            p: "",
          },
          interior: {
            a: "",
            p: "",
          },
        },
      },
    };
  },
  // watch: {
  //   restaurant: function () {
  //     console.log("sfd");
  //     this.restaurant.general =
  //       +this.restaurant?.assessments?.price?.a +
  //       +this.restaurant?.assessments?.price?.p +
  //       +this.restaurant?.assessments?.taste?.a +
  //       +this.restaurant?.assessments?.taste?.p +
  //       +this.restaurant?.assessments?.interior?.a +
  //       +this.restaurant?.assessments?.interior?.p;
  //   },
  // },

  methods: {
    createRestaurant() {
      this.restaurant.id = Date.now();
      this.restaurant.assessments.general =
        +this.restaurant?.assessments?.price?.a +
        +this.restaurant?.assessments?.price?.p +
        +this.restaurant?.assessments?.taste?.a +
        +this.restaurant?.assessments?.taste?.p +
        +this.restaurant?.assessments?.interior?.a +
        +this.restaurant?.assessments?.interior?.p;
      this.$emit("create", this.restaurant);
      this.restaurant = {
        name: "",
        assessments: {
          general: "",
          price: {
            a: "",
            p: "",
          },
          taste: {
            a: "",
            p: "",
          },
          interior: {
            a: "",
            p: "",
          },
        },
      };
      // this.restaurant.price.a = 0;
      // this.restaurant.price.p = 0;
    },
  },
};
</script>

<style scoped></style>
