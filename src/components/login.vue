<template>
<div>
  <div v-if="show">
    <div class="loginPage">
        <h1>登录</h1>
        <el-form  size="small">
            <el-form-item label="用户名">
                <el-input type="text" id="user" v-model="formName.user" @blur="inputBlur('user',formName.user)" ></el-input>
                <p>{{formName.userError}}</p>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" id="password" v-model="formName.password" @blur="inputBlur('password',formName.password)"></el-input>
                <p>{{formName.passwordError}}</p>
            </el-form-item>
            <el-button type="primary" @click="submitForm('formName')" >提交</el-button>
            <el-button @click="resetForm">重置</el-button>
        </el-form>
    </div>

  </div>
  <div v-if="beShow">
  <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
      <el-tab-pane label="新闻信息上传" name="first">
                                  <div id="sample" class="upload">
                                                  <h1>新闻信息上传</h1>
                                                  <el-form :model="tableList" label-width="80px">
                                                             <el-form-item label="标题" prop="title">
                                                             <el-input type="textarea" v-model="tableList.title" placeholder="请输入标题"></el-input>
                                                             </el-form-item>
                                                             <el-form-item label="内容" prop="content" size="large">
                                                             <el-input type="textarea" v-model="tableList.content" placeholder="请输入内容" ></el-input>
                                                             </el-form-item>
                                                             <el-form-item label="日期" prop="date">
                                                             <el-input type="textarea" v-model="tableList.date" placeholder="请输入日期"></el-input>
                                                             </el-form-item>
                                                              <div class="selectFile">
                                                                 <h4>附件上传</h4>
                                                                 <el-upload
                                                                 class="upload-demo"
                                                                 multiple
                                                                 :limit="5"
                                                                  action="http://39.105.151.255:8002/"
                                                                 :http-request="submit1"
                                                                 :on-preview="handlePreview"
                                                                 :on-remove="handleRemove"
                                                                 :auto-upload="false"
                                                                 :file-list="fileList"
                                                                 ref="upload">

                                                                 <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                                                                 <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
                                                                 <el-progress :text-inside="true" :stroke-width="18" :percentage=progress status=success></el-progress>
                                                                  <p>(请在附件上传成功后，再点击提交）</p>
                                                                 <el-button type="primary" @click="onSubmit">提交</el-button>
                                                                 </el-upload>
                                                               </div>
                                                             </el-form-item>
                                                  </el-form>
                                  </div>
                 </el-tab-pane>
      <el-tab-pane label="业绩信息上传" name="second">
                 <div id="sample" class="upload">
                          <h1>业绩信息上传</h1>
                                        <el-form :model="tableList1" label-width="80px">
                                                                   <el-form-item label="项目名称" prop="name">
                                                                  <el-input type="textarea" v-model="tableList1.name" placeholder="请输入项目名称"></el-input>
                                                                   </el-form-item>
                                                                   <el-form-item label="项目类型" prop="type" size="large">
                                                                   <el-input type="textarea" v-model="tableList1.type" placeholder="请输入项目类型" ></el-input>
                                                                   </el-form-item>
                                                                   <el-form-item label="建设单位" prop="company">
                                                                   <el-input type="textarea" v-model="tableList1.company" placeholder="请输入建设单位"></el-input>
                                                                   </el-form-item>
                                                                   <el-form-item label="日期" prop="date">
                                                                    <el-input type="textarea" v-model="tableList1.date" placeholder="请输入日期"></el-input>
                                                                    </el-form-item>
                                                                   <el-button type="primary" @click="onSubmit1">提交</el-button>
                                                                   </el-form-item>
                                        </el-form>
                 </div>
      </el-tab-pane>
                          <el-tab-pane label="新闻信息编辑" name="third">   <div id="sample" class="upload">
                                                        <h1>新闻信息编辑</h1>
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
                                                               <li> {{data.title}}</li>
                                                               <li> {{data.date}}</li>
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
                                                                   <el-button type="primary" @click="edit_news(value)" v-show="edit_show2">{{data.delete_bit}}此条新闻</el-button>

                                                                     <el-button type="primary" @click="edit_news1(value)">编辑此条新闻</el-button>
                                                              </ul>

                                                              </div>
                                                          </div>
                                                          </div>
                          </el-tab-pane>
                          <el-tab-pane label="业绩信息编辑" name="fourth">   <div id="sample" class="upload">
                                                                         <h1>业绩信息编辑</h1>
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
                                                                                width="400">
                                                                              </el-table-column>
                                                                              <el-table-column
                                                                                prop="type"
                                                                                label="项目类型"
                                                                                width="120">
                                                                              </el-table-column>
                                                                              <el-table-column
                                                                                        prop="company"
                                                                                        label="建设单位"
                                                                                        width="150">
                                                                               </el-table-column>
                                                                              <el-table-column
                                                                                        prop="date"
                                                                                        label="日期"
                                                                                        width="100">
                                                                              </el-table-column>
                                                                               <el-table-column
                                                                               label="操作"
                                                                               width="179">
                                                                               <template slot-scope="scope" prop="delete_bit">
                                                                                <el-button type="text" size="small" @click="edit_ach(scope.row)">
                                                                                {{scope.row.delete_bit}}</el-button>
                                                                                <el-button type="text" size="small" @click="edit_ach1(scope.row)">编辑</el-button>
                                                                                 </template>
                                                                              </el-table-column>
                                                                            </el-table>
                                                                          </div>
                                                                         </div>
                          </el-tab-pane>
    </el-tabs>

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

                  tableList:{
                        title:'',
                        content:'',
                        date:''},
                   tableList1:{
                         name:'',
                         type:'',
                         company:'',
                         date:''},
                 formName: {//表单中的参数
                     user: '',
                     userError: '',
                     password: '',
                     passwordError: '',
                     beDisabled: true},
                 abc:{
                     user:'admin',
                     password:'123456'},
                 my_html:'',
                 bodytable:true,
                 bodycontent:false,
                 file:[],
                 fileList:[],
                 src:'',
                 progress:0,
                 tableData:[],
                 show:true,
                 beShow:false,
                 activeName2: 'first',
                 value:[],
                 listdata:[],
                 urllist:[],
                 filename:[],
                 edit_show:true,
                 edit_show1:true,
                 edit_show2:true,
                 edit_show3:true,
                 formData:[],
                 fileList:[],
                 success:["success"]
             }
         },
           mounted(){
           this.searchTableData()
           },
           props:{

           },
           computed: {
             getUserIcons() {
               return store.state.count1;
             }
           },
           watch: {
             getUserIcons(val) {
               this.bodytable=true,
               this.bodycontent=false,
               store.state.count1=true
             }
           },
          methods:{
          submit1(file){
          this.formData.append('file',file.file)
                         },
          submitUpload(){
                          this.formData = new FormData();
                          this.$refs.upload.submit();
                          let abc = "http://39.105.151.255:8002/upload";
                                    var config = {
                                                           onUploadProgress: progressEvent => {
                                                               var complete = (progressEvent.loaded / progressEvent.total * 100 | 0)
                                                               this.progress = complete
                                                           }
                                                     }
                        console.log(this.formData)
                        axios.post(abc, this.formData, config).then( (res) => {
                                     if(res.data.res==true){
                                               this.$message({
                                                        message: '上传成功！',
                                                        type: 'success'
                                                      });
                                              }else{
                                                                                                              this.$message.error('上传失败！');
                                                                                                              }
                                             }).catch((error) =>{
                                                  this.$message.error('网络错误！');
                                                            });
        this.submit1();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
               getUrl(val){
                 return this.listdata.url1+val
               },
                choose(val){
                this.value=[]
                this.bodytable=false
                this.bodycontent=true
                this.value.push(val)
                         },
                edit_ach(row){
                                                 if(row.delete_bit=="恢复"){
                                                       let formdata = new FormData();
                                                                formdata.append('data','file1');
                                                                formdata.append('date',row.date)
                                                                formdata.append('name',row.name)
                                                                formdata.append('deletebit',"no")
                                                               axios.post('http://39.105.151.255:8002/update',formdata).then(
                                                                   (res) => {
                                                               if(res.res=true){

                                                             this.$message({
                                                                                                                 message: '操作成功！',
                                                                                                                 type: 'success'
                                                                                                               });
                                                               }else{
                                                               this.$message.error('操作失败！');
                                                               }
                                                              }).catch((error) =>{
                                                                                                                  this.$message.error('网络错误！');
                                                                                                                            });
                                                           }else{ let formdata = new FormData();
                                                                 formdata.append('data','file1');
                                                                 formdata.append('date',row.date)
                                                                 formdata.append('name',row.name)
                                                                 formdata.append('deletebit',"yes")
                                                                axios.post('http://39.105.151.255:8002/update',formdata).then(
                                                                    (res) => {
                                                                if(res.res=true){

                                                              this.$message({
                                                                                                                  message: '操作成功！',
                                                                                                                  type: 'success'
                                                                                                                }
                                                                                                                );
                                                                }else{
                                                                                                                                this.$message.error('操作失败！');
                                                                                                                                }
                                                               }).catch((error) =>{
                                                                                                                   this.$message.error('网络错误！');
                                                                                                                             });
                                                              }

                          },
                           edit_ach1(row){},
                           edit_news1(val){},
                edit_news(val){
                if(val[0].delete_bit=="恢复"){

                 let formdata = new FormData();
                                                                                      formdata.append('data','file');
                                                                                      formdata.append('date',val[0].date)
                                                                                      formdata.append('title',val[0].title)
                                                                                      formdata.append('deletebit',"no")

                                                          axios.post('http://39.105.151.255:8002/update',formdata).then(
                                                              (res) => {
                                                          if(res.res=true){
                                                          this.$message({
                                                                    message: '操作成功！',
                                                                    type: 'success'
                                                                  });
                                                          }else{
                                                                                                                          this.$message.error('操作失败！');
                                                                                                                          }
                                                         }).catch((error) =>{
                                                                                                             this.$message.error('网络错误！');
                                                                                                                       });
                }
                else{
                           let formdata = new FormData();
                                                                      formdata.append('data','file');
                                                                      formdata.append('date',val[0].date)
                                                                      formdata.append('title',val[0].title)
                                                                       formdata.append('deletebit',"yes")
                                          axios.post('http://39.105.151.255:8002/update',formdata).then(
                                              (res) => {
                                          if(res.res=true){
                                          this.$message({
                                                    message: '操作成功！',
                                                    type: 'success'
                                                  });
                                          }else{
                                                                                                          this.$message.error('操作失败！');
                                                                                                          }
                                         }).catch((error) =>{
                                                                                             this.$message.error('网络错误！');
                                                                                                       });}

                          },
                searchTableData(){

                     axios.get('https://bird.ioliu.cn/v2?url=http://39.105.151.255:8002/getdata?data=file').then(
                    (response) => {
                    for(let i=0;i<response.data.data.length;i++){
                    let data={title:null,content:null,date:null,url:null,url1:null,url2:null,url3:null,url4:null,filename:null,filename1:null,filename2:null,filename3:null,filename4:null,delete_bit:null}
                      data.title=response.data.data[i][1]
                      data.content=response.data.data[i][2]
                      data.date=response.data.data[i][9]
                                  data.url="../"+response.data.data[i][3].slice(22)
                                  data.url1="../"+response.data.data[i][3].slice(22)
                                  data.url2="../"+response.data.data[i][3].slice(22)
                                  data.url3="../"+response.data.data[i][3].slice(22)
                                  data.url4="../"+response.data.data[i][3].slice(22)
                                                data.filename=response.data.data[i][10]
                                                data.filename1=response.data.data[i][11]
                                                data.filename2=response.data.data[i][12]
                                                data.filename3=response.data.data[i][13]
                                                data.filename4=response.data.data[i][14]
                                                if(response.data.data[i][15]=="yes"){
                                               data.delete_bit="恢复"
                                                }else{
                                                data.delete_bit="删除"
                                                }

                       this.listdata.push(data)

                      }
               });
                axios.get('https://bird.ioliu.cn/v2?url=http://39.105.151.255:8002/getdata?data=file1').then(
                            (response) => {
                            for(let i=0;i<response.data.data.length;i++){
                            let data={num:null,name:null,type:null,company:null,date:null,delete_bit:null}
                              data.num=i+1
                              data.name=response.data.data[i][1]
                              data.type=response.data.data[i][2]
                             data.company=response.data.data[i][3]
                             data.date=response.data.data[i][4]
                             if(response.data.data[i][6]=="yes"){
                                                                            data.delete_bit="恢复"
                                                                             }else{
                                                                             data.delete_bit="删除"
                                                                             }
                               this.tableData.push(data)
                              }
                           })
             },
            handleClick(tab, event) {
                    store.state.count1=false
               },
             resetForm:function(){
                 this.formName.user = '';
                 this.formName.userError = '';
                 this.formName.password = '';
                 this.formName.passwordError = '';},
             submitForm:function(formName){
                 if( this.abc.user= this.formName.user&&this.abc.password == this.formName.password){
                 this.$message({
                                                                     message: '登陆成功！',
                                                                     type: 'success'
                                                                   });
                 this.show=false
                 this.beShow=true}
                 else{
                 this.$message.error('用户名或密码错误');}
                 },
             inputBlur:function(errorItem,inputContent){
                 if (errorItem === 'user') {
                     if (inputContent === '') {
                         this.formName.userError = '用户名不能为空'
                     }else{
                         this.formName.userError = '';
                     }
                 }else if(errorItem === 'password') {
                     if (inputContent === '') {
                         this.formName.passwordError = '密码不能为空'
                     }else{
                         this.formName.passwordError = '';
                               }
                           }
                        },
            /*  uploading(event){
               this.fileList = event.target.files;

               },
               submit(event){
               event.preventDefault();
               let formdata = new FormData();
               for(let i=0;i<this.fileList.length;i++){
               this.file=this.fileList[i]
               formdata.append('file',this.file);
               console.log(this.fileList[i])
                  }

               let abc = "http://39.105.151.255:8002/upload";
               var config = {
                                      onUploadProgress: progressEvent => {
                                          var complete = (progressEvent.loaded / progressEvent.total * 100 | 0) + '%'
                                          this.progress = complete
                                      }
                                }
                console.log(formdata)
                axios.post(abc, formdata, config).then( (res) => {
                if(res.data.res==true){

                          this.$message({
                                   message: '上传成功！',
                                   type: 'success'
                                 });
                         }else{
                                                                                         this.$message.error('网络错误！');
                                                                                         }
                        }).catch((error) =>{


                                        });


                                  },*/
                 onSubmit(){
                  let formdata = {
                        "title":null,
                        "content":null,
                        "date":null
                            };
                            formdata.title=this.tableList.title
                            formdata.content=this.tableList.content
                            formdata.date= this.tableList.date
                            console.log(formdata)
                   const  params  =  new  URLSearchParams();
                   params.append('title',this.tableList.title);
                   params.append('content',this.tableList.content);
                   params.append('date',this.tableList.date);
                     let config = {
                             headers: {
                                 "Content-Type": 'application/x-www-form-urlencoded'
                                      }};
                     this.$message('提交中');
                     axios.post("https://bird.ioliu.cn/v2?url=http://39.105.151.255:8002/signin", params, config).then( (res) => {
                     console.log(res.data.res)
                     if(res.data.res==true){
                      this.$message({
                               message: '提交成功！',
                               type: 'success'
                             });
                     }else{
                                                                                     this.$message.error('提交失败！');
                                                                                     }
                             }).catch((error) =>{
                                          this.$message.error('网络错误！');

                                             });

                 },
                       onSubmit1(){
                                   let formdata = {
                                         "name":null,
                                         "type":null,
                                         "company":null,
                                         "date":null
                                             };
                                             formdata.name=this.tableList1.name
                                             formdata.type=this.tableList1.type
                                             formdata.company= this.tableList1.company
                                             formdata.date= this.tableList1.date

                                    const  params  =  new  URLSearchParams();
                                    params.append('name',this.tableList1.name);
                                    params.append('type',this.tableList1.type);
                                    params.append('company',this.tableList1.company);
                                    params.append('date',this.tableList1.date);

                                      let config = {
                                              headers: {
                                                  "Content-Type": 'application/x-www-form-urlencoded'
                                                       }};
                                      axios.post("https://bird.ioliu.cn/v2?url=http://39.105.151.255:8002/signin", params, config).then( (res) => {
                                      console.log(res.data.res)
                                      if(res.data.res==true){
                                     this.$message({
                                               message: '提交成功！',
                                               type: 'success'
                                             });
                                      }else{
                                                                                                                            this.$message.error('提交失败！');
                                                                                                                            }
                                              }).catch((error) =>{

                                               this.$message.error('网路错误！');
                                                              });

                                  }
                               }
                            }

</script>

<style scoped>
.selectFile{
    height: 140px
    }
.loginPage{
    margin:0 auto;
    height:800px;
    width:400px;
    text-align:center
    }
.upload{
  margin:0 auto;
      height:720px;
      width:900px;
      text-align:center
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>
