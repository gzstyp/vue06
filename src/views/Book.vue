<template>
    <div>
        <table>
            <tr>
                <td style="width:125px;height:36px;">编号</td>
                <td style="width:310px;height:36px;">书名</td>
                <td style="width:150px;height:36px;">作者</td>
            </tr>
            <tr v-for="item in books">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.author}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
    export default {
        name: "Book",
        data : function(){
            return {
                msg : 'hello Vue',
                books : [
                    {
                        id : 1,
                        name : 'java零基础实战',
                        author : '引路者'
                    },
                    {
                        id : 2,
                        name : 'Vue入门到精通',
                        author : '曹格'
                    },
                    {
                        id : 3,
                        name : 'Spring boot 入门到精通',
                        author : '王小波'
                    },
                    {
                        id : 4,
                        name : 'Mysql高级应用',
                        author : '田卓智'
                    }
                ]
            }
        },
        created : function(){
            var _this = this;
            axios.get('http://127.0.0.1:8181/book/findAll',{
                params : {}
            }).then(data =>{
                _this.books = data.data;
            }).catch(err =>{
                console.info('出错:'+err);
            });
        }
    }
</script>
<style scoped>
</style>