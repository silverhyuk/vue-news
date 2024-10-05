<template>
    <ul class="ask-item">   

        <li v-for="item in asks" :key="item.id" class="post">
            <!-- 포인트 영역 -->
            <div class="points">
                <i class="fa-solid fa-star"></i>
                {{ item.points }}
            </div>

            <!-- 기타 정보 영역 -->
             <div>
                <p class="ask-title">
                    <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
                </p>
                <small class="user-info">
                    <i class="fa-solid fa-clock"></i>
                    {{ item.time_ago }} 
                    <router-link :to="`/user/${item.user}`">
                        <i class="fa-solid fa-user"></i>
                        {{ item.user }}
                    </router-link>
                    <i class="fa-solid fa-comment"></i>
                    {{ item.comments_count }}
                </small>    
             </div>
        </li>
    </ul>
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
.ask-item {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
}
.points {
  width: 80px;
  height: 60px; 
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  color: #42b883;
}

.ask-title {
  margin: 0;
}
.user-info {
  color: #828282;
  font-size: 0.7rem;
  padding-left: 8px;
  display: flex;
  align-items: center;
}
.fa-clock {
  padding-right: 0.2rem;
  padding-left: 0.5rem;
  font-size: 0.5rem;
}
.fa-user {
  padding-right: 0.2rem;
  padding-left: 0.5rem;
  font-size: 0.5rem;
}
.fa-star {
  color: #f2c61f;
  padding-right: 0.5rem;
  font-size: 0.7rem;
}
.fa-comment {
  padding-right: 0.2rem;
  padding-left: 0.5rem;
  font-size: 0.5rem;
}
.comments-count {
  padding-left: 8px;
}
</style>