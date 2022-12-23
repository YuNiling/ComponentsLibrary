/**
 * 表格相关接口
 */
import request from './request';

/**
 * 展示列表
 */
export function tableList(params) {
  return request({
    url: `/table/list`,
    method: 'POST',
    data: JSON.stringify(params),
  });
}

/**
 * 删除
 */
export function tableDelete(id) {
  return request({
    url: `/table/delete?id=` + id,
    method: 'DELETE',
  });
}
