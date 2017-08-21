<template>
  <div>
      <nav-header></nav-header>
      <nav-bread ><span>goods</span></nav-bread>
      <div class="accessory-result-page accessory-page">
        <div class="container">
          <div class="filter-nav">
            <span class="sortby">Sort by:</span>
            <a href="javascript:void(0)" class="default cur">Default</a>
            <a href="javascript:void(0)" class="price" @click="sortGoods">Price</a>
            <span class="icon icon-arrow-up" v-show="sortFlag"></span>
            <span class="icon icon-arrow-down" v-show="!sortFlag"></span>
            <a href="javascript:void(0)" class="filterby stopPop" @click="filterShow=(!filterShow)">Filter by</a>
          </div>

          <div class="accessory-result">

            <!-- filter -->
            <transition name="filter">
              <div class="filter stopPop" id="filter" v-show="filterShow">
                <dl class="filter-price">
                  <dt>Price:</dt>
                  <dd><a href="javascript:void(0)" :class="{'cur':nowIndex=='All'}" @click="nowIndex='All' ">All</a></dd>
                <dd v-for="(price,index) in PriceFilter">
                  <a href="javascript:void(0)" :class="{'cur':nowIndex==index}" @click="nowIndex=index">{{price.startPrice}} - {{price.endPrice}}</a>
                  </dd>
                </dl>
             </div>
            </transition>

              <!-- search result accessories list -->
            <div class="accessory-list-wrap ">
              <div class="accessory-list col-4">
                <ul class="clearfix">
                  <li v-for="item in goods">
                    <div class="pic">
                      <a href="#"><img v-lazy="'static/'+item.prodcutImg" alt=""></a>
                    </div>
                    <div class="main">
                      <div class="name">{{item.productName}}</div>
                      <div class="price">{{item.prodcutPrice}}</div>
                      <div class="btn-area">
                        <a href="javascript:;" class="btn btn--m" @click="addCart(item.productId)">加入购物车</a>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="load-more" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="20">
                  <img src="../assets/loading-svg/loading-bubbles.svg" alt="Loading icon" v-show="loading" />
                </div>
              </div>
            </div>  
          </div> 
        </div>
      </div>
      <nav-footer></nav-footer>
      <MyDialog :isShow="showDlDialog" @on-close="close('showDlDialog')">
        <div class="dl">
          <h3 class="dl-title">请先登录,否则无法加入到购物车中!</h3>
          <a class="dl-button" href="javascript:;" @click="close('showDlDialog')">关闭</a>
        </div>
      </MyDialog>
      <MyDialog :isShow="showCartDialog" @on-close="close('showCartDialog')">
        <div class="dl">
          <h3 class="dl-title">
          
          加入购物车成功!</h3>
          <a class="dl-button" href="javascript:;" @click="close('showCartDialog')">继续购物</a>
          <router-link class="dl-button link-button" href="javascript:;" to="/cart">查看购物车</router-link>
        </div>
      </MyDialog>
      <div class="mask" v-show="filterShow" @click="filterShow=!filterShow"></div>
  </div>
</template>

<script>
import logForm from '../components/logForm'
import axios from 'axios'
import dialog from '../components/dialog'
import navHeader from '../components/navHeader'
import navFooter from '../components/navFooter'
import navBread from '../components/navBread'
export default {
  data () {
    return {
    goods:[],
    busy: true,
    sortFlag:true,
    loading:false,
    page:1,
    pageSize:8,
    PriceFilter:[
      {
        startPrice:0,
        endPrice:100
      },
      {
        startPrice:100,
        endPrice:500
      },
      {
        startPrice:500,
        endPrice:1000
      },
      {
        startPrice:1000,
        endPrice:5000
      }
    ],
    nowIndex:'All',
    filterShow:true,
    showDlDialog:false,
    showCartDialog:false,
    userName:''
    }
  },
  components:{
    MyDialog:dialog,
    logForm,
    navHeader,
    navFooter,
    navBread
  },
  mounted(){
    this.getGoodslist();
  },
  methods:{
    getGoodslist(flag){
      var param = {
        page: this.page,
        pageSize:this.pageSize,
        sort:this.sortFlag?1:-1
      }
      axios.get('/goods/list',{
       params:param
      }).then((response)=>{
        console.log(response.data.result.list);
        response = response.data;
        if(response.status == 0){
        this.loading =true;
          if(flag){
            this.goods = this.goods.concat(response.result.list);

            if(response.result.count == 0){
              this.busy = true;
              this.loading =false;
            }else{
              this.busy = false;
            }
          }else{
            this.goods = response.result.list;
            this.busy = false;
          }
          
        }else{
        this.goods = [];
        }
      })
    },
    sortGoods(){
      this.sortFlag = !this.sortFlag;
      console.log(this.sortFlag);
      this.getGoodslist();
    },
    loadMore: function() {
      
      this.busy = true;
      this.loadding = true;
      setTimeout(() => {
        this.page++;
        this.getGoodslist(true);
      }, 500);
    },
    addCart(productId){
      axios.post("/goods/addCart",{
        productId:productId
      }).then((res)=>{
        if(res.data.status==0){
          this.showCartDialog = true;
        }else{
          this.showDlDialog = true;
        }
      })
    },
    close(attr) {
      this[attr] = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.filter-enter-active,.filter-leave-active{
  transition: all .2s linear;
  transform: translate3d(0,0,0);
}
      
.filter-enter,.filter-leave-active{
  transition: all .2s linear;
  transform: translate3d(100%,0,0);
}

.load-more{
  height:100px;
  line-height:100px;
  text-align:center;
}

.dl{
  width:100%;
  text-align:center;
}
.dl-title{
  margin:40px auto;
}
.dl-button{
  display:inline-block;
  width:40%;
  height:42px;
  line-height:42px;
  margin:0 4% 20px;
  border: 1px solid #d14343;
  box-shadow: 0 0 3px #d14343;
  color:#d14343;
  cursor:pointer;
}
.dl-button:hover{
  background-color:#ffdddd;
}

.link-button{
  color:#fff;
  background:#d14343;
}
.link-button:hover{
  background:#e15454;
}
      
</style>
