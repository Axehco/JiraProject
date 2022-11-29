// 两个叹号，把一个值转化为bool值
export const isFalse = (value) => value === 0 ? false : !value

export const cleanObject = (object) => {
  // Object.assign({}, object)
  const result = {...object}
  Object.keys(result).forEach(key => {
    const value = result[key]
    // 这个代码就是防止value取0的情况
    if (isFalse(value)) {
      delete result[key]
    }
  })
  return result
}