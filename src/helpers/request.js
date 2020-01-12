import axios from 'axios'

axios.defaults.baseURL = 'https://blog-server.hunger-valley.com';
axios.defaults.withCredentials = false;//跨域请求时也会带上cookie,默认是不带的
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
export default function request(url,type='GET',data={}){
    return new Promise((resolve,reject)=>{
        let option = {
            url,
            method:type
        }
        if(type.toLowerCase() === 'get'){
            option.params = data
        }else {
            option.data = data
        }
        axios(option).then(res=>{
            if(res.data.status === 'ok'){
                resolve(res.data)
            }else{
                alert(res.data.msg)
                reject(res.data)
            }
        }).catch(err=>{
            alert('网络异常')
            reject({msg:'网络异常'})
        })
    })
}