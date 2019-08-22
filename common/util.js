// 千位符
function thousandth (val, length = 2) {
  if (val==="" || val == null) return 0;
  return val
    ? Number(val)
        .toFixed(length)
        .replace(/(\d)(?=(\d{3})+(\.|\b))/g, "$1,")
    : "0.00";
};

/**
 * post 请求下载
 * @param {*} res  response
 */
function downloadByPost({data, name}) { 
  const blob = new Blob([data]);
  const fileName = decodeURI(name);
  if ('download' in document.createElement('a')) { // 非IE下载
    const elink = document.createElement('a');
    elink.download = fileName;
    elink.style.display = 'none';
    elink.href = URL.createObjectURL(blob);
    document.body.appendChild(elink);
    elink.click();
    document.body.removeChild(elink);
  } else { // IE10+下载
    navigator.msSaveBlob(blob, fileName);
  }
}
export {
  thousandth,
  downloadByPost,
}
