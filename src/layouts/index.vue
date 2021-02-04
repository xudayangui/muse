<template>
	<div class="app-container">
		<div class="layout-header">
			<mu-appbar style="width: 100%;" color="primary">
                <mu-button icon slot="left">
                    <mu-icon value="menu"></mu-icon>
                </mu-button>
                Title
                <mu-button flat slot="right">LOGIN</mu-button>
            </mu-appbar>
		</div>
		<div class="layout-content">
			<keep-alive v-if="$route.meta.keepAlive">
				<router-view></router-view>
			</keep-alive>
			<router-view v-else></router-view>
		</div>
		<div class="layout-footer">
			<mu-container>
                <mu-bottom-nav>
                    <mu-bottom-nav-item :title="item.meta.title" :to="item.path" icon="home" v-for="(item,index) in $router.options.routes[0].children" :key="index"></mu-bottom-nav-item>
                </mu-bottom-nav>
            </mu-container>
		</div>
	</div>
</template>
<script>
export default {
    name: 'Layout',
    data() {
        return {
        }
    },

    created(){
        
    },

    methods: {
        handleChange() {
            console.error(this.$route)
        }
    }
}
</script>
<style scoped>
.app-container {
    background: #efeef4;
}
.layout-content {
   
}
.layout-footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
}
.layout-footer .container{
    padding: 0;
}
</style>
