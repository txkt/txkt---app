export default  {

  get(url,cb){
     fetch(url,{ method: 'POST'}).then(response=>{
       response.json().then(cb)
     })
  }
}