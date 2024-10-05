<template>
    <div>   
        <div v-for="item in asks" :key="item.id">
            <section class="item-container">
                <div class="title-container">
                    <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
                </div>
                <div class="time-container">
                    <small>{{ item.time_ago }}</small>
                </div>
                <div class="user-container">
                    <router-link :to="`/user/${item.user}`">
                        <i class="fa-solid fa-user"></i>
                        {{ item.user }}
                    </router-link>
                </div>
                <div class="comments-count">
                    <i class="fa-solid fa-comment"></i>
                    {{ item.comments_count }}
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    created() {
        this.FETCH_ASK()
    },
    computed: {
        ...mapGetters(['asks'])
    },
    methods: {
        ...mapActions(['FETCH_ASK'])
    }
}

</script>

<style scoped>
.item-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  margin: 1rem;
  width: 98%;
  background-color: #f8f8f8;
  cursor: pointer;
  transition: background-color 0.3s;
}
.title-container {
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0.5rem;
  text-align: center;
}

.user-container {
  padding: 0.5rem;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
}
.time-container {
  padding: 0.5rem;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
}
.comments-count {
  font-size: 0.7rem;
  padding-left: 0.5rem;
  display: flex;
  align-items: center;
  color: #828282;
}


</style>