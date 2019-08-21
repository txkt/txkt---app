<template>
	<div id="signin">
		<p class="s_pone">欢迎注册QQ</p>
		<p class="s_ptwo">每一天，乐在沟通。</p>
		<ul id="s_ul">
			<input class="s_ul_one" type="text" placeholder="昵称" @blur="blurEstimate(0)"  v-model="sInputname">
			<span class="s_ul_nspan" v-show="s_ulNspanone">昵称不可以为空</span>
			<div id="s_ulDiv">
				<input class="s_ul_one" type="password" placeholder="密码" @blur="blurEstimate(1)" v-model="sInputword">
				<div id="s_ul_nright" v-show="s_ul_nright"></div>
			</div>
			<span class="s_ul_nspan" v-show="s_ulNspantwo">密码不可以为空</span>
			<ul class="s_ul_nspan_ul" v-show="osUlNspanUl">
				<li class="s_ul_nspan_li">不能包括空格</li>
				<li class="s_ul_nspan_ulli">长度为8-16个字符</li>
				<li class="s_ul_nspan_ulli">必须包含字母、数字、符号中至少两种</li>
			</ul>
			<li class="s_ul_pho">
				<input class="s_ul_phoson" type="text" v-model="sUlPho" @click="sdownlists">
				<div id="s_ul_downbtn" @click="sdownlists"></div>
				<div id="s_ul_upbtn" @click="sdownlists"></div>
				<input class="s_ul_two" type="text" placeholder="手机号码" @blur="blurEstimate(2)" v-model="sInputphone">
				<span class="s_ul_twospan" v-show="s_ul_twospan">可通过该手机号找回密码</span>
				<span class="s_ul_nspan"  v-show="s_ulNspanthree">请填写手机号</span>
				<span class="s_ul_nspan" v-show="s_ulNspanfour">手机号有误</span>
				<div id="s_ul_phoneright" v-show="s_ul_phoneright"></div>
				<ul id="s_downlist" v-show="s_downlist">
					<li v-for="(list,index) in downlists" @click="shows(index)">{{list}}</li>
				</ul>
			</li>			
			<input class="s_ul_code" type="text" placeholder="短信验证码" v-model="sUlCode" >
			<div class="s_ul_codebtn" @click="sUlCodebtn">发送短信验证码</div>
			<span class="s_ul_nspan" v-show="s_ulNspanfive">验证码错误</span>
			<div class="s_ul_signbtn" @click="sUl_signbtn">立即注册</div>
			<div id="s_ul_pright" v-show="s_ul_pright"></div>
		</ul>
		<div id="s_protocol">
			<img id="s_protocol_d" v-show="s_protocol_d" @click="sProtocolD" src="../assets/dyw-img/checkbox_check.png">
			<img id="s_protocol_k" v-show="s_protocol_k" @click="sProtocolD" src="../assets/dyw-img/checkbox_normal.png">
			<span>我已阅读并已同意相关服务条款和隐私政策</span>
			<img id="s_protocol_down" v-show="s_protocol_down" src="../assets/dyw-img/down.png"  @click="sUlass">
			<img id="s_protocol_up" v-show="s_protocol_up" src="../assets/dyw-img/up.png"  @click="sUlass">
			<p class="s_ul_nspan" v-show="s_ulNspansix">请先同意服务条款</p>
		</div>		
		<ul id="s_ula" v-show="s_ula">
			<a v-for="(sulad,suindex) in sUladata" :href="suindex">{{sulad}}</a>
		</ul>
	</div>
</template>

<script>
	export default{
		name:"signin",
		data:function(){
			return {
				downlists:{
					"+86":"中国 +86",
					"+852":"中国香港特别行政区 +852",
					"+853":"中国香港特别行政区 +853",
					"+886":"中国台湾地区 +886"
				},
				sUladata:{
					"/chs/agreement1_chs.html":"《QQ号码规则》",
					"http://www.qq.com/privacy.htm":"《隐私政策》",
					"http://qzone.qq.com/web/tk.html":"《QQ空间服务协议》"
				},
				sUlPho:"+86",
				sInputname:"",
				sInputword:"",
				sInputphone:"",
				sUlCode:"",
				s_ulNspanone:false,
				s_ulNspanfour:false,
				s_ulNspantwo:false,
				s_ulNspanthree:false,
				s_ul_pright:false,
				osUlNspanUl:false,
				s_ul_twospan:true,
				s_protocol_k:false,
				s_protocol_d:true,
				s_ul_nright:false,
				s_ul_phoneright:false,
				s_ulNspanfive:false,
				s_ulNspansix:false,
				s_downlist:false,
				s_protocol_up:false,
				s_protocol_down:true,
				s_ula:false
			}
		},
		methods:{
			sUlCodebtn:function(){
				if(this.s_ul_phoneright == "true"){
					let sInputph = this.sInputphone;
					// const baseUrl = "   /sInputph"//网址
					//获取cartinfo的接口地址
// 					fetch(baseUrl,{method: 'POST'})
// 					.then(function(res){
// 						return res.json();
// 					})
// 					.then(function(obj){
// 						console.log(obj)
// 					})
				}
			},
			sUl_signbtn:function(){
				if(this.s_ul_phoneright=="true" && 
				s_ul_pright.style.display=="block" &&
				s_ul_nright.style.display=="block"&&
				(s_protocol_d.style.display=="block"||s_protocol_d.style.display=="")){
					console.log("进入")
				}
			},
			blurEstimate:function(dd){
				let osUlOne= document.getElementsByClassName("s_ul_one");
				let osUlTwo= document.getElementsByClassName("s_ul_two");		
				if(dd==0){
					if(this.sInputname == ""){
						this.s_ulNspanone=true
						osUlOne[0].style.borderColor = "red";
					}else{
						this.s_ulNspanone=false
					}
				}else if(dd == 1){
					if(this.sInputword == ""){
						osUlOne[1].style.borderColor = "red";
						this.s_ulNspantwo=true
						this.osUlNspanUl=false
					}else{
						this.osUlNspanUl=false
					}
				}else if(dd == 2){
					let arr=/^1(5|3|8)\d{9}$/;
					if(this.sInputphone == ""){
						osUlTwo[0].style.borderColor = "red";
						this.s_ul_twospan=false
						this.s_ulNspanthree=true
						this.s_ulNspanfour=false
					}else{
						this.s_ul_twospan=true
						this.s_ulNspanthree=false
						osUlTwo[0].style.borderColor= "";
						if(arr.test(this.sInputphone)){
							this.s_ul_twospan=true
							this.s_ulNspanthree=false
							this.s_ul_phoneright=true
							this.s_ulNspanfour=false
						}else{
							this.s_ul_twospan=false
							this.s_ulNspanthree=false
							this.s_ul_phoneright=false
							this.s_ulNspanfour=true
						}
					}
		
					
				}		
			},
			sProtocolD:function(){
				if(this.s_protocol_k == false){
					this.s_protocol_k=true
					this.s_protocol_d=false
					this.s_ulNspansix=true
				}else if(this.s_protocol_k == true){
					this.s_protocol_k=false
					this.s_protocol_d=true
					this.s_ulNspansix=false
				}
			},
			sdownlists:function(){
				let oSulOne = document.getElementsByClassName("s_ul_one");
				if(this.s_downlist==false){
					this.s_downlist=true;
					s_ul_upbtn.style.display = "block";
					s_ul_downbtn.style.display = "none";
				}else{
					this.s_downlist=false
					s_ul_upbtn.style.display = "none";
					s_ul_downbtn.style.display = "block";
				}
			},
			shows:function(data){
				this.sUlPho = data;
				this.s_downlist=false
				s_ul_upbtn.style.display = " none"
				s_ul_downbtn.style.display = " block"
			},
			sUlass:function(){
				if(this.s_ula == false){
					this.s_ula =true
					this.s_protocol_up=true
					this.s_protocol_down=false
				}else{
					this.s_ula =false
					this.s_protocol_up=false
					this.s_protocol_down=true
				}
				
			}
		},
		watch:{
			sInputname:function(){
				let osUlNspan= document.getElementsByClassName("s_ul_nspan");
				let osUlOne= document.getElementsByClassName("s_ul_one");
				if(this.sInputname != ""){
					this.s_ul_pright=true
					this.s_ulNspanone=false
					osUlOne[0].style.borderColor= "";
				}else{
					this.s_ul_pright=false
				}
			},
			sInputword:function(){
				let osUlNspan= document.getElementsByClassName("s_ul_nspan");
				let osUlOne= document.getElementsByClassName("s_ul_one");
				if(this.sInputword != ""){
					let reg1 = /\s+/;
					let reg2 = /^.{8,16}$/;
					let reg3 = /^\D+$/;
					let reg5=/[a-z]+/i;
					let reg4 = /^\S+$/;
					let reg6=/\d+/;
					let reg7=/\W+/;
					let sUlNspanUlli = document.getElementsByClassName("s_ul_nspan_ulli");
					let sUlNspanLi = document.getElementsByClassName("s_ul_nspan_li");
					let trueone = null;
					let truetwo = null;
					let truethree = null;
					if((reg5.test(this.sInputword) &&  (reg4.test(this.sInputword)&&reg7.test(this.sInputword)))||
					(reg6.test(this.sInputword) && reg5.test(this.sInputword))||
					reg6.test(this.sInputword) && (reg4.test(this.sInputword)&&reg7.test(this.sInputword))){
						sUlNspanUlli[1].style.backgroundImage = "url(/dyw-img/green@2x.png)";
						trueone=true;
					}else{
						sUlNspanUlli[1].style.backgroundImage = "url(/dyw-img/info@2x.png)";
					};
					if(reg1.test(this.sInputword)){
						sUlNspanLi[0].style.backgroundImage = "url(/dyw-img/info@2x.png)";
					}else{
						sUlNspanLi[0].style.backgroundImage = "url(/dyw-img/green@2x.png)";
						truetwo=true;
					};
					if(reg2.test(this.sInputword)){
						sUlNspanUlli[0].style.backgroundImage = "url(/dyw-img/green@2x.png)";
						truethree=true;
					}else{
						sUlNspanUlli[0].style.backgroundImage = "url(/dyw-img/info@2x.png)";
					};
					if(trueone&&truetwo&&truethree){
						this.s_ul_nright=true
					}else{
						this.s_ul_nright=false
					};
					osUlOne[1].style.borderColor= "";
					this.s_ulNspantwo=false
					this.osUlNspanUl=true
				}else{
					this.s_ul_nright=false
				}
			}
		}
	}
</script>

<style>
	#signin{
		padding-top: .3rem;
		width: 80%;
		margin: 0 auto;
	}
	.s_pone{
		font-size: 36px;
	}
	.s_ptwo{
		font-size: 22px;
		margin:.1rem 0 .3rem;
	}
	#s_ul{
		width:100%;
		display: flex;
		flex-wrap: wrap;
		position: relative;
	}
	#s_ul span{
		margin-top: .05rem;
	}
	#s_ul input{
		margin-top: .1rem;
		font-size: .16rem;
		height: .44rem;
		border: 1px solid #aaa;
		border-radius: 4px;
	}
	.s_ul_one{
		width: 100%;
		text-indent:.15rem;
	}
	.s_ul_signbtn{
		width: 100%;
		background: #3487ff;
		color: white;
		font-size: 18px;
		text-align: center;
		line-height: .44rem;
		border-radius: 4px;
		margin-top: .1rem;
	}
	.s_ul_phoson,
	.s_ul_code{
		width: 30%;
	    margin-right: 2.3%;
		text-indent:.15rem;
	}
	.s_ul_pho{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		position: relative;
	}
	.s_ul_code{
		text-indent: 0;
		text-align: center;
	}
	.s_ul_two,
	.s_ul_codebtn{
		width: 66%;
		font-size: .16rem;
		text-indent:.15rem;
	}
	.s_ul_codebtn{
		background: #3487ff;
		text-align: center;
		height: .44rem;
		line-height: .44rem;
		color: white;
		margin-top: .11rem;
		border-radius: 4px;
		text-indent: 0;
	}
	#s_ulDiv{
		width: 100%;
		position: relative;
	}
	#s_ul_downbtn,
	#s_ul_upbtn{
		height: .44rem;
		width: 8%;
		background: url(../assets/dyw-img/down.png) no-repeat center center;
		position: absolute;
		top: .11rem;
		left: .66rem;
	}
	#s_ul_upbtn{
		left: 21.8%;
		display: none;
	}
	#s_ul_upbtn{
		background: url(../assets/dyw-img/up.png) no-repeat center center;
	}
	#s_downlist{
		width:100%;
		margin: 0 auto;
		border-radius:4px;
		position: absolute;
	    top: .59rem;
		background: white;
		box-shadow: 0 0 8px 0 rgba(0,0,0,.15);
		z-index: 10;
	}
	#s_downlist li{
		list-style: none;
		width: 100%;
		height: .34rem;
		font-size:14px ;
		line-height: .34rem;
		text-indent: 2px;
	}
	#s_ul_nright,
	#s_ul_pright,
	#s_ul_phoneright{
		width: 9%;
		height: .44rem;
		background:url(../assets/dyw-img/android_logo_v1.png) no-repeat center center ;
		background-position: .03rem .14rem;
		position: absolute;
	    top: .1rem;
		left: 2.5rem;
	}
	#s_ul_nright{
		top: .1rem;
	}
	#s_ul_downbtn{
		width: 8%;
		height: .44rem;
		position: absolute;	
		background:url(../assets/dyw-img/down.png) no-repeat center center ;
	}
	#s_protocol{
		font-size: .13rem;
		color: #aaa;
		position: relative;
		margin-top: .1rem;
	}
	#s_protocol span{
		margin-left: .22rem;
	}
	#s_protocol_k,
	#s_protocol_d{
		display: inline;
		position: absolute;
	}
	#s_protocol_down,
	#s_protocol_up{
		display: inline-block;
		margin-left:.1rem;
		position: absolute;
		right: 0.09rem;
		top: .05rem;
	}
	#s_ula{
		margin-top: .06rem;
		display: none;
	}
	#s_ula a{
		display: block;
		font-size: .15rem;
		text-decoration: none;
		color: #359eff;
	}
	.s_ul_nspan{
		text-indent: .22rem;
		background: url(../assets/dyw-img/error@2x.png) no-repeat; 
		background-size: .18rem .18rem;
		color: #ff5b5b;
		font-size: .14rem;
		margin-top: .06rem;
	}
	.s_ul_twospan{
		color: #999;
		font-size: .13rem;
	}
	.s_ul_nspan_ul{
		font-size: .14rem;
		text-indent: .22rem;
		list-style: none;
	}
	.s_ul_nspan_ul li{
		margin-top: .06rem;
	}
	.s_ul_nspan_li,
	.s_ul_nspan_ulli{
		background: url(../assets/dyw-img/green@2x.png) no-repeat;
		background-size: .19rem .19rem;
	}
	.s_ul_nspan_ulli{
		background-image: url(../assets/dyw-img/info@2x.png);
	}
	.s_ulDiv_one{
		top:.01rem;
	}
</style>
