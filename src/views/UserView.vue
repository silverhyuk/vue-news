<template>
  <div>
    <user-profile v-if="user">
      <template v-slot:username>
        {{ user.id }}
      </template>
      <template v-slot:time>
        <i class="fa-solid fa-clock"></i>
        {{ 'Joined ' + user.created }},
      </template>
      <template v-slot:karma>
        <i class="fa-solid fa-star"></i>
        {{ user.karma }}
      </template>
    </user-profile>
    <p v-else>사용자 정보를 불러오는 중...</p>
  </div>
</template>

<script>
import UserProfile from '@/components/UserProfile'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'UserView',
  components: {
    UserProfile
  },
  created() {
    const userId = this.$route.params.id
    if (userId) {
      this.FETCH_USER(userId)
    }
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