import React, { FunctionComponent, ReactElement, memo } from 'react'
import { withDefaultProps } from '@src/hoc/withDefaultProps'
import Classes from './BurgerIngredient.module.sass'

// Props
export interface IBurgerIngredientProps {
  type: 'bread-bottom' | 'bread-top' | 'meat' | 'cheese' | 'bacon' | 'salad'
}
const defaultProps = {}
type DefaultProps = typeof defaultProps
type Props = IBurgerIngredientProps & DefaultProps

const burgerIngredient: FunctionComponent<Props> = props => {
  const { type } = props

  let ingredient: ReactElement<IBurgerIngredientProps>

  switch (type) {
    case 'bread-bottom':
      ingredient = <div className={Classes.BreadBottom} />
      break
    case 'bread-top':
      ingredient = (
        <div className={Classes.BreadTop}>
          <div className={Classes.Seeds1} />
          <div className={Classes.Seeds2} />
        </div>
      )
      break
    case 'meat':
      ingredient = <div className={Classes.Meat} />
      break
    case 'cheese':
      ingredient = <div className={Classes.Cheese} />
      break
    case 'salad':
      ingredient = <div className={Classes.Salad} />
      break
    case 'bacon':
      ingredient = <div className={Classes.Bacon} />
      break

    default:
      ingredient = <></>
      break
  }

  return ingredient
}

export default withDefaultProps(defaultProps, memo(burgerIngredient))
