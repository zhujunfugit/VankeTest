/*
  errors
*/

/*
  是否错误代码
*/
export function isError(errorCode) {
  return errorCode === '0000'
}

/*
  通过错误码和模块名取得错误消息
*/
export function getMessage(errorCode, moduleName) {
  switch(errorCode) {
    case '0000':
      return '执行成功';
    case '0009':
      return '执行失败';
    case '0011':
      return '操作数据不存在';
    case '1000':
      return '登入成功';
    case '1001':
      return '用户不存在';
    case '1002':
      return '用户已禁用,请联系管理员';
    case '1003':
      return '用户状态异常,请联系管理员';
    case '1004':
      return '密码错误';
    case '2001':
      return '必要参数缺失';
    case '2002':
      return '参数类型错误';
    case '2003':
      return '参数值错误';
    case '9001':
      return '权限异常';
    default:
      return false;
  }
}

/*
  权限判断
*/
export function isAuth(errorCode) {
  return errorCode !== '9001'
}