<template>
  <div>
    <div v-if="item">
      <section>
        <!-- 질문 작성자 정보 -->
        <div class="user-container">
          <div><i class="fa-solid fa-user main"></i></div>
          <div class="user-description">
            <router-link :to="`/user/${item.user}`">
              {{ item.user }}
            </router-link>
            <div class="time">
              <i class="fa-solid fa-clock"></i>
              {{ item.time_ago }}
            </div>
          </div>
        </div>
      </section>

      <!-- 제목 -->
      <section>
        <div class="title">
           {{ item.title }}
        </div>
        <div class="sub-info">
          <span>
            <i class="fa-solid fa-heart"></i>
            {{ item.points }}
          </span>
          <span>
            <i class="fa-solid fa-comment"></i>
            {{ item.comments_count }}
          </span>
        </div>
        <div class="content">
          <div v-html="item.content"></div>
        </div>
      </section>

      <!-- 댓글 -->
      <div>
        <p class="comment-header">댓글</p>
        <ul class="comment-item">
          <li v-for="comment in item.comments" :key="comment.id" class="comment-post">
          <div class="comment-container">
            <small class="user-info">
              <i class="fa-solid fa-user"></i>
              <router-link :to="`/user/${comment.user}`">
                {{ comment.user }}
              </router-link>
              <i class="fa-solid fa-clock"></i>
              {{ comment.time_ago }}
            </small>
            <p class="comment-content" v-html="comment.content"></p>
          </div>
        </li> 
        </ul>
       
      </div>


    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ItemView',
  computed: {
    ...mapGetters(['item'])
  },
  methods: {
    ...mapActions(['FETCH_ITEM'])
  },
  created() {
    this.FETCH_ITEM(this.$route.params.id)
  }
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}

.comment-header {
  display: flex;
  margin-left: 10px;
}

.comment-item {
  margin: 0;
  padding: 0;
}



.comment-post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
}




.fa-user.main{
  font-size: 2.5rem;
}
.fa-clock {
  font-size: 0.7rem;
}
.fa-heart {
  font-size: 0.7rem;
  color: #828282;
  margin-right: 0.2rem;
  margin-left: 0.2rem;
}
.fa-comment {
  font-size: 0.7rem;
  color: #828282;
  margin-right: 0.2rem;
  margin-left: 0.2rem;
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


.user-description {
  padding-left: 8px;
  color: #828282;
  font-size: 0.8rem;
}
.time {
  font-size: 0.7rem;
  color: #828282;
  margin-left: 0.2rem;
}
.title {
  font-size: 1.5rem;
  margin: 0;
  font-weight: 400;
  color: #345;
  padding: 0.5rem;
}

.content {
  margin-top: 0.5rem;
  white-space: pre-wrap;
  padding: 0.5rem;
  border-top: 1px solid #e6e6e6;
  word-break: break-all;
  padding-bottom: 1rem;
  font-size: 1.1rem;
  color: #345;
  line-height: 1.5;
}

.title {
  font-size: 1.5rem;
  margin: 0;
  font-weight: 400;
  color: #345;
  padding: 0.5rem;
}
.sub-info {
  font-size: 0.7rem;
  color: #828282;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

</style>