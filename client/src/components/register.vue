<template>
	<div>
		用户名：<input type="text" v-model="userName">
		密码：<input type="password" v-model="pwd">
		<button @click='register'> 确定</button>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				userName:'',
				pwd:''
			}
		},
		mounted(){
			
		},
		methods:{
			register(){
				let par={
					userName:this.userName,
					pwd:this.pwd,
				}
				this.http.post('http://127.0.0.1:7001/register',par).then((response) => {
					this.msg = response.data;
					if(response.data.code==123){
						alert(response.data.message)
					}else{
							alert('注册成功')
					}
				}).catch((error) => {
					console.log(error);
				});
			},
		}
	}
</script>

<style>
</style>
