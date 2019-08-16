<template>
	<div class="player">
		<div class="player-cover" ref="cover">
			<img src="../../assets/wj-imgs/5.webp" />
		</div>
		<div class="player-task" @click="watch" ref="task">
			<div class="player-task-audition">
				<van-icon name="play-circle"/>
				<p class="text-play">试学</p>
			</div>
		</div>
		<video ref="vide" style="background-color:#000;width:100%;height:100%"  src="http://211.162.173.153/vedu.tc.qq.com/AHUI_GsDE9vN5Bc8PjlM8RIkUyvAS0MQz6LrVxuyIzYo/w14314d2d6v.mp4?sdtfrom=v3010&amp;guid=6b2209728c44776e7c411e1256c7655f&amp;vkey=5CD4F658F6B442CF926F050FC7053041765C13DA2293B02D6A0822F6BCC9BE10712147FF070FBC7282072B17867C9F0412E0FFE277E7E20E972DAC7FCB72EAAB69823AFA092CE45521938A855A62894AAA51842791136FC2AE81EE80E687A8FA58C4133EA1BB9045F5DE656A77434DD9A0E060FDDC4A8AA1009DD8341D0EB5FF&amp;platform=2" controls autoplay></video>
	</div>
</template>

<script>
import { watch } from 'fs';
	export default {
		name:'hVideo',
		data:function(){
			return {
				
			}
		},
		methods:{
			watch:function(){
				this.$refs.cover.style.display="none",
				this.$refs.task.style.display="none",
				this.$refs.vide.style.display="block"
				
			}
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
