<template>
  <div>
    <div v-if="user">
      <h3>name : {{ user.id }}</h3>
      <p>karma : {{ user.karma }}</p>
      <p>created : {{ user.created }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'UserView',
  created() {
    this.FETCH_USER(this.$route.params.id)
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    ...mapActions(['FETCH_USER'])
  }
}
</script>

<style>

</style>