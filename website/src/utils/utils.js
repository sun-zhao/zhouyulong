import {request} from '@/views/network/request';

export function getHomeData() {
    return request({
        url: '/wx/index'
    })
}

export function getArtData() {
    return request({
        url: '/wx/art/list'
    })
}

export function getCategoryList() {
    return request({
        url: '/wx/c/list'
    })
}

export function getArticleList(category) {
    return request({
        url: '/wx/data/list?category='+category
    })
}
export function getArticleDetail(id) {
    return request({
        url: '/wx/data/detail?id='+id
    })
}
export function getNewsDetail(id) {
    return request({
        url: '/wx/news/detail?id='+id
    })
}
export function getNewsList() {
    return request({
        url: '/wx/news/list'
    })
}
//获取展讯
export function getExhibition() {
    return request({
        url: '/wx/preview/list'
    })
}
//获取about
export function getAbout() {
    return request({
        url: '/wx/about/list'
    })
}

const isEnglish = false;
export default {
    isEnglish
}

