/**
 * 表格相关接口
 */
import request from './request';
import qs from 'qs';

/**
 * 展示列表
 */
export function tableList(params) {
  return request({
    url: `/table/list`,
    method: 'POST',
    data: qs.stringify(params),
  });
}

/**
 * 删除
 */
export function tableDelete(params) {
  return request({
    url: `/table/deleteById?` + qs.stringify(params),
    method: 'DELETE',
  });
}
