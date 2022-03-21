import request from '@/axios'

export function getArticleCount(searchKey = '') {
  return request({
    url: `/articles/count?searchKey=${searchKey}`,
    method: 'get'
  })
}

export function getArticleList(page: number, searchKey = '') {
  return request({
    url: `/articles/list/${page}?searchKey=${searchKey}`,
    method: 'get'
  })
}

export function getArticle(id: string) {
  return request({
    url: `/articles/${id}`,
    method: 'get'
  })
}