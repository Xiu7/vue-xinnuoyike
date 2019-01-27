<template>
  <div>
    <div class="main_banner" >
        <img src="../../static/images/yeji.jpg" alt="">
        </div>
    <div class="content">
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="num"
          label="序号"
          width="50">
        </el-table-column>
        <el-table-column
          prop="name"
          label="项目名程"
          width="449">
        </el-table-column>
        <el-table-column
          prop="type"
          label="项目类型"
          width="150">
        </el-table-column>
        <el-table-column
                  prop="company"
                  label="建设单位"
                  width="250">
         </el-table-column>
        <el-table-column
                  prop="date"
                  label="日期"
                  width="100">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: '',
  data () {
    return {
      tableData:[],
    }
  },
  mounted(){
    this.searchTableData()
    },
  methods:{
  searchTableData(){

              axios.get('https://bird.ioliu.cn/v2?url=http://39.105.151.255:8002/getdata?data=file1').then(
             (response) => {
             for(let i=0,y=0;i<response.data.data.length;i++){
             if("yes"!=response.data.data[i][6]){
             let data={num:null,name:null,type:null,company:null,date:null}
               data.num=i-y+1
               data.name=response.data.data[i][1]
               data.type=response.data.data[i][2]
              data.company=response.data.data[i][3]
              data.date=response.data.data[i][4]
                this.tableData.push(data)
                }else{y++}
               }
            })
        }
     }
}
</script>


<style scoped>
.content{margin:0 auto; text-align:center; width:1000px;padding-bottom:50px}
.main_banner{
  background: url(../../static/images/1841_src.jpg);
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
