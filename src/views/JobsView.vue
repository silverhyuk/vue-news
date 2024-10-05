<template>
    <div>
        <!-- jobs 리스트를 그려줌 -->
        <div v-for="item in jobs" :key="item.id">
            <section class="item-container">
                <div class="title-container">
                    <a :href="item.url" target="_blank">{{ item.title }}</a>
                </div>
                <div class="time-container">
                    <i class="fa-solid fa-clock"></i>
                    {{ item.time_ago }} 
                </div>

                <div class="domain-container" v-if="item.domain">
                    <i class="fa-solid fa-building"></i>
                    {{ item.domain }}
                </div>
            </section>
        </div>
         <!-- <p v-for="item in jobs" :key="item.id">
            <a :href="item.url" target="_blank">{{ item.title }}</a>
            <small>{{ item.time_ago }} | {{ item.domain }}</small>
         </p> -->
    </div>
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

<style>
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

.domain-container {
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
</style>