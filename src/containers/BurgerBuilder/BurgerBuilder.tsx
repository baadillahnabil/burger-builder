import React, { Component } from 'react'

// Components
import Burger from '@src/components/Burger/Burger'
import BuildControls from '@src/components/Burger/BuildControls/BuildControls'

// State
export interface IBurgerBuilderState {
  readonly ingredients: {
    [key: string]: number
    readonly salad: number
    readonly meat: number
    readonly cheese: number
    readonly bacon: number
  }
  readonly color?: String
}
const initialState: IBurgerBuilderState = {
  ingredients: {
    salad: 0,
    meat: 0,
    cheese: 0,
    bacon: 0
  }
}

class BurgerBuilder extends Component<object, IBurgerBuilderState> {
  readonly state: IBurgerBuilderState = initialState

  render() {
    const { ingredients } = this.state

    return (
      <>
        <Burger ingredients={ingredients} />
        <BuildControls />
      </>
    )
  }
}

export default BurgerBuilder
