// import Api from "../commons/Api"

const baseUrl = ""
//获取cartinfo的接口地址
const CARTURL = `${baseUrl}/`

export default {

  getCartInfoByUserId(cb){
    // Api.get(CARTURL,cb)
		fetch(CARTURL,{method: 'POST'})
		.then(function(res){
			return res.json();
		})
		.then(function(obj){
			console.log(obj)
		})
  }
}