<template>
  <div class="weather-tab-content" v-if="now">
    <div class="basic-info">
      <div class="basic-hd">
        <h4 class="basic-title">体感温度</h4>
        <p>单位：摄氏度°</p>
      </div>
      <div class="basic-num">{{now.fl}}°</div>
    </div>
    <div class="basic-info">
      <div class="basic-hd">
        <h4 class="basic-title">相对湿度</h4>
        <p>单位：%</p>
      </div>
      <div class="basic-num">{{now.hum}}%</div>
    </div>
    <div class="basic-info">
      <div class="basic-hd">
        <h4 class="basic-title">降水量</h4>
        <p>单位：mm</p>
      </div>
      <div class="basic-num">{{now.pcpn}}mm</div>
    </div>
    <div class="basic-info">
      <div class="basic-hd">
        <h4 class="basic-title">气压</h4>
        <p>单位：Pa</p>
      </div>
      <div class="basic-num">{{now.pres}}Pa</div>
    </div>
    <div class="basic-info">
      <div class="basic-hd">
        <h4 class="basic-title">温度</h4>
        <p>单位：摄氏度°</p>
      </div>
      <div class="basic-num">{{now.tmp}}°</div>
    </div>
    <div class="basic-info">
      <div class="basic-hd">
        <h4 class="basic-title">能见度</h4>
        <p>单位：km</p>
      </div>
      <div class="basic-num">{{now.vis}}km</div>
    </div>
    <div class="basic-info" v-if="now.wind">
      <div class="basic-hd">
        <h4 class="basic-title">风向</h4>
      </div>
      <div class="basic-num">{{now.wind.deg}}°/{{now.wind.dir}}</div>
    </div>
    <div class="basic-info" v-if="now.wind">
      <div class="basic-hd">
        <h4 class="basic-title">风力</h4>
      </div>
      <div class="basic-num">{{now.wind.sc}}级</div>
    </div>
    <div class="basic-info" v-if="now.wind">
      <div class="basic-hd">
        <h4 class="basic-title">风速</h4>
      </div>
      <div class="basic-num">{{now.wind.spd}}kmph</div>
    </div>
  </div>

</template>
<script type="text/ecmascript-6">
  import {mapState} from 'vuex'

  export default {
    data () {
      return {}
    },
    components: {},
    methods: {},
    mounted () {
    },
    computed: {
      ...mapState([
        'now'
      ])
    },
    watch: {}
  }
</script>

<style>

</style>
