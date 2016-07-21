<template>
  <div class="row">
    <div class="col-md-5 col-sm-12">
        <div class="dataTables_info" id="sample_1_info" role="status" aria-live="polite">Showing 1 to 5 of 25 entries
        </div>
    </div>
    <div class="col-md-7 col-sm-12">
      <div class="dataTables_paginate paging_bootstrap_full_number" id="sample_1_paginate">
        <ul class="pagination" style="visibility: visible;">
            <li class="prev disabled"><a href="#" title="First"><i class="fa fa-angle-double-left"></i></a></li>
            <li class="prev disabled"><a href="#" title="Prev"><i class="fa fa-angle-left"></i></a></li>
            <li class="active"><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
            <li class="next"><a href="#" title="Next"><i class="fa fa-angle-right"></i></a></li>
            <li class="next"><a href="#" title="Last"><i class="fa fa-angle-double-right"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        props: ['totalCount', 'limit', 'nowPage'],
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
