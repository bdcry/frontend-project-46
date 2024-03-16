import _ from 'lodash';

const buildTreeDiff = (obj1, obj2) => {
  // создаем и сортируем массив с уникальными парами ключей
  const keys = _.sortBy(_.union(Object.keys(obj1), Object.keys(obj2)));
  const sortedKeys = _.sortBy(keys);

  return sortedKeys.map((key) => {
    if (!_.has(obj2, key)) {
      return { type: 'deleted', key, value: obj1[key] };
    }
    if (!_.has(obj1, key)) {
      return { type: 'added', key, value: obj2[key] };
    }
    if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
      return {
        type: 'nested',
        key,
        children: buildTreeDiff(obj1[key], obj2[key]),
      };
    }
    if (!_.isEqual(obj1[key], obj2[key])) {
      return {
        type: 'changed',
        key,
        valueBefore: obj1[key],
        valueAfter: obj2[key],
      };
    }
    return { type: 'unchanged', key, value: obj1[key] };
  });
};

export default buildTreeDiff;
