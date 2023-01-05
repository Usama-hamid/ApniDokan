const getProducts = {
  computed: {
    filteredAndSorted() {
      function compare(a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      }

      if (this.collection_id) {
        return this.products
          .filter((item) => {
            return item.collection_id.includes(this.collection_id);
          })
          .sort(compare);
      } else if (this.search) {
        return this.products
          .filter((item) => {
            return item.name.toUpperCase().includes(this.search.toUpperCase());
          })
          .sort(compare);
      }
      return this.products;
    },
  },
};

export default getProducts;
