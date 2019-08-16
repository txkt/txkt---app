<template>
	<div id="type">
		<div id="ty_div"></div>
		<Footers :footerlist="footerlist"></Footers>
	</div>
</template>

<script>
	import Footers from '../commons/footers' 
	export default{
		name:"type",
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
	#type{
		width: 100%;
	}
	#ty_div{
		width: 100%;
		height: 3rem;
		background: red;
	}
</style>
