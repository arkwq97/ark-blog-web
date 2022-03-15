import request from '@/axios'

export function getArticleCount() {
  return request({
    url: '/articles/count',
    method: 'get'
  })
}

export function getArticleList(page: number) {
  return request({
    url: `/articles/list${page}`,
    method: 'get'
  })
}