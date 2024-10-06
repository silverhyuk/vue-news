<template>
   <div class="user-container">
        <div><i class="fa-solid fa-user main"></i></div>
        <div class="user-description">
            <slot name="username">
                사용자 이름
            </slot>
            
            <div class="time">
                <slot name="time">
                    <i class="fa-solid fa-clock"></i>
                    가입 시간
                </slot>
                <slot name="karma">

                </slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UserProfile'
}
</script>

<style scoped>
/* 기존 스타일 유지 */
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}

.user-description {
  padding-left: 8px;
  color: #828282;
  font-size: 1.2rem;
  text-align: left;
  margin-left: 0.5rem;
}

.time {
  font-size: 0.7rem;
  color: #828282;
  margin-left: 0.2rem;
  text-align: left;
}

.fa-user {
  font-size: 2.5rem;
}

</style>