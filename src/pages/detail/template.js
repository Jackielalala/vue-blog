import marked from 'marked'
import blog from '@/api/blog'
export default {
    name:"detail",
    data(){
        return {
            title:'',
            rawContent:'',
            user:{},
            rawcreatedAt:'',
            date:''
        }
    },
    created(){
        this.blogId = this.$route.params.blogId;//blogId是在router文件夹的index.js的组件中注册过的动态属性
        console.log(this.blogId);
        blog.getDetail({blogId:this.blogId}).then(res=>{

            this.title = res.data.title;
            this.rawContent = res.data.content;
            this.rawcreatedAt = res.data.createdAt;
            this.user = res.data.user;
            this.date = new Date(this.rawcreatedAt).getFullYear() + '/' + (new Date(this.rawcreatedAt).getMonth()+1) + '/' + (new Date(this.rawcreatedAt).getDay());
            
            console.log(typeof (this.rawcreatedAt));
        })
    },
    computed:{
        markdown(){
            return marked(this.rawContent)
        }
    }
}