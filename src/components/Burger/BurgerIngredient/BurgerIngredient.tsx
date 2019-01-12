import React, { FunctionComponent, ReactElement, memo } from 'react'
import { withDefaultProps } from '../../../hoc/withDefaultProps'
import Classes from './BurgerIngredient.module.sass'

const defaultProps = {}
type DefaultProps = typeof defaultProps
type Props = {
  type: String | 'bread-bottom' | 'bread-top' | 'meat' | 'cheese' | 'salad' | 'bacon'
} & DefaultProps

const burgerIngredient: FunctionComponent<Props> = props => {
  let ingredient: ReactElement<any>

  switch (props.type) {
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
