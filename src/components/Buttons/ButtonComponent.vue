<template>
  <button :class="this.class">{{ this.title }}</button>
</template>

<script>
export default {
  props: ["handler", "title", "class"],
  name: "ButtonComponent",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
