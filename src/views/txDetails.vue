<template>
<div>
    <detailsHeader></detailsHeader>
	<hVideo :id="id"></hVideo>
	<detailstitle :id="id"></detailstitle>
	<textlist :id="id"></textlist>
	<delabel :id="id"></delabel>
</div>
</template>

<script> 
import detailsHeader from '../components/wj-components/detailsHeader.vue'
import hVideo from '../components/wj-components/hVideo.vue'
import detailstitle from '../components/wj-components/detailstitle.vue'
import textlist from '../components/wj-components/textList.vue'
import delabel from '../components/wj-components/delabel.vue'
	export default {
		name:'txDetails',
		data(){
			return {
				id:this.$route.query.id
			}
		},
		components: {
            detailsHeader,hVideo,detailstitle,textlist,delabel
		  }
	}
</script>

<style scoped>
</style>