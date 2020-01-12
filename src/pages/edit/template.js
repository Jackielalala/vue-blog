import blog from '@/api/blog'
export default {
    data(){
        return {
           title:'',
           description:'',
           content:'',
           blogId:''
        }
    },
    created(){
        this.blogId = this.$route.params.blogId;//从路由中定位页面
        blog.getDetail({blogId:this.blogId}).then(res=>{
            this.title = res.data.title;
            this.description = res.data.description;
            this.content = res.data.content;
        })
    },
    methods:{
        onSubmit(){
            blog.updateBlog({blogId:this.blogId},{title:this.title,content:this.content,description:this.description})
                .then(res=>{
                    // this.$message.success(res.msg);
                    this.$router.push({path:`/detail/${res.data.id}`})
                })
        }
    }
}