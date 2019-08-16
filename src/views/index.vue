<template>
	<div id="index">
		<div id="in_div"></div>
		<Footers :footerlist="footerlist"></Footers>
	</div>
</template>

<script>
	import Footers from '../commons/footers' 
	export default{
		name:"index",
		data:function(){
			return {
				footerlist:""
			}
		},
		components:{
			Footers
		},
		created:function(){
			this.footerlist=this.$route.params.data;
		}
	}
</script>

<style>
	#index{
		width: 100%;
	}
	#in_div{
		width: 100%;
		height: 3rem;
		background: #146FDF;
	}
</style>
