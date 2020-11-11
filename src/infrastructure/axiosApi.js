import axios from 'axios';

const axiosApi= axios.create({
  baseURL: `http://localhost:3001/`
});

export async function get(url,errorMenssage,sucessMenssage){
    return await axiosApi.get(url)
    .then(r=>{
        console.log("api",r)
        return r.data;
      //  notificationHook(sucessMenssage)
    }).catch(err=>{
        return null;
    })
}
export async function post(url,bodyParams,errorMenssage,sucessMenssage){
    return await axiosApi.post(url,bodyParams)
    .then(r=>{
        console.log("api",r)
        return r.data;
      //  notificationHook(sucessMenssage)
    }).catch(err=>{
        return null;
    })
}
export async function put(url,bodyParams,errorMenssage,sucessMenssage){
    return await axiosApi.put(url,bodyParams)
    .then(r=>{
        console.log("api",r)
        return r;
      //  notificationHook(sucessMenssage)
    }).catch(err=>{
        return null;
    })
}