<template>
  <div class="table-responsive">
    <table class="table table-hover text-nowrap">
      <thead>
        <tr>
          <th class="pt-0 pb-2"></th>
          <th class="pt-0 pb-2" v-if="this.$route.path === '/collections'">
            Collection Name
          </th>
          <th class="pt-0 pb-2" v-else>Product Name</th>
          <th class="pt-0 pb-2" v-if="this.$route.path === '/products'">Collection Id</th>
          <th class="pt-0 pb-2" v-else>Description</th>
          <th class="pt-0 pb-2">Created</th>
          <!-- <th class="pt-0 pb-2">Updated</th> -->
        </tr>
      </thead>
      <tbody v-for="(item, i) in data" :key="i">
        <tr>
          <td class="w-10px align-middle">
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="product1" />
              <label class="form-check-label" for="product1"></label>
            </div>
          </td>
          <td>
            <div class="d-flex align-items-center">
              <div class="w-50px h-50px d-flex align-items-center justify-content-center">
                <img alt="" class="mw-100 mh-100"
                  :src="`${this.imageurl}/${item.price ? item.image : item.image[0]}`" />
              </div>
              <div class="ms-3" v-if="this.$route.path === '/collections'">
                <RouterLink :to="`/collections/${item._id}`" class="text-white text-opacity-75 text-decoration-none">{{
                    item.name
                }}</RouterLink>
              </div>
              <div class="ms-3" v-else>
                <RouterLink :to="`/products/${item._id}`" class="text-white text-opacity-75 text-decoration-none">{{
                    item.name
                }}</RouterLink>
              </div>
            </div>
          </td>
          <td class="align-middle" v-if="this.$route.path === '/products'">
            {{ item.collection_id }}
          </td>
          <td class="align-middle" v-else>
            {{ item.description }}
          </td>
          <td class="align-middle">{{ item.created_at }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["data", "imageurl"],
  data() {
    return {
      singleData: {},
    };
  },

  mounted() { },

  methods: {},
};
</script>

<style lang="scss" scoped>

</style>
