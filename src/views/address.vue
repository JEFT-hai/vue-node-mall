<template>
  <div class="address">
      <nav-header></nav-header>
      <nav-bread ><span>address</span></nav-bread>
      <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <symbol id="icon-add" viewBox="0 0 32 32">
            <title>add2</title>
            <path class="path1" d="M15 17h-13.664c-0.554 0-1.002-0.446-1.002-1 0-0.552 0.452-1 1.002-1h13.664v-13.664c0-0.554 0.446-1.002 1-1.002 0.552 0 1 0.452 1 1.002v13.664h13.664c0.554 0 1.002 0.446 1.002 1 0 0.552-0.452 1-1.002 1h-13.664v13.664c0 0.554-0.446 1.002-1 1.002-0.552 0-1-0.452-1-1.002v-13.664z"></path>
          </symbol>
          <symbol id="icon-ok" viewBox="0 0 39 32">
            <title>ok</title>
            <path class="path1" d="M14.084 20.656l-7.845-9.282c-1.288-1.482-3.534-1.639-5.016-0.351s-1.639 3.534-0.351 5.016l10.697 12.306c1.451 1.669 4.057 1.623 5.448-0.096l18.168-22.456c1.235-1.527 0.999-3.765-0.528-5.001s-3.765-0.999-5.001 0.528l-15.573 19.337z"></path>
          </symbol>
          <symbol id="icon-edit" viewBox="0 0 32 32">
            <title>edit</title>
            <path class="path1" d="M25.599 11.292l-4.892-4.892 3.825-3.825 4.892 4.892-3.825 3.825zM4.732 23.308l3.959 3.959-5.939 1.98 1.98-5.939zM10.666 26.225l-4.892-4.892 13.425-13.425 4.892 4.892-13.425 13.425zM31.687 6.713l-6.4-6.4c-0.417-0.417-1.091-0.417-1.508 0l-20.267 20.267c-0.114 0.115-0.191 0.25-0.242 0.393-0.003 0.009-0.012 0.015-0.015 0.025l-3.2 9.6c-0.128 0.383-0.029 0.806 0.257 1.091 0.203 0.204 0.476 0.313 0.754 0.313 0.112 0 0.227-0.017 0.337-0.054l9.6-3.2c0.011-0.003 0.017-0.013 0.027-0.016 0.142-0.052 0.276-0.128 0.39-0.242l20.267-20.267c0.417-0.416 0.417-1.091 0-1.508v0z"></path>
          </symbol>
          <symbol id="icon-del" viewBox="0 0 26 32">
            <title>delete</title>
            <path class="path1" d="M17.723 28c0.543 0 0.984-0.448 0.984-1v-12c0-0.552-0.441-1-0.984-1s-0.985 0.448-0.985 1v12c0 0.552 0.441 1 0.985 1v0zM7.877 28c0.543 0 0.984-0.448 0.984-1v-12c0-0.552-0.441-1-0.984-1s-0.985 0.448-0.985 1v12c0 0.552 0.441 1 0.985 1v0zM12.8 28c0.543 0 0.985-0.448 0.985-1v-12c0-0.552-0.441-1-0.985-1s-0.984 0.448-0.984 1v12c0 0.552 0.441 1 0.984 1v0zM23.631 4h-5.908v-2c0-1.104-0.882-2-1.969-2h-5.908c-1.087 0-1.969 0.896-1.969 2v2h-5.908c-1.087 0-1.969 0.896-1.969 2v2c0 1.104 0.882 2 1.969 2v18c0 2.208 1.765 4 3.939 4h13.784c2.174 0 3.938-1.792 3.938-4v-18c1.087 0 1.969-0.896 1.969-2v-2c0-1.104-0.882-2-1.969-2v0zM9.846 3c0-0.552 0.441-1 0.984-1h3.938c0.544 0 0.985 0.448 0.985 1v1h-5.908v-1zM21.662 28c0 1.104-0.882 2-1.969 2h-13.784c-1.087 0-1.97-0.896-1.97-2v-18h17.723v18zM22.646 8h-19.692c-0.543 0-0.985-0.448-0.985-1s0.441-1 0.985-1h19.692c0.543 0 0.984 0.448 0.984 1s-0.441 1-0.984 1v0z"></path>
          </symbol>
          <symbol id="icon-clock" viewBox="0 0 32 32">
            <title>clock</title>
            <path class="path1" d="M29.333 16c0-7.364-5.97-13.333-13.333-13.333s-13.333 5.97-13.333 13.333c0 7.364 5.97 13.333 13.333 13.333s13.333-5.97 13.333-13.333v0 0 0 0 0 0zM0 16c0-8.837 7.163-16 16-16s16 7.163 16 16c0 8.837-7.163 16-16 16s-16-7.163-16-16zM14.667 14.667v1.333h2.667v-10.667h-2.667v9.333zM24 18.667h1.333v-2.667h-10.667v2.667h9.333z"></path>
          </symbol>
        </defs>
      </svg>

      <div class="container">
        <div class="checkout-addr">
          <!-- process step -->
          <div class="check-step">
            <ul>
              <li class="cur">地址确认</li>
              <li>查看订单</li>
              <li>支付</li>
              <li>订单确认</li>
            </ul>
          </div>

          <!-- address list -->
          <div class="checkout-title">
            <span>配送地址</span>
          </div>
          <div class="addr-list-wrap">
            <div class="addr-list">
              <ul>
                <li v-for="(item, index) in filterAddress" :class="{'check': index == currentIndex}" @click="currentIndex=index;selectedAddressId=item.addressId">
                  <dl>
                    <dt>{{item.userName}}</dt>
                    <dd class="address">{{item.streetName}}</dd>
                    <dd class="tel">{{item.tel}}</dd>
                  </dl>
                  <div class="addr-opration addr-edit">
                    <a href="javascript:;" class="addr-edit-btn">
                      <svg class="icon icon-edit"><use xlink:href="#icon-edit"></use></svg>
                    </a>
                  </div>
                  <div class="addr-opration addr-del">
                    <a href="javascript:;" class="addr-del-btn" @click="delAddressConfirm(item.addressId)">
                      <svg class="icon icon-del"><use xlink:href="#icon-del"></use></svg>
                    </a>
                  </div>
                  <div class="addr-opration addr-set-default" v-if="!item.isDefault">
                    <a href="javascript:;" class="addr-set-default-btn" @click="setDefault(item.addressId)"><i>设为默认</i></a>
                  </div>
                  <div class="addr-opration addr-default" v-if="item.isDefault">默认地址</div>
                </li>

                <li class="addr-new">
                  <div class="add-new-inner">
                    <i class="icon-add">
                      <svg class="icon icon-add"><use xlink:href="#icon-add"></use></svg>
                    </i>
                    <p >添加新地址</p>
                  </div>
                </li>
              </ul>
            </div>

            <div class="shipping-addr-more" @click="down=!down">
              <a class="addr-more-btn up-down-btn" href="javascript:" @click="moreORless()">
                more
                <i :class="down?'i-up-down':'i-down-up'" >
                  <i class="i-up-down-l"></i>
                  <i class="i-up-down-r"></i>
                </i>
              </a>
            </div>
          </div>

          <!-- shipping method-->
          <div class="checkout-title">
            <span>配送方式</span>
          </div>
          <div class="shipping-method-wrap">
            <div class="shipping-method">
              <ul>
                <li :class="{'check': shippingMethod == 1}" @click="shippingMethod = 1">
                  <div class="name">标准配送</div>
                  <div class="price">Free</div>
                </li>
                <li :class="{'check': shippingMethod == 2}" @click="shippingMethod = 2">
                  <div class="name">高级配送</div>
                  <div class="price">180</div>
                </li>
              </ul>
              <div class="next-btn-wrap">
                <router-link class="btn-m btn--redd"   style="width: 200px" :to="{path:'orderConfirm',query:{'addressId':selectedAddressId }}">下一步</router-link>
              </div>
            </div>
          </div>


        </div>
      </div>
      <model :mdShow="delFlag" @on-close="close('delFlag')" @on-del="delAddress()">
        <p slot="message">您确定删除该地址？</p>
        <span slot="yes">确认</span>
        <span slot="no">取消</span>
      </model>
      <nav-footer></nav-footer>
    </div>
</template>

<script>

import axios from 'axios'
import dialog from './../components/dialog'
import navHeader from './../components/navHeader'
import navFooter from './../components/navFooter'
import navBread from './../components/navBread'
import model from './../components/model'

export default {
  data(){
    return {
      addressList: [],
      limitNum:3,
      shippingMethod: 1,
      down:true,
      currentIndex:Number,
      delFlag:'',
      addressId:'',
      selectedAddressId:''
    }
  },
  components:{
        MyDialog:dialog,
        navHeader,
        navFooter,
        navBread,
        model
  },
  mounted(){
    this.init();
  },
  methods: {
    close(attr){
      this[attr] = false;
    },
    init(){
      axios.get('/users/addressList').then((response)=>{
        var res = response.data;
        this.addressList = res.result;
        this.addressList.forEach((item,index)=>{
           if(item.isDefault){
             this.currentIndex = index;
             this.selectedAddressId = item.addressId;
           }
        })
      })
    },
    delProduct(index){
      this.addressList.splice(index,1)
    },
    setDefault(addressId){
        axios.post('/users/setDefault',{addressId:addressId}).then((response)=>{
          var res = response.data;
          if(res.status == '0'){
            this.delFlag = false;
            this.init();
          }
        })
    },
    moreORless(){
      if(this.limitNum==this.addressList.length){
        this.limitNum = 3;
      }else{
        this.limitNum = this.addressList.length;
      }
    },
    delAddressConfirm:function ( item ) {
      this.delFlag = true;
      this.addressId = item;
    },
    delAddress(){
      axios.post("/users/delAddress",{
         addressId:this.addressId
      }).then((response)=>{
         var res = response.data;
         if(res.status=='0'){
           this.delFlag = false;
           this.init();
         }
      })
    }
  },
  computed: {
    filterAddress(){
      return this.addressList.slice(0,this.limitNum)
    }
  }
}
</script>

<style scoped>
.container{
	width: 1280px;
	margin: 0 auto;
}
@media only screen and (max-width: 1280px) {
	width: 100%;
}
.check-step{
	width: 100%;
}
.check-step ul{
	display: flex;
	margin: 25px 0 50px 0;
}
.check-step li.cur {
	border-color: #EE7A23;
    color: #EE7A23;
}
.check-step li.cur:after {
    background: #EE7A23;
}
.check-step ul li {
    position: relative;
    text-align:center;
	flex: 1;
	width: 25%;
	font-size: 20px;
	line-height: 1.5em;
	padding: 0 1em 1em;
	border-bottom: 2px solid #ccc;
}
.check-step li::after{
    position: absolute;
    content: '';
    bottom: -7px;
    left: 50%;
    margin-left: -7px;
	width: 14px;
	height: 14px;
	border-radius: 50%;
	background: #ccc;
}
.checkout-title{
    position: relative;
	margin: 0 0  41px 0;
	text-align: center;
}
.checkout-title span{
    position: relative;
    text-align: center;
	font-size: 20px;
	line-height: 20px;
	font-weight: bold;
	padding: 0 20px;
	z-index: 20;
	background:#f5f7fc;
}
.checkout-title:after{
	position: absolute;
	top: 50%;
	left: 0;
	content: '';
	width: 100%;
	height: 1px;
	background: #ccc;
	z-index:0;
}

.addr-list-wrap{
	width: 100%;
	margin-bottom: 50px;
}
.addr-list {
	width: 100%;
	overflow: hidden;
	margin-bottom: 30px;
}
.addr-list ul {
	width: 100%;
}
.addr-list ul li {
    position: relative;
    float: left;
	width: 23.5%;
	display: inline-block;
	margin: 10px 2% 10px 0;
	text-align: left;
	padding: 20px 20px 40px;
	box-sizing: border-box;
	border: 2px solid #e9e9e9;
	cursor: pointer;
  background:#fff;
}
.addr-list ul li:hover {
    border-color:#ee7a23;
}
.addr-list ul li.check {
	border-color:#ee7a23;
}
.addr-list ul li:nth-child(4n) {
	margin-right: 0;
}
.addr-list ul li dl dt {
	font-size: 18px;
	font-weight: 100;
	color:#666;
	margin-bottom: 10px;
}
.addr-list ul li dl dd {
    margin-bottom: 6px;
    line-height: 20px;
}
.addr-list ul li .address {
    font-size: 14px;
	height: 40px;
	overflow: hidden;
}
.addr-list ul li .tel {
	font-size: 14px;
}
.addr-list li .addr-opration {
    position: absolute;
    display: none;
}
.addr-list li .addr-opration.addr-del {
    position: absolute;
    display: block;
}
.addr-list li.check .addr-opration {
    display: block;
}
.addr-list li .addr-default {
    display: block;
}
.addr-list li:hover .addr-set-default {
    display: block;
}
.addr-list ul li .addr-edit{
    top: 20px;
    right: 20px;
    width: 20px;
    height: 20px;
}
.addr-list ul li .addr-del{
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 20px;
    height: 20px;
}
.addr-list ul li .addr-default,.addr-set-default{
	bottom: 20px;
    left: 20px;
    font-size: 14px;
    color:#ee7a23;
}
.addr-list ul li .addr-set-default i{
	font-style: normal;
	color:#ee7a23;
}
.addr-list li .addr-opration .icon {
    width: 100%;
    height: 100%;
}
.addr-list li .addr-opration .icon:hover{
	fill:#ee7a23;
}
.addr-list li.addr-new{
	text-align: center;
}
.addr-list li.addr-new .add-new-inner {
    padding-top: 20px;
}
.addr-list li.addr-new .add-new-inner p{
    padding-top: 12px;
}
.addr-list li.addr-new .add-new-inner .icon-add {
    display: inline-block;
    width: 50px;
    height: 50px;
}
.shipping-method-wrap {
	width: 100%;
	margin-bottom: 40px;
}
.shipping-method {
	width: 100%;
	text-align: center;
}
.shipping-method li{
    display: inline-block;
	width: 300px;
	padding: 20px;
	margin: 5px;
	border: 2px solid #e9e9e9;
	box-sizing: border-box;
	color: #999;
  background:#fff;
}
.shipping-method li>div {
	line-height: 20px;
}
.shipping-method li .name{
	margin-bottom: 8px;
}
.shipping-method li .price{
	font-weight: 600;
}
.shipping-method li.check{
	border-color: #ee7a23;
	color: #000;
}
.shipping-method li:hover{
	border-color: #ee7a23;
}
.shipping-addr-more{
  text-align:center;
}
.i-up-down,.i-down-up {
    position: relative;
    display: inline-block;
    width: 14px;
    height: 6px;
    vertical-align: middle;
    z-index: 2;
    -ms-transform: translateY(2px);
    transform: translateY(2px);
    transition: transform .3s ease-out;
}
.i-up-down i,.i-down-up i {
    position: absolute;
    /* top: 0; */
    width: 8px;
    height: 1px;
    background: #EE7A23;
}
.i-up-down .i-up-down-l {
    left: 0;
    -ms-transform: rotate(40deg);
    transform: rotate(40deg);
    /* transition: transform .3s ease-out; */
}
/* .i-up-down:hover .i-up-down-l{
	transform: rotate(-40deg);
	transition: all .3s ease-out;
}
*/
.i-up-down .i-up-down-r {
    right: 0;
    -ms-transform: rotate(-40deg);
    transform: rotate(-40deg);
    /* transition: transform .3s ease-out; */
}
/* .i-up-down:hover .i-up-down-r{
	transform: rotate(40deg);
	transition: all .3s ease-out;
}
*/


.i-down-up .i-up-down-l {
    left: 0;
    -ms-transform: rotate(-40deg);
    transform: rotate(-40deg);
    /* transition: transform .3s ease-out; */
}
/* .i-down-up:hover .i-up-down-l{
  transform: rotate(40deg);
  transition: all .3s ease-out;
}
*/
.i-down-up .i-up-down-r {
    right: 0;
    -ms-transform: rotate(40deg);
    transform: rotate(40deg);
    /* transition: transform .3s ease-out; */
}
/* .i-down-up:hover .i-up-down-r{
  transform: rotate(-40deg);
  transition: all .3s ease-out;
}
*/
.up-down-btn {
    color: #EE7A23;
}

.next-btn-wrap{
  text-align:right;
  margin:60px 0 80px;
  overflow:hidden;
}

.btn-m {
    display: inline-block;
    height: 42px;
    line-height: 42px;
    padding: 0 1.2em;
    text-align: center;
    font-size: 14px;
    font-family: "moderat",sans-serif;
    -webkit-transition: all .3s ease-out;
    transition: all .3s ease-out;
    border: 1px solid #d1434a;
    color: #d1434a;
    text-transform: uppercase;
    letter-spacing: .25em;
    white-space: nowrap;
}
.btn--red,.btn--redd {
    background-color: #d1434a;
    border-color: #d1434a;
    font-weight:700;
    color: #fff;
    transition:opacity 0.35s ;
}
.btn--redd:hover {
    opacity:0.75;
    color:#fff;
}
</style>