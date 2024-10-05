<template>
    <ul class="news-item">
        <li v-for="item in news" :key="item.id" class="post">
            <!-- 포인트 영역 -->
            <div class="points">
                <i class="fa-solid fa-star"></i>
                {{ item.points }}
            </div>

            <!-- 기타 정보 영역 -->
             <div>
                <p class="news-title">
                    <a :href="item.url" target="_blank">{{ item.title }}</a>
                </p>
                    
                <small class="user-info">
                    <router-link :to="`/user/${item.user}`" class="user-link">
                    <i class="fa-solid fa-user"></i>
                    {{ item.user }}
                    </router-link>
                    <i class="fa-solid fa-clock"></i>
                    {{ item.time_ago }} 
                </small>
            </div>
        </li>
    </ul>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    created() {
        this.FETCH_NEWS()
    },
    computed: {
        ...mapGetters(['news'])
    },
    methods: {
        ...mapActions(['FETCH_NEWS'])
    }
}
</script>

<style scoped>
.news-item {
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

.news-title {
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
  font-size: 0.5rem;
}
.fa-star {
  color: #f2c61f;
  padding-right: 0.5rem;
  font-size: 0.7rem;
}
</style>