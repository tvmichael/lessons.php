<script>
import ProductAdd from './components/ProductAdd.vue'
import ProductList from './components/ProductList.vue'
import "~bootstrap/css/bootstrap.min.css"

export default {
  components: {
    ProductAdd,
    ProductList
  },
  data() {
    return { test: 'Main page' }
  },
  created() {
    console.log(this.$data)
  },
}
</script>

<template>
  <div class="container">
    <h2>{{test}}</h2>

    <ProductAdd />

    <ProductList />
  </div>  
</template>

<style scoped>
</style>
