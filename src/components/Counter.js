import React from 'react'
import { connect } from 'react-redux'
import { decrease, increase } from '../redux/counter/actions'

const Counter = ({ counter, increase, decrease }) => {
  return (
    <div className='cart'>
        <button onClick={increase} className='btn'>+</button>
        <h1>{counter}</h1>
        <button onClick={decrease} className='btn'>-</button>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increase: () => dispatch(increase()),
        decrease: () => dispatch(decrease())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)