<template>
    <ul class="jobs-item">
        <!-- jobs 리스트를 그려줌 -->
        <li v-for="item in jobs" :key="item.id" class="post">
            <!-- 포인트 영역 -->
            <div class="points">
                <i class="fa-solid fa-bolt"></i>
            </div>

            <!-- 기타 정보 영역 -->
            <div class="job-title">
                <p class="title">
                    <a :href="item.url" target="_blank">{{ item.title }}</a>
                </p>
                <small class="user-info">
                    <i class="fa-solid fa-clock"></i>
                    {{ item.time_ago }} 
                    <div v-if="item.domain">
                        <i class="fa-solid fa-building"></i>
                        {{ item.domain }}
                    </div>
                </small>
            </div>
        </li>
    </ul>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    created() {
        this.FETCH_JOBS()
    },
    computed: {
        ...mapGetters(['jobs'])
    },
    methods: {
        ...mapActions(['FETCH_JOBS'])
    }
}
</script>

<style scoped>
.jobs-item {
  margin: 0;
  padding: 0;
}
.job-title {
    padding-left: 8px;
    align-items: center;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
  margin-top: 10px;
}
.points {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  color: #42b883;
}
.title {
    margin: 0;
    display: flex;
    align-items: center;
}
.user-info {
    color: #828282;
    font-size: 0.7rem;
    padding-left: 8px;
    display: flex;
    align-items: center;
}
.fa-building {
  font-size: 0.7rem;
  margin-right: 0.2rem;
  margin-left: 0.2rem;
}
.fa-clock {
  font-size: 0.7rem;
  margin-right: 0.2rem;
  margin-left: 0.2rem;
}
.fa-bolt {
    color: #f2c61f;
    padding-right: 0.5rem;
}
</style>