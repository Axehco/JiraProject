import React from 'react'
import {useArray, useMount} from 'utils'

export const TeReactTest = () => {
  const persons: {name: string, age: number}[] = [
    {name: 'jack', age: 25},
    {name: 'tom', age: 22}
  ];

  const {value, clear, removeIndex, add} = useArray(persons);

  useMount(() => {
    // console.log(value.notExist)
    // add({name: 'davi'})
    // removeIndex('123)
  });

  return (
    <div>
      {
        <button onClick={() => add({name: 'john', age: 22})}>add john</button>
      }
      {
        <button onClick={() => removeIndex(0)}>remove 0</button>
      }
      {
        <button style={{marginBottom: '50px'}} onClick={() => clear()}>clear</button>
      }
      {
        value.map((person: {name: string, age: number}, index: number) => {
          return (
            <div key={index} style={{marginBottom: '50px'}}>
            <span style={{color: 'red'}}>{index}</span>
            <span>{person.name}</span>
            <span>{person.age}</span>
          </div>
          )
        })
      }
    </div>
  )
}