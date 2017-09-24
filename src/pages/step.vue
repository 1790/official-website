<template>
  <div class="step page-common">
    <div class="page-top-common">
      <div class="container">
        <div class="content">
          <div class="title center-align">优燃历程</div>
        </div>
      </div>
    </div>
    <div class="container">
      <br>
      <div class="sub-title">当岁月都已失去，偶然与过往相遇，我们还能哼唱出年少的旋律。<br>
        将那些只言片语铭记在时光的轨迹里。
      </div>
      <div class="step-content">
        <ul class="timeline">
          <li v-for="(item,index) in stepData">
            <div :class="index%2==1?'direction-r':'direction-l'">
              <div class="flag-wrapper">
                <span class="flag">{{item.title}}</span>
                <span class="time-wrapper"><span class="time">{{item.time}}</span></span>
              </div>
              <div class="desc">{{item.content}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'step',
    data() {
      return {
        stepData: {}
      }
    },
    created() {
      this.$http.get('/static/data/step.json').then(response => {
        // get body data
        this.stepData = response.body.stepData;
      }, response => {
        // error callback
      });
    }
  }
</script>