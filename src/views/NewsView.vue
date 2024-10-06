<template>
  <list-item />
</template>

<script>
import ListItem from '@/components/ListItem'
import { mapActions } from 'vuex';
import bus from '@/utils/bus'
export default {
  components: {
      ListItem
  },
  created() {
    bus.emit('start:spinner') 
    this.FETCH_NEWS()
    .then(() => {
      bus.emit('end:spinner')
    })
    .catch(error => {
      bus.emit('end:spinner')
    })

  },
  methods: {
    ...mapActions(['FETCH_NEWS']),
  }
}
</script>