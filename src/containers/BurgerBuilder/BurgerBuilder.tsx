import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger'

const initialState = {
  ingredients: {
    salad: 2,
    bacon: 3,
    meat: 2,
    cheese: 1
  }
}
type State = Readonly<typeof initialState>

class BurgerBuilder extends Component<object, State> {
  readonly state: State = initialState

  render() {
    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Control</div>
      </>
    )
  }
}

export default BurgerBuilder
