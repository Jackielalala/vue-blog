import blog from '@/api/blog'
export default {
    data(){
        return {
            title:'',
            description:'',
            content:''
        }
    },
    methods:{
        onSubmit(){
            blog. createBlog({ title:this.title, content:this.content, description:this.description})
                .then(res=>{
                    // this.$message.success(res.msg);
                    this.$router.push({path:`/detail/${res.data.id}`})
                })
        }
    }
}