import React, { Component } from 'react'

// Components
import Burger from '../../components/Burger/Burger'

// State
export interface IBurgerBuilderState {
  readonly ingredients: {
    readonly salad: number
    readonly meat: number
    readonly cheese: number
    readonly bacon: number
  }
  readonly color?: String
}
const initialState: IBurgerBuilderState = {
  ingredients: {
    salad: 1,
    meat: 1,
    cheese: 1,
    bacon: 1
  }
}

class BurgerBuilder extends Component<object, IBurgerBuilderState> {
  readonly state: IBurgerBuilderState = initialState

  render() {
    const { ingredients } = this.state

    return (
      <>
        <Burger ingredients={ingredients} />
        <div>Build Control</div>
      </>
    )
  }
}

export default BurgerBuilder
