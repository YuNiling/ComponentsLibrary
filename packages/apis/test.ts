/**
 * 登录相关接口
 */
import request from './request';

/**
 * 统一认证：登录接口
 */
// export function byLoginName(params) {
//   return request({
//     url: `/brain-auth/auth/byLoginName`,
//     method: 'post',
//     data: qs.stringify(params),
//     headers: {
//       'ci-public': (window as any).PUBLIC_KEY,
//       'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
//     },
//   });
// }

/**
 * 展示列表
 */
export function homeList(params) {
  return request({
    url: `/home/list`,
    method: 'POST',
    data: JSON.stringify(params),
  });
}

/**
 * 删除
 */
export function deleteHome(id) {
  return request({
    url: `/home/delete?id=` + id,
    method: 'DELETE',
    // data: JSON.stringify(params),
  });
}
