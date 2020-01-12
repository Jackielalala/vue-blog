
import blog from '@/api/blog.js'

export default {
    data(){
        return {
            blogs:[],
            page:1,
            total:0
        }
    },
    created(){
        this.page = parseInt(this.$route.query.page)||1;
        blog.getBlogs({page:this.page}).then(res=>{
            // console.log(res.data);
            this.total = res.totalPage;
            var datas = res.data.filter(function(item){
                return item.user != null
            })
            // console.log(datas);
            this.blogs = datas;
            // console.log(this.blogs)
        })
    },
    methods:{
        // onPageChange(newPage){
        //     blog.getBlogs({page:newPage}).then(res=>{
        //         this.blogs = res.data;
        //         this.total = res.totalPage;
        //         this.page = newPage; 
        //         this.$router.push({path:'/',query:{page:newPage}})
        //     })
        // }
    }
}
