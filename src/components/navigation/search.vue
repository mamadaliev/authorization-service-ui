<template>
  <el-autocomplete style="width: 220px;"
    v-model="state"
    :fetch-suggestions="querySearchAsync"
    :placeholder="$t('search_placeholder')"
    @select="handleSelect"
  ></el-autocomplete>
</template>

<script>
export default {
  name: "search",
  components: {
  },
  data() {
    return {
      links: [],
      state: '',
      timeout:  null
    };
  },
  methods: {
      loadAll() {
        return [
          { "value": "My story", "link": "https://github.com/vuejs/vue" },
          { "value": "My Tutorial", "link": "https://github.com/ElemeFE/element" },
          { "value": "Step by step", "link": "https://github.com/ElemeFE/cooking" },
          { "value": "My name is", "link": "https://github.com/ElemeFE/mint-ui" },
          { "value": "My game", "link": "https://github.com/vuejs/vuex" },
          { "value": "My old university", "link": "https://github.com/vuejs/vue-router" },
          { "value": "Where is Korobov", "link": "https://github.com/babel/babel" }
         ];
      },
      querySearchAsync(queryString, cb) {
        var links = this.links;
        var results = queryString ? links.filter(this.createFilter(queryString)) : links;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 1 * Math.random());
      },
      createFilter(queryString) {
        return (link) => {
          return (link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.links = this.loadAll();
    }
}
</script>

<style>
  .header .container .search .el-autocomplete .el-input input.el-input__inner {
    border-radius: 20px;
  }
</style>
