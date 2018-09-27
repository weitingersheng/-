new Vue({
    el:"#app",
    data:{
        lists:'',
        liindex:''
    },
    created:function(){
        //发送get请求
        this.$http.get('json/data.json').then(function(res){
            console.log(res.body);
            this.lists = res.body;
        },function(){
            console.log('请求失败处理');
        });
    },
    methods:{
        p:function(e){
            console.log(e)
            this.lists[this.liindex][e].bool = !this.lists[this.liindex][e].bool
        },
        li:function(e){
            console.log(e)
            this.liindex = e;
        }
    }
})