import { h } from 'vue'
import ListView from '@/views/ListView.vue'
import bus from '@/utils/bus.js'


export default function createListView(name) {
    return {
        // 재사용할 컴포넌트 이름
        name,
        // 컴포넌트가 생성될 때 실행되는 함수
        created() {
            console.log('created:' + name + ":" +this.$route.name)
            bus.emit('start:spinner')
            this.$store.dispatch('FETCH_LIST', this.$route.name)
            .then(() => {
                bus.emit('end:spinner')
            })
            .catch((error) => {
                bus.emit('end:spinner')
            })
        },
        render() {
            return h(ListView)
        }
    }
}