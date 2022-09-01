export const mergeObjectsUsingTruthyValues = (firstObject: any, secondObject: any): any => {
  const res: any = {};
  Object.keys({ ...firstObject, ...secondObject }).map(key => {
    res[key] = firstObject[key] || secondObject[key];
  })
  return res;
}