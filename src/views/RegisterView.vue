<template>
  <div>
    <!-- <h1 class="text-center">Create User</h1> -->
    <div class="p-5 row">
      <div class="col-6">
        <div class="mb-3">
          <label class="form-label">Name <span class="text-danger">*</span></label>
          <input
            type="text"
            class="form-control form-control-lg bg-white bg-opacity-5"
            placeholder="e.g John Smith"
            v-model="name"
          />
        </div>
        <div class="mb-3">
          <label class="form-label"
            >Email Address <span class="text-danger">*</span></label
          >
          <input
            type="text"
            class="form-control form-control-lg bg-white bg-opacity-5"
            placeholder="username@address.com"
            v-model="email"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Password <span class="text-danger">*</span></label>
          <input
            type="password"
            class="form-control form-control-lg bg-white bg-opacity-5"
            v-model="pass"
          />
        </div>
        <div class="mb-3">
          <label class="form-label"
            >Confirm Password <span class="text-danger">*</span></label
          >
          <input
            type="password"
            class="form-control form-control-lg bg-white bg-opacity-5"
            v-model="conformPassword"
          />
          <br />
          {{ error }}
        </div>

        <div>
          <div class="col-12 mb-3">
            <div class="mb-lg-0">
              <select class="form-select" name="warranty_id" v-model="role">
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
            </div>
          </div>
        </div>

        <div class="mb-3">
          <button
            type="submit"
            class="btn btn-outline-theme btn-lg d-block w-100"
            @click="signup()"
          >
            Create user
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BASE_URL } from "../constants/TheConstants";
import { useToast } from "vue-toastification";

export default {
  data() {
    return {
      name: "",
      email: "",
      pass: "",
      conformPassword: "",
      error: "",
      role: "",
    };
  },

  watch: {
    conformPassword: function (newPass, oldPass) {
      const password = newPass === this.pass;
      password
        ? (this.error = "Password Match")
        : (this.error = "Password Did Not match");
    },
  },

  methods: {
    onChangeEmail(event) {
      this.email = event.target.value;
    },
    onChangePass(event) {
      this.pass = event.target.value;
    },

    signup() {
      const toast = useToast();
      const data = {
        email: this.email,
        password: this.conformPassword,
        name: this.name,
        role: this.role,
      };

      if ((data.email && data.password, data.name, data.role)) {
        this.axios
          .post(`${BASE_URL}/register`, data)
          .then((response) => {
            toast.success("User Created ", {
              timeout: 2000,
            });
          })
          .catch((error) => {
            toast.warning(error.response.data.message, {
              timeout: 2000,
            });
          });
      } else {
        toast.error("Fill all the Feilds", {
          timeout: 2000,
        });
      }
    },
  },
};
</script>
