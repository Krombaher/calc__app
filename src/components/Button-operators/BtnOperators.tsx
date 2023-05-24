import React from 'react'
import './btnOperators.scss'

type BtnOperatorsItemsType = {
  id: string,
  items:string
}

const btnOperatorsItems: BtnOperatorsItemsType[] = [
  {id:'1', items: '+'},
  {id:'2', items: '-'},
  {id:'3', items: '*'},
  {id:'4', items: '/'},
]

export const BtnOperators = () => {

const btnItems = btnOperatorsItems.map(el => {
  return (
    <button className='btn__item' id={el.id}>{el.items}</button>
  )
})

  return (
    <section className='btn'>
      {btnItems}
    </section>
  )
}

