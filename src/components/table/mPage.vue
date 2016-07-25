<template>
<div class="row dataTables_wrapper">
    <div class="col-md-5 col-sm-5">
        <div class="dataTables_info" id="sample_1_info" role="status" aria-live="polite">
            当前 {{nowPage}} / {{totalPage}} 页 共 {{totalCount}} 条
        </div>
    </div>
    <div class="col-md-7 col-sm-7">
        <div class="dataTables_paginate paging_bootstrap_full_number" id="sample_1_paginate">
            <ul class="pagination" style="visibility: visible;">
                <li class="prev" :class="{'disabled':nowPage === 1}">
                    <a href="javascript:;" title="First" @click="_first"><i class="fa fa-angle-double-left"></i></a>
                </li>
                <li class="prev" :class="{'disabled':nowPage === 1}">
                    <a href="javascript:;" title="Prev" @click="_pre"><i class="fa fa-angle-left"></i></a>
                </li>
                <li class="next" :class="{'disabled':nowPage === totalPage || totalCount === 0}">
                    <a href="javascript:;" title="Next" @click="_next"><i class="fa fa-angle-right"></i></a>
                </li>
                <li class="next" :class="{'disabled':nowPage === totalPage || totalCount === 0}">
                    <a href="javascript:;" title="Last" @click="_last"><i class="fa fa-angle-double-right"></i></a>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>
<script>
    export default {
        props: {
            'totalCount': {
                type: Number,
                default: 0
            },
            'limit': {
                type: Number,
                default: 5
            },
            'nowPage': {
                type: Number,
                default: 1
            }
        },
        data () {
            return {
                total: 0,
                homePage: 1,
                skipPage: 1,
                totalPage: 0
            };
        },
        watch: {
            'totalCount': function (val, oldVal) {
                this.totalPage = Math.ceil(val / this.limit);
            }
        },
        created () {
            this.totalPage = Math.ceil(this.totalCount / this.limit);
        },
        methods: {
            _next () {
                if ((this.totalPage === 0 && this.nowPage < 0) ||
                    (this.totalPage > 0 && this.nowPage < this.totalPage)) {
                    this.nowPage = this.nowPage + 1;
                    this.skipPage = this.nowPage;
                }
            },
            _pre () {
                if ((this.totalPage === 0 && this.nowPage > 0) ||
                (this.totalPage > 0 && this.nowPage > 1)) {
                    this.nowPage = this.nowPage - 1;
                    this.skipPage = this.nowPage;
                }
            },
            _skip () {
                if (this.skipPage <= this.totalPage) {
                    this.nowPage = parseInt(this.skipPage);
                }
            },
            _first () {
                if (this.nowPage !== 1) {
                    this.nowPage = 1;
                }
            },
            _last () {
                if (this.nowPage !== this.totalPage) {
                    this.nowPage = this.totalPage;
                }
            }
        }
    };
</script>
