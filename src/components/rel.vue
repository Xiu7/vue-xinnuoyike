<template>
  <div>
    <div class="main_banner" >
    <img src="../../static/images/lian.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


<style scoped>
.main_banner{
  background: url(../../static/images/1849_src.jpg);
	clear: both;
	overflow: hidden;
	height: 530px;
	background-position: center 0;
	background-repeat: no-repeat;
	padding-bottom: 20px;
	position: relative;
}
.main_banner img{
	position: absolute;
	top: 455px;
	left: 418px;
}
</style>
