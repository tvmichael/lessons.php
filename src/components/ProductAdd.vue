<script>
export default {
  data() {
    return { 
      title: "Add Product"
      }
  },
  created() {    
    console.log(this.$data); 
  }
}
</script>

<template>
  <div>
    <h1>{{ title }}</h1>  
  </div>
</template>

<style scoped>

</style>
