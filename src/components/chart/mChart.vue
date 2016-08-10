<template>
    <div v-el:echarts style="width: 100%;height: 400px;"></div>
</template>
<script>
    import echarts from 'echarts/lib/echarts';
    import 'echarts/lib/chart/line';
    import 'echarts/lib/chart/bar';
    import 'echarts/lib/chart/pie';
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
                    color: ['#41b883', '#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],
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