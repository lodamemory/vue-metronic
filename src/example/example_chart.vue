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
                'chartOption': {
                    title: { text: 'hahahah' },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        data: ['利润', '支出', '收入']
                    },
                    xAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    yAxis: [
                        {
                            type: 'category',
                            axisTick: {show: false},
                            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                        }
                    ],
                    series: [
                        {
                            name: '利润',
                            type: 'bar',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'inside'
                                }
                            },
                            data: [200, 170, 240, 244, 200, 220, 210]
                        },
                        {
                            name: '收入',
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true
                                }
                            },
                            data: [320, 302, 341, 374, 390, 450, 420]
                        },
                        {
                            name: '支出',
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'left'
                                }
                            },
                            data: [-120, -132, -101, -134, -190, -230, -210]
                        }
                    ]
                }
            };
        },
        ready () {
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
        }
    };
</script>