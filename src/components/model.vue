<template>
<div v-show="mdShow">
  <transition name="fade">
        <div class="md-modal modal-msg md-modal-transition" id="showModal" >
            <div class="md-modal-inner">
                <div class="md-top">
                    <button class="md-close" @click="close"></button>
                </div>
                <div class="md-content">
                    <div class="confirm-tips">
                        <slot name="message"></slot>
                    </div>
                    <div class="btn-wrap col-2">
                        <button class="btn btn--m"  @click="del">
                          <slot name="yes"></slot>
                        </button>
                        <button class="btn btn--m btn--red"  @click="close">
                          <slot name="no"></slot>
                        </button>
                    </div>
                </div>
            </div>
        </div>
  </transition>
  <div class="md-overlay" v-if="mdShow" @click="close"></div>
</div>
</template>

<script>
export default {
    props:{
      mdShow:''
    },
    methods: {
      close(){
        this.$emit('on-close');
      },
      del(){
        this.$emit('on-del');
      }
    }
}
</script>

<style>
.btn {
    display: inline-block;
    height: 54px;
    line-height: 54px;
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
.btn--m {
    height: 45px;
    line-height: 45px;
}
.btn--red{
    background-color: #d1434a;
    border-color: #d1434a;
    color: #fff;
}

.btn:hover, .btn[href]:hover {
    background-color: #d1434a;
    color: #fff;
    -webkit-transition: all .3s ease-out;
    transition: all .3s ease-out;
}
.btn--red:hover {
    background-color: #fff;
    color: #d1434a;
}
.md-modal {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 535px;
    height: auto;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    z-index: 201;
    background: #fff;
}
.fade-enter-active,.fade-leave-active {
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    opacity: 1;
    -webkit-transition: all .5s ease-out;
    transition: all .5s ease-out;
}
.fade-enter,.fade-leave-active {
    background: #fff;
    -webkit-transform: translate(-50%,20%);
    -ms-transform: translate(-50%,20%);
    transform: translate(-50%,20%);
    opacity: 0;
    -webkit-transition: all .3s ease-out;
    transition: all .3s ease-out;
}
.md-modal .md-modal-inner {
    padding: 60px 50px;
}
.md-modal .confirm-tips {
    min-height: 5.65em;
}
.md-modal .confirm-tips, .md-modal .alert-tips {
    font-size: 14px;
    font-weight: 200;
    text-align: center;
}
.md-modal .btn-wrap {
    margin-top: 20px;
    text-align: center;
    font-size: 0;
}
.md-modal .btn-wrap .btn {
    width: 45%;
    min-width: 80px;
    margin: 0 2.5%;
}
.md-modal .md-close {
    position: absolute;
    top: 7px;
    right: 7px;
    width: 34px;
    height: 34px;
    -webkit-transform: scale(0.5);
    -ms-transform: scale(0.5);
    transform: scale(0.5);
    text-indent: -8000px;
}
.md-modal .md-close:hover:before {
    -webkit-transform: rotate(-135deg);
    -ms-transform: rotate(-135deg);
    transform: rotate(-135deg);
}
.md-modal .md-close:hover:before, .md-modal .md-close:hover:after {
    -webkit-transition: -webkit-transform .3s ease-out;
    transition: -webkit-transform .3s ease-out;
    transition: transform .3s ease-out;
    transition: transform .3s ease-out,-webkit-transform .3s ease-out;
}
.md-modal .md-close:before {
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
}
.md-modal .md-close:before, .md-modal .md-close:after {
    position: absolute;
    top: 16px;
    left: -4px;
    content: "";
    width: 44px;
    height: 3px;
    background: #d7d8dd;
    -webkit-transition: -webkit-transform .5s ease-out;
    transition: -webkit-transform .5s ease-out;
    transition: transform .5s ease-out;
    transition: transform .5s ease-out,-webkit-transform .5s ease-out;
}
.md-modal .md-close:hover:after {
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
}
.md-modal .md-close:after {
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}
.md-show {
    visibility: visible;
}

.md-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 200;
}
</style>
