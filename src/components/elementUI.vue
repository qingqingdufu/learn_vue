<template>
    <div class="table" >
        <el-table
                :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                style="width: 100%"  class="table-title" >
            <el-table-column
                    label="Date"
                    prop="date"
                    align="center"
                    class="table-column1">
            </el-table-column>
            <el-table-column
                    label="Name"
                    prop="name"
                    align="center"
                    class="table-column1">
            </el-table-column>
            <el-table-column
                    align="center"
                    class="table-column2">
                <template slot="header" slot-scope="scope">
                    <el-input
                            v-model="search"
                            size="mini"
                            align="center"
                            placeholder="输入关键字搜索"/>
                </template>
                <template slot-scope="scope">
                    <div >
                        <el-button
                                class="button"
                                align="center"
                                size="mini"
                                @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                        <el-button
                                class="button"
                                align="center"
                                size="mini"
                                type="danger"
                                @click="handleDelete(scope.$index, tableData)">Delete</el-button>
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "elementUI",
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }],
                search: '',
                pickerOptions: {
                    disabledDate(time) {
                        return time.getTime() > Date.now();
                    },
                },
                value1: ''
            }
        },
        methods: {
            newdate() {
                return {
                    value: new Date()
                }
            },
            handleEdit(index, row) {
                console.log(index, row);
                var dateprint = this.tableData[index].date;
                var name = this.tableData[index].name;
                const h = this.$createElement;
                this.$msgbox({
                    title: '编辑',
                    message: h('p', null, [
                        h('span', {style: {width: 100, margin: 15}}, '日 期:'),
                        h('el-date-picker', {
                            attrs: {
                                vmodel: "value1",
                                type: "date",
                                value: dateprint,
                            },
                            style: {},
                        }, ''),
                        h("p", null, null),
                        h('span', {style: {width: 100, margin: 15}}, '姓 名:'),
                        h('input', {
                            attrs: {
                                type: 'text',
                                name: 'username',
                                value: name
                            }, style: {textIndent: 10},
                        }, '')
                    ]),
                    showCancelButton: true,
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    beforeClose: (action, instance, done) => {
                        if (action === 'confirm') {
                            instance.confirmButtonLoading = true;
                            // instance.confirmButtonText = '执行中...';
                            setTimeout(() => {
                                done();
                                setTimeout(() => {
                                    instance.confirmButtonLoading = false;
                                }, 100);
                            }, 1000);
                        } else {
                            done();
                        }
                    }
                }).then(action => {
                    this.$message({
                        type: 'info',
                        message: 'action: ' + action
                    });
                });
            },
            handleDelete(index, rows){
                console.log(index,rows);
                rows.splice(index, 1);
            }
        }
    }

</script>

<style scoped>
    .table{
        width: 50%;
        height: 100%;
        margin: 20px auto;
        border:1px solid #25b91b;
        padding: 1px;
        border-radius:6px;
        /*margin-top:20px;*/
    }
    .table-title{
        border: black;
        text-align:center;
        padding: 0.1px;
    }
    .button{
        width: 40%;
        float:left;
        padding: 10px 20px;
    }
    .show{
        display: block;
    }

</style>