<template>
  <div>
  <div class="main_banner" style="background: ../../static/images/1834_src.jpg;">
      <img src="../../static/images/xin.jpg" alt="">
  </div>
    <div class="content" v-show="bodytable">
      <el-table
            :data="listdata"
            style="width:100%，" highlight-current-row @current-change="choose">
            <el-table-column
              prop="title"
              label="标题"
              width="800">
            </el-table-column>

            <el-table-column
              prop="date"
              label="日期">
            </el-table-column>
          </el-table>
    </div>
    <div class="content" v-show="bodycontent" v-for="data in value">
         <li> {{data.title}}--{{data.date}}</li>
        <span>  {{data.content}} </span>

    <div>
            <ul class="news" :data="listdata">
                附件：
            <li>
                <a :href="data.url"
                   :download="data.filename">{{data.filename}}</a>
            </li>
                <li>
                               <a :href="data.url1"
                                  :download="data.filename1">{{data.filename1}}</a>
            </li>
            <li>
                                            <a :href="data.url2"
                                               :download="data.filename2">{{data.filename2}}</a>
                                        </li>
                                         <li>
                                                        <a :href="data.url3"
                                                           :download="data.filename3">{{data.filename3}}</a>
                                                    </li>
                                                     <li>
             <a :href="data.url4"
                :download="data.filename4">{{data.filename4}}</a>
             </li>


        </ul>

        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import store from '@/vuex/store'
export default {
  name: '',
  data () {
    return {
      bodytable:true,
      bodycontent:false,
      value:[],
      listdata:[],
      urllist:[],
      filename:[]
    }
  },
  mounted(){
  this.searchTableData()
  },
  props:{

  },
computed: {
  getUserIcons() {
    return store.state.count;
  }
},
watch: {
  getUserIcons(val) {
    this.bodytable=true,
    this.bodycontent=false,
    store.state.count=true
  }
},
 methods:{
      getUrl(val){
        return this.listdata.url1+val
      },
       choose(val){
       this.value=[]
       this.bodytable=false
       this.bodycontent=true
       this.value.push(val)
                },
       searchTableData(){

            axios.get('https://bird.ioliu.cn/v2?url=http://39.105.151.255:8002/getdata?data=file').then(
           (response) => {
           for(let i=0;i<response.data.data.length;i++){
           if("yes"!=response.data.data[i][15]){
           let data={title:null,content:null,date:null,url:null,url1:null,url2:null,url3:null,url4:null,filename:null,filename1:null,filename2:null,filename3:null,filename4:null}
             data.title=response.data.data[i][1]
             data.content=response.data.data[i][2]
             data.date=response.data.data[i][9]

                         data.url="../dist"+response.data.data[i][3].slice(22)
                         data.url1="../dist"+response.data.data[i][3].slice(22)
                         data.url2="../dist"+response.data.data[i][3].slice(22)
                         data.url3="../dist"+response.data.data[i][3].slice(22)
                         data.url4="../dist"+response.data.data[i][3].slice(22)
                                       data.filename=response.data.data[i][10]
                                       data.filename1=response.data.data[i][11]
                                       data.filename2=response.data.data[i][12]
                                       data.filename3=response.data.data[i][13]
                                       data.filename4=response.data.data[i][14]
              this.listdata.push(data)
             }
            }

      })
    }
  }
}
</script>


<style>
body {text-align:center}
.content{ margin:0 auto; text-align:center; width:1000px;padding-bottom:50px}
.main_banner{
  background: url(../../static/images/1843_src.jpg);
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
