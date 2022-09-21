<template>
  <v-dialog max-width="600px" v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn text class="primary" dark v-bind="attrs" v-on="on">
        Add new project
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="headline grey lighten-2">
        Add a New Project
      </v-card-title>

      <v-card-text>
        <v-form class="px-3" ref="form" v-model="valid" lazy-validation>
          <!-- name -->
          <v-text-field
            v-model="title"
            :counter="10"
            :rules="titleRules"
            label="Title"
            required
            prepend-icon="mdi-folder"
          ></v-text-field>
          <!-- content -->
          <v-textarea
            v-model="content"
            label="Information"
            required
            prepend-icon="mdi-pencil"
          ></v-textarea>
          <!-- datepicker -->
          <v-menu
            v-model="datemenu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="formattedDate"
                label="Due Date"
                prepend-icon="mdi-calendar"
                v-bind="attrs"
                v-on="on"
                required
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="due"
              @input="datemenu = false"
            ></v-date-picker>
          </v-menu>

          <v-row justify="center" class="mt-3">
            <v-btn class="primary" :loading="loading" @click="Sumbit">
              Add project
            </v-btn>
          </v-row>

          <!-- <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
            prepend-icon="mdi-email"
          ></v-text-field>

          <v-select
            v-model="select"
            :items="items"
            :rules="[(v) => !!v || 'Item is required']"
            label="Item"
            required
          ></v-select>

          <v-checkbox
            v-model="checkbox"
            :rules="[(v) => !!v || 'You must agree to continue!']"
            label="Do you agree?"
            required
          ></v-checkbox> -->

          <!-- <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
          >
            Validate
          </v-btn>

          <v-btn color="error" class="mr-4" @click="reset">
            Reset Form
          </v-btn>

          <v-btn color="warning" @click="resetValidation">
            Reset Validation
          </v-btn> -->
        </v-form>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="dialog = false">
          I accept
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data: () => ({
    title: "",
    content: "",
    due: "",
    loading: false,
    dialog: false,
    titleRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),
  computed: {
    formattedDate() {
      return this.due ? new Date(this.due).toUTCString().substring(0, 16) : "";
    },
  },
  methods: {
    Sumbit() {
      this.$emit("projectAdded");
      if (this.$refs.form.validate()) {
        console.log(this.title, this.content);
      }
    },
  },
};
</script>
