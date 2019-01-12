import React, { FunctionComponent, memo } from 'react'
import { withDefaultProps } from '../../hoc/withDefaultProps'
import Classes from './Burger.module.sass'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const defaultProps = {}
type DefaultProps = typeof defaultProps
type Props = {
  ingredients: Object
} & DefaultProps

const burger: FunctionComponent<Props> = props => {
  const arrayIngredients = Object.keys(props.ingredients).map(ingredientKey => {
    return [...Array(props.ingredients[ingredientKey])].map((_, index) => {
      return <BurgerIngredient key={ingredientKey + index} type={ingredientKey} />
    })
  })

  return (
    <div className={Classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {arrayIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
}

export default withDefaultProps(defaultProps, memo(burger))
