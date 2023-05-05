import React from 'react'

const Box = (props) => {
    let result;
    if(props.title === 'Computer' && props.result !== 'tie' && props.result !== ''){
        result = props.result === 'win' ? 'lose' : 'win'
    }
    else{
        result = props.result // You 박스일 경우 or 비겼을 경우 or 값이 있을 경우
    }
  return (
    <div className={`box ${result}`}>
        <h1 className='who'>{props.title}</h1>
        <img className='item-img' src ={props.item && props.item.img} alt =''/>
        <h2 className='result'>{result}</h2>
    </div>
  )
}

export default Box