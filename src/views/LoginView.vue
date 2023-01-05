<template>
  <div class="login">
    <div class="login-content">
      <div name="login_form">
        <h1 class="text-center">Sign In</h1>
        <div class="text-white text-opacity-50 text-center mb-4">
          For your protection, please verify your identity.
        </div>
        <div class="mb-3">
          <input class="form-control form-control-lg bg-white bg-opacity-5" type="email" v-model="email" name="email"
            placeholder="Username@gmail.com" @change="onChangeEmail($event)" />
        </div>
        <div class="mb-3">
          <div class="d-flex">
            <label class="form-label">Password <span class="text-danger">*</span></label>
            <a href="#" class="ms-auto text-white text-decoration-none text-opacity-50">Forgot password?</a>
          </div>
          <input class="form-control form-control-lg bg-white bg-opacity-5" v-model="pass" type="password"
            name="password" placeholder="············" @change="onChangePass($event)" />
        </div>
        <div class="mb-3">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="customCheck1" />
            <label class="form-check-label" for="customCheck1">Remember me</label>
          </div>
        </div>

        <button @click="login()" class="btn btn-outline-theme btn-lg d-block w-100 fw-500 mb-3">
          Sign In
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { BASE_URL } from "../constants/TheConstants";
import { useToast } from "vue-toastification";

export default {
  setup() {
    const toast = useToast();
    return { toast };
  },
  name: "Login",

  data() {
    return {
      email: "",
      pass: "",
    };
  },

  methods: {
    onChangeEmail(event) {
      this.email = event.target.value;
    },
    onChangePass(event) {
      this.pass = event.target.value;
    },

    login() {
      const data = {
        email: this.email,
        password: this.pass,
      };

      this.axios
        .post(`${BASE_URL}/login`, data)
        .then((response) => {
          if (response) {
            localStorage.setItem("user", JSON.stringify(response.data));
            this.$store.dispatch("authentication/login", response.data);
            this.$router.push({ path: "/" });
            this.toast.success("Login successfully", {
              timeout: 2000,
            });
          }
        })
        .catch((error) => {
          this.toast.error(error.response.data, {
            timeout: 2000,
          });
        });
    },
  },

  mounted() {
    if (localStorage.getItem('user')) {
      this.$router.push({ path: '/' });
    }
  }
};
</script>
