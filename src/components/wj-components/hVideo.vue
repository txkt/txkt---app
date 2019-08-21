<template>
	<div class="player">
		<div class="player-cover" ref="cover">
			<img :src="imgurl" />
		</div>
		<div class="player-task" @click="watch" ref="task">
			<div class="player-task-audition">
				<van-icon name="play-circle"/>
				<p class="text-play">试学</p>
			</div>
		</div>
		<video ref="vide" style="background-color:#000;width:100%;height:100%"  
		:src="videourl" controls autoplay></video>
	</div>
</template>

<script>
import { watch } from 'fs';
	export default {
		name:'hVideo',
		data:function(){
			return {
				imgurl:"",
				videourl:""
			}
		},
		methods:{
			watch:function(){
				this.$refs.cover.style.display="none",
				this.$refs.task.style.display="none",
				this.$refs.vide.style.display="block"
				
			}
		},
		props:{
			id:String
		},
		created:function(){
		fetch('http://localhost:3000/details')
		.then((res)=>{
			return res.json();
		})
		.then((datas)=>{
			for(var i in datas){
                    if(datas[i].details_id==this.id){
						this.imgurl=datas[i].Url.imgUrl,
						this.videourl=datas[i].Url.videoUrl,
						console.log(this.imgurl)
                    }
			    }   
		})
	}	
	}
</script>

<style scoped="scoped">
.player {
    width: 100%;
	height: 2.10rem;
    position: relative;
    background-color: rgba(0,0,0,.8);
	margin-top: 0.52rem;
}

.player-cover,.player-task{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
	/* display:none; */
}
.player-cover img {
    height: 100%;
	width: 100%;
}
.player-task{
	background: rgba(0,0,0,.6);
}
.player-task>div {
    position: absolute;
    text-align: center;
    font-size: .16rem;
    line-height: 1.5;
    color: #fff;
	    left: 50%;
    top: 50%;
	    transform: translateX(-50%) translateY(-50%);
}
.van-icon{
	font-size: .7rem;
}
.text-play {
	margin-top: .08rem;
}
video{
	display: none;
}
</style>
