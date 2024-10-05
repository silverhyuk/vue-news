<template>
    <div>
        <ul class="news-item">
            <li v-for="item in listItems" :key="item.id" class="post">
                <!-- 포인트 영역 -->
                <div class="points">
                    <i class="fa-solid fa-star"></i>
                    <span v-if="item.points">
                        {{ item.points }}
                    </span>
                </div>

                <!-- 기타 정보 영역 -->
                <div>
                    <p class="news-title">
                        <template v-if="item.domain"> 
                            <a :href="item.url" target="_blank">{{ item.title }}</a>
                        </template>
                        <template v-else>
                            <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
                        </template>
                    </p>
                        
                    <small class="user-info">
                        <router-link :to="`/user/${item.user}`" class="user-link" v-if="item.user">
                            <i class="fa-solid fa-user"></i>
                            {{ item.user }}
                        </router-link>
                        <span v-else>
                           <a :href="item.url" target="_blank">
                            <i class="fa-solid fa-link"></i>
                            {{ item.domain }}
                           </a>
                        </span>
                        <i class="fa-solid fa-clock"></i>
                        {{ item.time_ago }} 
                    </small>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    created() {
        if(this.$route.name === 'news') {
            this.FETCH_NEWS()
        } else if(this.$route.name === 'ask') {
            this.FETCH_ASK()
        } else if(this.$route.name === 'jobs') {
            this.FETCH_JOBS()
        }
    },
    computed: {
        ...mapGetters(['news', 'asks', 'jobs']),
        listItems() {
            if(this.$route.name === 'news') {
                return this.news
            } else if(this.$route.name === 'ask') {
                return this.asks
            } else if(this.$route.name === 'jobs') {
                return this.jobs
            }
        }
    },
    methods: {
        ...mapActions(['FETCH_NEWS', 'FETCH_ASK', 'FETCH_JOBS'])
    }

}
</script>

<style>
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