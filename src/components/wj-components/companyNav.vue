<template>
	<nav class="nav-box">
        <ul id="js-tab-bar" class="tab-bar with-3-tabs border-bottom">
             
                <li class="tab-bar__item">   
                    <router-link to="/company/recommend"> 
                    推荐    
                     </router-link>
                </li>
                <li class="tab-bar__item">
                     <router-link to="/company/" exact>
                    课程(2)
                     </router-link>
                </li>
                <li class="tab-bar__item">
                      <router-link to="/company/teacher">
                    老师(2)
                     </router-link>
                </li>
            
        </ul>
    </nav>
</template>

<script>
	export default {
		name:'companyNav',
		data:function(){
			return {
				
			}
		},
		methods: {
    		
 		 }
	}	
</script>

<style scoped="scoped">
	.nav-box {
    position: relative;
    top: 0;
    left: 0;
    z-index: 110;
    margin-top: -0.4rem;
    height: .4rem;
    font-size: .16rem;
    color: #000;
    background-color: #fff;
}
a{
    color: #000;
}
.tab-bar {
    position: relative;
    height: .4rem;
    /* overflow: hidden; */
}

.tab-bar__item {
    height: .4rem;
    line-height: .4rem;
    width: 33%;
    float: left;
    text-align: center;
}
.router-link-active{
     border-bottom: 3px solid #23b8ff;
    display: block;
    z-index: 10;
    color: #23b8ff;
}
</style>