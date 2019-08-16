<template>
<div>
    <commentHeader></commentHeader>
    <goodCom></goodCom>
    </div>
</template>

<script> 
import commentHeader from '../components/wj-components/commentHeader.vue';
import goodCom from '../components/wj-components/goodCom.vue';
	export default {
		name:'comment',
		components: {
        commentHeader,goodCom
  }
	}
</script>

<style scoped>
</style>