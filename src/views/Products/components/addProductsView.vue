<template>
  <div class="d-flex align-items-center mb-3">
    <div>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="javascript:;">ACTION</a></li>
        <li class="breadcrumb-item active">
          {{
              this.$route.path === `/products/${this.$route.params.id}`
                ? "PRODUCT"
                : "COLLECTION"
          }}
          DETAILS
        </li>
      </ol>
      <h1 class="page-header mb-0">
        {{
            this.$route.path === `/products/${this.$route.params.id}`
              ? "Product"
              : "Collection"
        }}
        Details
      </h1>
    </div>
  </div>
  <div class="row gx-4">
    <div class="col-lg-8">
      <div class="card mb-4">
        <div class="card-header d-flex align-items-center bg-white bg-opacity-15 fw-400">
          {{
              this.$route.path === `/products/${this.$route.params.id}`
                ? "Product"
                : "Collection"
          }}
          Information
        </div>
        <div class="card-body">
          <div class="mb-3">
            <label class="form-label">Title <span class="text-danger">*</span></label>
            <input type="text" class="form-control" name="title" placeholder="Product name" v-model="data.name" />
          </div>
          <div class="mb-3">
            <label class="form-label">Description <span class="text-danger">*</span></label>
            <div class="form-control p-0">
              <textarea class="summernote form-control" rows="12" v-model="data.description"></textarea>
            </div>
          </div>
        </div>
        <div class="card-arrow">
          <div class="card-arrow-top-left"></div>
          <div class="card-arrow-top-right"></div>
          <div class="card-arrow-bottom-left"></div>
          <div class="card-arrow-bottom-right"></div>
        </div>
      </div>
      <div class="card mb-4">
        <div class="card-header d-flex align-items-center bg-white bg-opacity-15 fw-400">
          Media
        </div>

        <div class="card-body pb-2">
          <div class="fileupload-buttonbar mb-2">
            <div class="d-block d-lg-flex align-items-center">
              <span class="btn btn-outline-theme fileinput-button me-2 mb-1">
                <i class="fa fa-fw fa-plus"></i>
                <span>Add files...</span>
                <input type="file" name="files[]" @change="image = $event.target.files[0]" />
              </span>
              <button type="submit" class="btn btn-outline-default me-2 mb-1 start" @click="upload">
                <i class="fa fa-fw fa-upload"></i>
                <span>Start upload</span>
              </button>
            </div>
          </div>
          <div id="error-msg"></div>
        </div>
        <table class="table table-card mb-0 fs-13px">
          <thead>
            <tr class="fs-12px">
              <th class="pt-2 pb-2 w-25">PREVIEW</th>
            </tr>
          </thead>
          <tbody class="files">
            <tr v-if="this.$route.path === `/products/${this.$route.params.id}`">
              <td colspan="4" class="text-center p-3 d-flex flex-row" v-if="this.data.image.length">
                <img :style="'width:50px'" v-for="(item, i) in this.data.image" :src="`${imageurl}/${item}`" alt=""
                  :key="i" />
              </td>
              <td colspan="4" class="text-center p-3" v-else>
                <div class="text-gray-300 mb-2">
                  <i class="fa fa-file-archive fa-3x"></i>
                </div>
                No file uploaded
              </td>
            </tr>
            <tr v-else>
              <td colspan="4" class="text-center p-3 d-flex flex-row" v-if="this.data.image.length">
                <img :style="'width:100px'" :src="`${imageurl}/${this.data.image}`" alt="" />
              </td>
              <td colspan="4" class="text-center p-3" v-else>
                <div class="text-gray-300 mb-2">
                  <i class="fa fa-file-archive fa-3x"></i>
                </div>
                No file uploaded
              </td>
            </tr>
          </tbody>
        </table>
        <div class="card-arrow">
          <div class="card-arrow-top-left"></div>
          <div class="card-arrow-top-right"></div>
          <div class="card-arrow-bottom-left"></div>
          <div class="card-arrow-bottom-right"></div>
        </div>
      </div>
    </div>
    <div class="col-lg-4" v-if="this.$route.path === `/products/${this.$route.params.id}`">
      <div class="card mb-4">
        <div class="card-header d-flex align-items-center fw-400 bg-white bg-opacity-15">
          <div class="flex-1">
            <div>Organization</div>
          </div>
        </div>
        <div class="card-body">
          <div class="mb-3">
            <label class="form-label">Product type</label>
            <div class="input-group">
              <input v-model="data.type" type="text" class="form-control" placeholder="Product type" />
              <button class="btn btn-outline-secondary">
                <i class="fa fa-search"></i>
              </button>
            </div>
          </div>
          <div class="mb-0">
            <label class="form-label">Vendor</label>
            <div class="input-group">
              <input v-model="data.vender" type="text" class="form-control" placeholder="Apple store supplies" />
              <button class="btn btn-outline-secondary">
                <i class="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="card-arrow">
          <div class="card-arrow-top-left"></div>
          <div class="card-arrow-top-right"></div>
          <div class="card-arrow-bottom-left"></div>
          <div class="card-arrow-bottom-right"></div>
        </div>
      </div>
      <div class="card mb-4">
        <div class="card-header d-flex align-items-center fw-400 bg-white bg-opacity-15">
          <div class="flex-1">
            <div>Collections</div>
          </div>
        </div>
        <div class="card-body">
          <div class="col-lg-12 mb-3">
            <div class="mb-lg-0">
              <select class="form-select" name="warranty_id" v-model="data.collection_id">
                <option value="">Select Collection</option>
                <option v-for="(item, i) in collection" :key="i" :value="item._id">
                  {{ item.name }}
                </option>
              </select>
            </div>
          </div>
          <p class="mb-0 small text-white text-opacity-50">
            <i class="fa fa-question-circle fa-fw"></i> Add this product to a collection
            so it's easy to find in your store.
          </p>
        </div>

        <div class="card-arrow">
          <div class="card-arrow-top-left"></div>
          <div class="card-arrow-top-right"></div>
          <div class="card-arrow-bottom-left"></div>
          <div class="card-arrow-bottom-right"></div>
        </div>
      </div>

      <div class="p-3 px-4 mt-auto">
        <span class="btn btn-outline-theme fileinput-button me-2 mb-1" @click="updateProduct" v-if="paramId">
          <i class="fa fa-upload me-2 ms-n2 opacity-5"></i> update
        </span>
        <span class="btn btn-outline-theme fileinput-button me-2 mb-1" @click="addProduct" v-else>
          <i class="fa fa-check me-2 ms-n2 opacity-5"></i> Save
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { useToast } from "vue-toastification";
import { BASE_URL, IMAGE_URL } from "../../../constants/TheConstants";

export default {
  setup() {
    const toast = useToast();
    return { toast };
  },
  data() {
    return {
      data: {
        collection_id: "",
        name: "",
        description: "",
        type: "",
        vender: "",
        image: [],
      },
      image: "",
      paramId: "",
      imageurl: IMAGE_URL,
      collection: this.$store.state.collection.collections,
    };
  },

  watch: {
    image(newImage, oldImage) {
      const data = new FormData();
      data.append("file", newImage);

      const options = {
        headers: {
          "x-access-token": this.$store.state.authentication.user.jwt,
          "Content-Type": "multipart/form-data",
        },
      };
      this.axios.post(`${BASE_URL}/upload`, data, options).then((response) => {
        if (response) {
          this.data.image.push(response.data.image);
        }
      });
    },
  },

  methods: {
    addProduct() {
      const { data } = this;
      const options = {
        headers: { "x-access-token": this.$store.state.authentication.user.jwt },
      };

      this.axios
        .post(`${BASE_URL}/addProduct`, data, options)
        .then((response) => {
          if (response) {
            this.$router.push("/products");
          }
        })
        .catch((error) => {
          this.toast.error(error.message, {
            timeout: 2000,
          });
        });
    },
    updateProduct() {
      const { data } = this;
      delete data['created_at']
      delete data['updated_at']
      const options = {
        headers: { "x-access-token": this.$store.state.authentication.user.jwt },
      };

      this.axios
        .patch(`${BASE_URL}/updateProduct/${data._id}`, data, options)
        .then((response) => {
          if (response) {
            this.$router.push("/products");
          }
        })
        .catch((error) => {
          this.toast.error(error.message, {
            timeout: 2000,
          });
        });
    },
  },

  mounted() {
    if (this.$route.path === `/products/${this.$route.params.id}`) {
      const id = this.$route.params.id;
      const product = this.$store.state.products.products;
      const filterData = product.filter((item) => item._id === id);
      if (filterData && id !== "add") {
        this.data = filterData[0];
        this.paramId = id;
      }
    } else if (this.$route.path === `/collections/${this.$route.params.id}`) {
      const id = this.$route.params.id;
      const collection = this.$store.state.collection.collections;
      const filterData = collection.filter((item) => item._id === id);
      if (filterData && id !== "add") {
        this.data = filterData[0];
        this.paramId = id;
      }
    }
  },
};
</script>
