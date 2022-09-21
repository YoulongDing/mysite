<template>
  <v-dialog max-width="600px" v-model="dialog" dark>
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" v-on="on" block outlined>
        Log in
      </v-btn>
    </template>
    <v-card class="bg">
      <v-card-title class="headline bg lighten-1">
        Log in with your account
      </v-card-title>

      <v-card-text>
        <v-form class="px-3" ref="form" v-model="valid" lazy-validation>
          <!-- name -->
          <v-text-field
            v-model="username"
            :rules="nameRules"
            label="Username"
            required
            background-color="bg2"
            dark
            color="primary"
            prepend-icon="mdi-account"
            validate-on-blur
          ></v-text-field>

          <v-text-field
            v-model="password"
            :type="'password'"
            :rules="passwordRules"
            label="Password"
            required
            dark
            prepend-icon="mdi-key"
            validate-on-blur
          ></v-text-field>
          <v-row justify="center" class="mt-3">
            <v-btn class="primary" :loading="loading" @click="Sumbit">
              Log in
            </v-btn>
          </v-row>
        </v-form>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="dialog = false">
          cancel
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data() {
    let self = this;
    return {
      valid: false,
      username: "",
      password: "",
      loading: false,
      dialog: false,
      pwdstate: true,
      nameRules: [
        (v) => !!v || "Username is required",
        (v) => v.length <= 10 || "Username must be less than 10 characters",
      ],
      passwordRules: [
        (v) => !!v || "Password is required",
        // (v) => self.pwdstate || "Incorrect password!",
      ],
    };
  },
  computed: {
    formattedDate() {
      return this.due ? new Date(this.due).toUTCString().substring(0, 16) : "";
    },
  },
  methods: {
    Sumbit() {
      //   this.$emit("projectAdded");
      let data = {
        username: this.username,
        password: this.password,
      };
      this.loading = true;

      this.$store.commit("app/SET_username", this.username);
      this.$router.push({ name: "Dashboard" });
      // this.$store
      //   .dispatch("app/login", data)
      //   .then((response) => {
      //     this.$store.commit("app/SET_username", this.username);
      //     this.$router.push({ name: "Dashboard" });
      //   })
      //   .catch((error) => {
      //     // this.pwdstate = false;
      //     // this.$refs.form.validate();
      //     // this.pwdstate = true;
      //     // this.loading = false;

      //     this.$store.commit("app/SET_username", this.username);
      //     this.$router.push({ name: "Dashboard" });
      //   });
    },
  },
};
</script>
