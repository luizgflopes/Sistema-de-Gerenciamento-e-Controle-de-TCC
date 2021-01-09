import axios from 'axios';

const axiosApi= axios.create({
  baseURL: `http://localhost:3001/`
});

export async function get(url,sucessMenssage,errorMenssage,callback){
    return await axiosApi.get(url)
    .then(async r=>{
        console.log("api",r)
        await callback(sucessMenssage);
        return r.data;
      //  notificationHook(sucessMenssage)
    }).catch(async err=>{
      await callback(errorMenssage);

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
export async function put(url,bodyParams,errorMenssage,sucessMenssage,callback){
    return await axiosApi.put(url,bodyParams)
    .then(async r=>{
        console.log("api",r)
        await callback(sucessMenssage)
        return r;
      //  notificationHook(sucessMenssage)
    }).catch(err=>{
      callback(errorMenssage)

        return null;
    })
}

export async function excluir(url,bodyParams,errorMenssage,sucessMenssage){
  return await axiosApi.delete(url)
  .then(r=>{
      console.log("api",r)
      return r;
    //  notificationHook(sucessMenssage)
  }).catch(err=>{
      return null;
  })
}