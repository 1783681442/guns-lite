import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/article/list',
    method: 'get',
    params
  })
}


export function save(params) {
  return request({
    url: '/article',
    method: 'post',
    params
  })
}

export function remove(id) {
  return request({
    url: '/article',
    method: 'delete',
    params: {
      id: id
    }
  })
}
