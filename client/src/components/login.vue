<template>
	<div class='login'>
		用户名：<input type="text" v-model="userName">
		密码：<input type="password" v-model="pwd">
		<div @click='login'>
			登陆
		</div>
		<div>
			<router-link to="/register">注册</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				userName:'',
				pwd:'',
			}
		},
		mounted(){
			
		},
		methods:{
			login(){
				let par={
					userName:this.userName,
					pwd:this.pwd,
				}
				this.http.post('http://127.0.0.1:7001/login',par).then((response) => {
					this.msg = response.data;
					if(response.data.code===234){
						alert(response.data.message)
					}else{
						alert(response.data.message)
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
