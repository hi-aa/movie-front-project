<template>
	<header>
		<div>
			여기는 헤더영역입니다. 메뉴를 클릭하면 View 화면이 바뀝니다.
		</div>
		<ul>
			<li>
				<router-link :to="{ name: 'home' }" active-class="active">
					Home으로 이동
				</router-link>
			</li>
			<li>
				<router-link :to="{ name: 'edit' }" active-class="active">
					API 테스트로 이동
				</router-link>
			</li>
		</ul>
	</header>
</template>

<script setup>

</script>

<style scoped>
header, a {
	background-color: blue;
	color: white;
}
</style>