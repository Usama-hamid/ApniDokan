<template>
  <div class="d-flex align-items-center mb-3">
    <div>
      <ul class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">ACTIONS</a></li>
        <li class="breadcrumb-item active">COLLECTION</li>
      </ul>
      <h1 class="page-header mb-0">COLLECTION</h1>
    </div>
    <div class="ms-auto">
      <RouterLink to="/collections/add" class="btn btn-outline-theme"><i class="fa fa-plus-circle fa-fw me-1"></i> Add
        Collection</RouterLink>
    </div>
  </div>
  <div class="card">
    <div class="tab-content p-4">
      <div class="tab-pane fade show active" id="allTab">
        <Table :data="collection" :imageurl="imageurl" />
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

export default {
  name: "Collections",
  components: {
    Table,
    Button,
  },

  data() {
    return {
      collection: [],
      imageurl: IMAGE_URL,
    };
  },

  mounted() {
    this.axios.get(`${BASE_URL}/allcollection`).then((response) => {
      this.$store.dispatch("collection/allColl", response.data);
      this.collection = response.data;
    });
  },

  methods: {},
};
</script>

<style lang="scss" scoped>

</style>
