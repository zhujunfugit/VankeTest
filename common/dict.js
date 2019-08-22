export function createDictCode(name, data = []) {
  const itemObj = {}
  data.map(item => {
    itemObj[item.code] = item.value;
  })
  setDict(name, itemObj);
}

export function creactDictName(name, data = []) {
  let project = {};
  let level = {};
  // 部门 项目
  if(name === 'dept'){
    data.map(item => {
      if (item.projects) {
        return item.projects.map(item1 => {
          project[item1.id] =  item1.name;
        })
      }
    })
    setDict('project', project);
  }
  
  // 技能 级别
  if (name === 'position') {
    data.map(item => {
      if (item.levels) {
        return item.levels.map(item1 => {
          level[item1.id] = item1.name;
        })
      }
    })
    setDict("level", level);
  }
  const itemObj = {}
  data.map(item => {
    itemObj[item.id] = item.name;
  })
  setDict(name, itemObj);
}

const setDict = function() {
  const disc = {};
  return function(name, data) {
    if (name) {
      disc[name] = data;
    }
    return disc || {};
  }
}();


/*
  
*/


/*
  name 字典类型,
  code 字典code

*/
export function getDist(name, code) {
  const data = setDict();
  if(data[name] && data[name][code]) {
    return data[name][code];
  }
}
export function getDistPlace(name, code) {
  const data = setDict();
  let arr = [];
  if(code){
    arr = typeof code == "string" ? code.split(",") : code;
  }
  let result = [];
  if (data[name]) {
    arr.forEach(ele => {
      result.push(data[name][ele]);
    });
    return result.toString();
  }
}


