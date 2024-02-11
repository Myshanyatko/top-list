<template>
  <v-form
    v-model="form"
    @submit.prevent="submit"
  >
    <v-card>
      <v-card-title>
        <span class="text-h5">Добавление заведения</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col>
              <v-text-field
                v-model="restaurant.name"
                label="Название"
                type="text"
                required
                :rules="requiredRule"
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-autocomplete
                label="Город"
                :items="cites"
                v-model="restaurant.city"
              ></v-autocomplete>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <h4>Оценка прайса</h4>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field
                v-model="restaurant.assessments.price.a"
                label="Арина"
                type="number"
                required
                :rules="confinesRule1"
                max="2.5"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="restaurant.assessments.price.p"
                label="Паша"
                type="number"
                :rules="confinesRule1"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <h4>Оценка интерьера</h4>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field
                v-model="restaurant.assessments.interior.a"
                label="Арина"
                type="number"
                required
                :rules="confinesRule1"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="restaurant.assessments.interior.p"
                label="Паша"
                type="number"
                required
                :rules="confinesRule1"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <h4>Оценка еды</h4>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field
                v-model="restaurant.assessments.taste.a"
                label="Арина"
                type="number"
                required
                :rules="confinesRule2"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="restaurant.assessments.taste.p"
                label="Паша"
                type="number"
                required
                :rules="confinesRule2"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          variant="text"
          @click="this.$emit('close')"
        >
          Закрыть
        </v-btn>
        <v-btn
          color="primary"
          :disabled="!form"
          variant="text"
          type="submit"
        >
          Сохранить
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script>
export default {
  name: "RestaurantForm",
  data() {
    return {
      cites: ["Томск", "Новосибирск", "Красноярск", "Новокузнецк"],
      requiredRule: [
        (value) => {
          if (value) return true;
          return "Обязательное поле";
        },
      ],
      confinesRule1: [
        (value) => {
          if (value) return true;
          return "Обязательное поле";
        },
        (value) => {
          if (+value > 2.5 || +value < 0)
            return "Значение должно быть от 0 до 2.5";
          return true;
        },
      ],
      confinesRule2: [
        (value) => {
          if (value) return true;
          return "Обязательное поле";
        },
        (value) => {
          if (+value > 5 || +value < 0) return "Значение должно быть от 0 до 5";
          return true;
        },
      ],
      form: false,
      restaurant: {
        name: null,
        city: "Томск",
        assessments: {
          general: null,
          price: {
            a: null,
            p: null,
          },
          taste: {
            a: null,
            p: null,
          },
          interior: {
            a: null,
            p: null,
          },
        },
      },
    };
  },

  methods: {
    submit() {
      this.$emit("close");
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
        name: null,
        assessments: {
          general: null,
          price: {
            a: null,
            p: null,
          },
          taste: {
            a: null,
            p: null,
          },
          interior: {
            a: null,
            p: null,
          },
        },
      };
    },
  },
};
</script>

<style scoped></style>
