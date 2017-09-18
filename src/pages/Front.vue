<template>
  <div class="front">
    <div class="section-top">
      <div class="section-bg" v-parallax>
        <div class="bg-box" data-depth="0.2">
          <div class="mask"></div>
          <div class="bg-content"></div>
        </div>
      </div>
      <div class="section-content">
        <div class="container center-align">
          <div class="slogan">
            <div class="content">
              <h1><span v-iType></span></h1>
            </div>
          </div>
          <div class="contact-box">
            <br>
            <br>
            <a class="btn btn-large red lighten-1">洽谈合作</a>
          </div>
        </div>
      </div>
    </div>
    <div class="section-intro">
      <div class="container center-align">
        <div class="title">
          <h2>优燃+不止是代码工厂</h2>
          <p>不同于传统的客户以上帝视角给出需求开发方以工厂模式提供产品</p>
          <p>我们提供一整套解决方案，以解决客户痛点为乐趣</p>
        </div>
        <div class="row">
          <div class="col s4">
            <div class="icon-box">
              <span class="ran-aim"></span>
            </div>
            <p>从客户角度出发 深度了解客户需求 探讨应用场景</p>
          </div>
          <div class="col s4">
            <div class="icon-box">
              <span class="ran-microsoftword"></span>
            </div>
            <p>从需求出发 剖析客户痛点</p>
          </div>
          <div class="col s4">
            <div class="icon-box">
              <span class="ran-redux"></span>
            </div>
            <p>针对客户痛点 选用相对的技术和解决方案</p>
          </div>
        </div>
      </div>
    </div>
    <div class="section-technology">
      <div class="container center-align">
        <div class="title">
          <h2>我们的技术栈</h2>
          <p>在保证服务质量的同时，探索新技术</p>
          <div class="center-align">各种牛逼的技术 我编不下去了</div>
        </div>
        <div class="row">
          <div class="col s3">
            <span class="ran-sass"></span>
            <p>sass</p>
          </div>
          <div class="col s3">
            <span class="ran-react"></span>
            <p>react</p>
          </div>
          <div class="col s3">
            <span class="ran-vuejs"></span>
            <p>vuejs</p>
          </div>
          <div class="col s3">
            <span class="ran-angular"></span>
            <p>angular</p>
          </div>
          <div class="col s3">
            <span class="ran-nodejs"></span>
            <p>nodejs</p>
          </div>
          <div class="col s3">
            <span class="ran-drupal"></span>
            <p>drupal</p>
          </div>
          <div class="col s3">
            <span class="ran-wordpress"></span>
            <p>wordpress</p>
          </div>
          <div class="col s3">
            <span class="ran-laravel"></span>
            <p>laravel</p>
          </div>
          <div class="col s3">
            <span class="ran-html5"></span>
            <p>html5</p>
          </div>
          <div class="col s3">
            <span class="ran-git"></span>
            <p>git</p>
          </div>
          <div class="col s3">
            <span class="ran-gulp"></span>
            <p>gulp</p>
          </div>
          <div class="col s3">
            <span class="ran-javascript"></span>
            <p>javascript</p>
          </div>
        </div>
      </div>
    </div>
    <div class="section-intro">
      <div class="container center-align">
        <div class="title">
          <h2>我们的愿景</h2>
          <p>希望有一天赚大钱</p>
          <p>继续吹</p>
        </div>
        <div class="row">
          <div class="col s4">
            <div class="icon-box">
              <span class="ran-aim"></span>
            </div>
            <p>从客户角度出发 深度了解客户需求 探讨应用场景</p>
          </div>
          <div class="col s4">
            <div class="icon-box">
              <span class="ran-microsoftword"></span>
            </div>
            <p>从需求出发 剖析客户痛点</p>
          </div>
          <div class="col s4">
            <div class="icon-box">
              <span class="ran-redux"></span>
            </div>
            <p>针对客户痛点 选用相对的技术和解决方案</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Parallax from 'parallax-js';
  import {init,destroy} from 'ityped';

  export default {
    name: 'Front',
    data() {
      return {
        msg: '首页'
      }
    },
    directives: {
      parallax:{
        inserted(el){
          var parallaxInstance = new Parallax(el, {
            relativeInput: true,
          });
        }
      },
      iType:{
        inserted(el){
          init(el,{
            strings: [
              '一个很潮的团队，做着一些很潮的事情',
              '一个想赚大钱的团队',
              '一个词穷到只会说牛逼，来夸奖自己的团队',
            ],
            backDelay: 2000,
            loop: true,
          })
        }
      },
    }
  }
</script>
