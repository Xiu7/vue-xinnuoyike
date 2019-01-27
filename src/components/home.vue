<template>
  <div>
   <div class="block">
       <el-carousel height="550px">
         <el-carousel-item v-for="item in dataImg" :key="item.index">
           <img :src="item.src">
           <p >{{item.txt}}</p>
         </el-carousel-item>
       </el-carousel>
     </div>
<div class="content">
<h1>公司简介</h1>
<p>北京信诺亿科环境技术有限公司成立于2012年，主要从事城市园林绿化及工程勘察设计的水土保持技术服务、技术咨询和技术推广，是一家管理体制健全、运行模式先进、专业性突出的技术咨询公司。公司拥有一支德才兼备、技术精湛的专业技术队伍，从业人员近20人，其中副教授1人，研究生5人，本科生13人，大专生2人；另拥有10多人的技术专家库，城市轨道交通、石油、化工、铁路、公路、房建、市政、园林等各类水土保持工程咨询专家齐全，能提供全专业、全范围的水土保持咨询服务。
　　<p/><p>公司涉足众多工程领域，尤其在铁路、公路、房建、市政等专业的水土保持咨询能力和专业水平卓有成效，是目前北京市水土保持咨询专业较强、影响力较大的咨询公司。
以质量求生存，以质量求发展，运用自身的专业优势为客户提供优质的服务，是公司永远追求的目标；合作共赢，谋求发展是公司的立业精神；诚实、信用、智慧、专业是公司的服务理念；公开、公平、公正、诚实、信用是公司的服务原则；公司在实践中建立了科学化、系统化、规范化的内部管理体系，为公司的经营发展起到了积极的促进作用，既提高了专业素质、改进经营管理水平、增强质量保证能力、提升市场竞争力、深化内部核心凝聚力，同时又保障公司业绩的持续发展。
　<p/><p>北京信诺亿科环境技术有限公司凭借多年的专业基础和科学完善的企业管理经验，已逐步发展成为业务范围广泛、服务内容全面、专业经验丰富、技术资源雄厚、管理手段先进、人员实力强大、企业信誉可靠的北京市知名的工程咨询技术顾问公司。</p>

</div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
    dataImg: [{ index:'1',
    						src: require('../../static/images/a1.jpg'),
    						txt: '北京信诺亿科环境技术有限公司',

    					},
    					{index:'2',
    						src: require('../../static/images/a2.jpg'),
    						txt: '北京信诺亿科环境技术有限公司',

    					},{ index:'3',
                  src: require('../../static/images/a3.jpg'),
                  txt: '北京信诺亿科环境技术有限公司',

                }],

    }
  },
  mounted () {


  }

}
</script>


<style scoped>
.content{
    margin:0 auto; width:1000px;padding-bottom:50px
        }
   .content p{ text-align:left;text-indent:2em;
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
