<template>
  <div class="header">
    <router-link to="/news">News</router-link>
    <router-link to="/ask">Ask</router-link>
    <router-link to="/jobs">Jobs</router-link>

  </div>
</template>

<script>

export default {

}
</script>

<style scoped>
.header {
  color: white;
  background-color: #42b883;
  width: 100%;
  height: 50px;
  display: flex;
  padding: 8px 16px;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
}
.header .router-link-exact-active {
  color: #46524d;
}
.header a {
  color: white;
  margin: 0 10px; /* 간격 추가 */
}
</style>