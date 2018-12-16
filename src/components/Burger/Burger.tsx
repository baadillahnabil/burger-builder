import React, { FunctionComponent, memo } from 'react'
import { withDefaultProps } from '../../hoc/withDefaultProps'
import Classes from './Burger.module.sass'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const defaultProps = {}
type DefaultProps = typeof defaultProps
type Props = {} & DefaultProps

const burger: FunctionComponent<Props> = props => {
  return (
    <div className={Classes.Burger}>
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="cheese" />
      <BurgerIngredient type="meat" />
      <BurgerIngredient type="cheese" />
      <BurgerIngredient type="bacon" />
      <BurgerIngredient type="cheese" />
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
}

export default withDefaultProps(defaultProps, memo(burger))
