<template>
  <div class="dialog-wrap">
    <div  @click="close" class="dialog-cover" v-if="isShow"></div>
    <transition name="drop">
      <div class="dialog-content" v-if="isShow">
        <p @click="close" class="dialog-close">X</p>
        <slot>empty</slot>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    props: {
      isShow: Boolean,
      default: false
    },
    methods: {
      close() {
        this.$emit('on-close')
      }
    }
  };
</script>

<style>
  .drop-enter-active {
  transition: all .5s ease;
}
.drop-leave-active {
  transition: all .3s ease;
}
.drop-enter {
  transform: translateY(-500px);
}
.drop-leave-active {
  transform: translateY(-500px);
}
  
  .dialog-cover { 
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5)
  }
  .dialog-content {
    position: fixed;
    z-index: 200;
    width: 40%;
    max-height: 50%;
    padding: 2%;
    line-height: 1.6;
    top: 20%;
    left: 50%;
    margin-left: -20%;
    border-radius: 2px solid #464068;
    background: #fff;
  }
  

  .dialog-close {
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
 

  .dialog-close:hover:before {
    -webkit-transform: rotate(-135deg);
    -ms-transform: rotate(-135deg);
    transform: rotate(-135deg);
}
.dialog-close:hover:before,.dialog-close:hover:after {
    -webkit-transition: -webkit-transform .3s ease-out;
    transition: -webkit-transform .3s ease-out;
    transition: transform .3s ease-out;
    transition: transform .3s ease-out,-webkit-transform .3s ease-out;
}
.dialog-close:before {
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
}
.dialog-close:before,.dialog-close:after {
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
.dialog-close:hover:after {
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
}
.dialog-close:after {
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}
</style>
