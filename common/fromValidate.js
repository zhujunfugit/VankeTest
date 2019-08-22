/*
  正则表达式
*/

const emailValidate = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/; // 邮箱
export const pwdValidate = /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*().]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&*().]+$)(?![\d!@#$%^&*().]+$)[a-zA-Z\d!@#$%^&*().]{6,8}$/;
export const iphone = /^1[3456789]\d{9}$/;
export default {
    phoneReg(rule, value, callback) {//手机号
        if (iphone.test(value)) {
          callback();
        } else {
          callback(new Error('手机号码格式有误'));
          // return false;
        }

      }
}
