<template>
    <m-page-header :title="'Example Modal Page'" :small-title="'Example Modal Page'"></m-page-header>
    <div class="row">
        <div class="col-md-12">
            <m-portlet :title="'Modal'" :color-type="5">
                <m-chart :option="chartOption"></m-chart>
            </m-portlet>
        </div>
    </div>
</template>
<script>
    import mPageHeader from '../common/mPageHeader';
    import mPortlet from '../components/portlet/mPortlet';
    import mButton from '../components/button/mButton';
    import mChart from '../components/chart/mChart';
    export default {
        components: { mPageHeader, mPortlet, mButton, mChart },
        data () {
            return {
                'chartOption': {}
            };
        },
        ready () {
            // this.chartOption = {
            //     title: {
            //         text: '某站点用户访问来源',
            //         subtext: '纯属虚构',
            //         x: 'center'
            //     },
            //     tooltip: {
            //         trigger: 'item',
            //         formatter: '{a} <br/>{b} : {c} ({d}%)'
            //     },
            //     legend: {
            //         orient: 'vertical',
            //         left: 'left',
            //         data: ['住院12', '住院6', '住院9', '住院11']
            //     },
            //     series: [
            //         {
            //             name: '访问来源',
            //             type: 'pie',
            //             radius: '55%',
            //             center: ['50%', '60%'],
            //             data: [{value: 3490, name: '住院12'}, {value: 3490, name: '住院6'}, {value: 3490, name: '住院9'}, {value: 3490, name: '住院11'}],
            //             itemStyle: {
            //                 emphasis: {
            //                     shadowBlur: 10,
            //                     shadowOffsetX: 0,
            //                     shadowColor: 'rgba(0, 0, 0, 0.5)'
            //                 }
            //             }
            //         }
            //     ]
            // };
            // this.chartOption = {
            //     title: { text: 'hahahah' },
            //     tooltip: {
            //         trigger: 'axis',
            //         axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            //             type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            //         }
            //     },
            //     legend: {
            //         data: ['利润', '支出', '收入']
            //     },
            //     xAxis: [
            //         {
            //             type: 'value'
            //         }
            //     ],
            //     yAxis: [
            //         {
            //             type: 'category',
            //             axisTick: {show: false},
            //             data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            //         }
            //     ],
            //     series: [
            //         {
            //             name: '利润',
            //             type: 'bar',
            //             label: {
            //                 normal: {
            //                     show: true,
            //                     position: 'inside'
            //                 }
            //             },
            //             data: [200, 170, 240, 244, 200, 220, 210]
            //         },
            //         {
            //             name: '收入',
            //             type: 'bar',
            //             stack: '总量',
            //             label: {
            //                 normal: {
            //                     show: true
            //                 }
            //             },
            //             data: [320, 302, 341, 374, 390, 450, 420]
            //         },
            //         {
            //             name: '支出',
            //             type: 'bar',
            //             stack: '总量',
            //             label: {
            //                 normal: {
            //                     show: true,
            //                     position: 'left'
            //                 }
            //             },
            //             data: [-120, -132, -101, -134, -190, -230, -210]
            //         }
            //     ]
            // };
            this.chartOption = {
                title: {
                    text: '某站点用户访问来源',
                    subtext: '纯属虚构',
                    x: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data: [
                            {value: 335, name: '直接访问'},
                            {value: 310, name: '邮件营销'},
                            {value: 234, name: '联盟广告'},
                            {value: 135, name: '视频广告'},
                            {value: 1548, name: '搜索引擎'}
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };
        }
    };
</script>