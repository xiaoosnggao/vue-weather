<template>

  <div class="weather-tab-content">
    <div class="forecast-info" v-for="item in hourly">
      <div class="forecast-hd"><img src="../assets/images/tq-1.png" alt=""></div>
      <div class="forecast-bd"><span>{{item.tmp}}°</span></div>
      <div class="forecast-ft">{{item.date.substring(11, 16)}}</div>
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
        'hourly'
      ])
    },
    watch: {}
  }
</script>

<style>

</style>
