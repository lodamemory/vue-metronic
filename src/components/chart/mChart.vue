<template>
    <div v-el:echarts style="width: 100%;height: 400px;"></div>
</template>
<script>
    import echarts from 'echarts/lib/echarts';
    import 'echarts/lib/chart/line';
    import 'echarts/lib/chart/bar';
    import 'echarts/lib/component/tooltip';
    import 'echarts/lib/component/legend';
    import 'echarts/lib/component/title';
    export default {
        props: {
            option: {
                type: Object
            }
        },
        ready () {
            this.init();
        },
        watch: {
            'option': function (v, o) {
                this.init();
            }
        },
        methods: {
            init () {
                var myChart = echarts.init(this.$els.echarts);
                // 绘制图表
                window.console.log(this.option);
                myChart.setOption({
                    title: this.option.title || {},
                    tooltip: this.option.tooltip || {},
                    color: ['rgb(103, 183, 220)', 'rgb(183, 224, 33)', ''],
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    legend: this.option.legend || {},
                    xAxis: this.option.xAxis || [],
                    yAxis: this.option.yAxis || [],
                    series: this.option.series || []
                });
            }
        }
    };
</script>