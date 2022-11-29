import { useEffect, useState } from "react"

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

export const useMount = (callback) => {
  useEffect(() => {
    callback()
  }, [])
}

// 自定义hook最大的特征，里面需要使用别的hook，不然普通函数就能做到了。
export const useDebounce = (value, delay) => {
  // debouncedValue 为定义的内部变量 debouncedValue的更新频率和上面的参数value不一样
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    // 每次value变化时，会设置一个新的定时器，delay后再去 setDebouncedValue(value)
    const timeout = setTimeout(() => { setDebouncedValue(value) }, delay)

    // 执行时间，是在上一次useEffect处理完以后再去执行。所以一般负责一些清理任务。
    return () => clearTimeout(timeout)
  }, [value, delay])

  return debouncedValue
}