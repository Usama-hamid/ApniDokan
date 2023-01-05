<template>
  <div class="d-flex align-items-center mb-3">
    <div>
      <ul class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">ACTIONS</a></li>
        <li class="breadcrumb-item active">PRODUCTS</li>
      </ul>
      <h1 class="page-header mb-0">Products</h1>
    </div>
    <div class="ms-auto">
      <RouterLink to="/products/add" class="btn btn-outline-theme"><i class="fa fa-plus-circle fa-fw me-1"></i> Add
        Product</RouterLink>
    </div>
  </div>
  <div class="mb-sm-4 mb-3 d-sm-flex">
    <div class="mt-sm-0 mt-2">
      <a href="#" class="text-white text-opacity-75 text-decoration-none"><i
          class="fa fa-download fa-fw me-1 text-theme"></i> Export</a>
    </div>
    <div class="ms-sm-4 mt-sm-0 mt-2">
      <a href="#" class="text-white text-opacity-75 text-decoration-none"><i
          class="fa fa-upload fa-fw me-1 text-theme"></i> Import</a>
    </div>
  </div>
  <div class="card">
    <ul class="nav nav-tabs nav-tabs-v2 px-4">
      <li class="nav-item me-3">
        <a href="#allTab" class="nav-link active px-2" data-bs-toggle="tab">All</a>
      </li>
      <li class="nav-item me-3">
        <a href="#publishedTab" class="nav-link px-2" data-bs-toggle="tab">Published</a>
      </li>
      <li class="nav-item me-3">
        <a href="#expiredTab" class="nav-link px-2" data-bs-toggle="tab">Expired</a>
      </li>
      <li class="nav-item me-3">
        <a href="#deletedTab" class="nav-link px-2" data-bs-toggle="tab">Deleted</a>
      </li>
    </ul>
    <div class="tab-content p-4">
      <div class="tab-pane fade show active" id="allTab">
        <div class="input-group mb-4">
          <div>
            <div class="col-lg-12 mb-3">
              <div class="mb-lg-0">
                <select class="form-select" name="warranty_id" v-model="collection_id">
                  <option value="">Select Collection</option>
                  <option v-for="(item, i) in collection" :key="i" :value="item._id">
                    {{ item.name }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="flex-fill position-relative">
            <div class="input-group">
              <div class="input-group-text position-absolute top-0 bottom-0 bg-none border-0 pe-0"
                style="z-index: 1020">
                <i class="fa fa-search opacity-5"></i>
              </div>
              <input type="text" class="form-control ps-35px" placeholder="Search products" v-model="search" />
              <Button @click="reset()" :title="'reset'" :class="'btn btn-outline-theme'" />
            </div>
          </div>
        </div>

        <Table :data="filteredAndSorted" :imageurl="imageurl" />
        <div class="d-md-flex align-items-center">
          <div class="me-md-auto text-md-left text-center mb-2 mb-md-0">
            Total Products : {{ this.totalPosts }}
          </div>
          <ul class="pagination mb-0 justify-content-center">
            <li class="page-item">
              <Button class="page-link" :title="'Previous'" @click="this.page--"></Button>
            </li>
            <li class="page-item" v-for="(item, i) in totalPages" :key="i">
              <Button :class="item === page ? 'page-link active' : 'page-link'" :title="item"
                @click="this.page = item"></Button>
            </li>
            <li class="page-item">
              <Button class="page-link active" :title="'next'" @click="this.page++"></Button>
            </li>
          </ul>
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
</template>

<script>
import { BASE_URL, IMAGE_URL } from "../../constants/TheConstants";
import Table from "../../components/Tables/Tables.vue";
import Button from "../../components/Buttons/ButtonComponent.vue";
import getProducts from "../../mixins/token";

export default {
  mixins: [getProducts],
  components: {
    Table,
    Button,
  },

  data() {
    return {
      products: [],
      collection: [],
      imageurl: IMAGE_URL,
      collection_id: "",
      search: "",
      page: 1,
      pageSize: 10,
      totalPages: 0,
      totalPosts: 0,
    };
  },

  watch: {
    page() {
      this.getProductsData();
    },
  },

  methods: {
    reset() {
      this.search = "";
      this.collection_id = "";
    },

    getProductsData() {
      this.axios
        .get(`${BASE_URL}/getAllProducts?pageSize=${this.pageSize}&page=${this.page}`)
        .then((response) => {
          this.$store.dispatch("products/allPro", response.data.data);
          this.totalPages = parseInt(
            (response.data.totalPosts / 100) * response.data.rowsPerPage
          );
          this.products = response.data.data;
          this.totalPosts = response.data.totalPosts;
        });
    },
  },

  mounted() {
    this.getProductsData();

    this.axios.get(`${BASE_URL}/allcollection`).then((response) => {
      this.$store.dispatch("collection/allColl", response.data);
      this.collection = response.data;
    });
  },
};
</script>
