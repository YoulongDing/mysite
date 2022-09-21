<template>
  <v-dialog max-width="600px" v-model="dialog" dark>
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" v-on="on" block>
        Sign up
      </v-btn>
    </template>
    <v-card class="bg">
      <v-card-title class="headline bg lighten-1">
        Create your account
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
          <v-text-field
            v-model="password2"
            :type="'password'"
            :rules="password2Rules"
            label="Reapeat password"
            required
            dark
            prepend-icon="mdi-key"
            validate-on-blur
          ></v-text-field>
          <v-row justify="center" class="mt-3">
            <v-btn class="primary" :loading="loading" @click="Sumbit">
              Sign Up
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
import { sendsignup } from "api/login";
export default {
  data() {
    let self = this;
    return {
      valid: false,
      username: "",
      password: "",
      password2: "",
      loading: false,
      dialog: false,
      usrstate: true,
      nameRules: [
        (v) => !!v || "Username is required",
        (v) => v.length <= 10 || "Username must be less than 10 characters",
        (v) => self.usrstate || "Username is existed.",
      ],
      passwordRules: [(v) => !!v || "Password is required"],
      password2Rules: [
        (v) => !!v || "Password is required",
        (v) => self.checkpwd() || "Passwords must be the same",
      ],
    };
  },
  computed: {
    formattedDate() {
      return this.due ? new Date(this.due).toUTCString().substring(0, 16) : "";
    },
  },
  methods: {
    checkpwd() {
      return this.password === this.password2;
    },
    Sumbit() {
      //   this.$emit("projectAdded");
      let data = {
        username: this.username,
        password: this.password,
      };
      this.loading = true;
      sendsignup(data)
        .then((response) => {
          this.$store
            .dispatch("app/login", data)
            .then((response) => {
              this.$store.commit("app/SET_username", this.username);
              this.$router.push({ name: "Dashboard" });
            })
            .catch((error) => {
              this.pwdstate = false;
              this.$refs.form.validate();
              this.pwdstate = true;
            });
        })
        .catch((error) => {
          this.usrstate = false;
          this.$refs.form.validate();
          this.usrstate = true;
          this.loading = false;
          console.log(error);
        });
    },
  },
};
</script>
