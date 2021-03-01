export const toTree = (data: any[]) => {
  const result: any = [];
  if (!Array.isArray(data)) {
    return result;
  }
  data.forEach(item => {
    delete item.children;
  });
  const map = {};
  data.forEach(item => {
    map[item._id] = item;
  });
  data.forEach(item => {
    const parent = map[item.parent];
    if (parent) {
      (parent.children || (parent.children = [])).push(item);
    } else {
      result.push(item);
    }
  });
  return sort(result);
};
export const sort = (arr: any[]) => {
  arr.sort((a, b) => {
    return a.order - b.order;
  });
  arr.forEach(el => {
    if (el.children) {
      sort(el.children);
    }
  });
  return arr;
};
