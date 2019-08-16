<template>
<div class="company">
    <commentHeader></commentHeader>
    <companyHeader></companyHeader>
    <companyNav></companyNav>
    <router-view></router-view>
    </div>
</template>

<script> 
import commentHeader from '../components/wj-components/commentHeader.vue';
import companyHeader from '../components/wj-components/companyHeader.vue';
import companyNav from '../components/wj-components/companyNav.vue';
// import course from '../components/wj-components/course.vue';
	export default {
		name:'company',
		components: {
        commentHeader,companyHeader,companyNav
  }
	}
</script>

<style scoped>
.company{
    background:#f2f2f2;
    height: 6.67rem;
    width:100%;
}
</style>