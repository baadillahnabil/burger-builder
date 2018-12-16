import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
  constructor(props: any) {
    super(props)
  }

  render() {
    return (
      <>
        <Burger />
        <div>Build Control</div>
      </>
    )
  }
}

export default BurgerBuilder
