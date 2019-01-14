import React, { FunctionComponent, memo } from 'react'
import { withDefaultProps } from '../../hoc/withDefaultProps'
import Classes from './Burger.module.sass'

// Components
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

// Interfaces
import { IBurgerIngredientProps } from './BurgerIngredient/BurgerIngredient'
import { IBurgerBuilderState } from '../../containers/BurgerBuilder/BurgerBuilder'

// Props
export interface BurgerProps {
  ingredients: IBurgerBuilderState['ingredients']
}
const defaultProps = {}
type DefaultProps = typeof defaultProps
type Props = BurgerProps & DefaultProps

const burger: FunctionComponent<Props> = props => {
  const { ingredients } = props

  const arrayIngredients = Object.keys(ingredients).map(ingredientKey => {
    return [...Array(ingredients[ingredientKey])].map((_, index) => {
      return <BurgerIngredient key={ingredientKey + index} type={ingredientKey as IBurgerIngredientProps['type']} />
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
