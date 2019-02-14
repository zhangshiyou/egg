<template>
	<div class="hello">
		<span @click='getData'>
			获取数据
		</span>
		<div>
			<ul>
				<li v-for='(item,index) in msg' :key='index'>
					<div>
						user：{{item.cash}}
					</div>
					<div>
						name：{{item.bank}}
					</div>
					<div>
						id:{{item.sid}}
					</div>
					<div v-if='item.totailMongey'>
						allMoney:{{item.totailMongey}}
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				msg: ''
			}
		},
		methods: {
			getData() {
				let url = ''
				this.http.post('http://127.0.0.1:7001/queryDatas').then((response) => {
					this.msg = response.data
				}).catch((error) => {
					console.log(error);
				});
			},
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	ul,li{
		list-style: none;
		text-align:left;
	}
	li{
		border:1px solid #ddd;
		padding:5px;
	}
</style>
