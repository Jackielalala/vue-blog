import blog from '@/api/blog'
export default {
    name:"user",
    data(){
        return {
            blogs:[],
            user:{},
            page:1,
            total:0
        }
    },
    created(){
        this.userId = this.$route.params.userId;
        blog.getBlogsByUserId(this.userId,{page:this.page})
            .then(res=>{
                this.page = res.page;
                this.total = res.total;
                this.blogs = res.data;
                if(res.data.length>0){
                    this.user = res.data[0].user;
                }
            })
    },
    methods:{
        splitDate(dataStr){
            let dateObj = typeof dataStr === 'object' ? dataStr : new Date(dataStr);
            return {
                date:dateObj.getDate(),
                month:dateObj.getMonth() + 1 + '月',
                year:dateObj.getFullYear() 
            }
        }
    }
}