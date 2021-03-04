import {request} from '@/views/network/request';
export function getHomeData(){
    return request({
        url:'/wx/index'
    })
}
