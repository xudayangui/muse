<template>
	<div class="home">
		<mu-carousel hide-controls class="carousel">
			<mu-carousel-item>
				<img src="./../../assets/a.png"/>
			</mu-carousel-item>
		</mu-carousel>
	</div>
</template>

<script>


export default {
  name: 'Home',
}
</script>
<style scoped>
.carousel {
	height:150px;
}
.carousel img {
	height: 100%;
}
</style>