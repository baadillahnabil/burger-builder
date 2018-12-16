import React, { FunctionComponent, MouseEvent, ReactElement } from 'react'
import Classes from './BurgerIngredient.module.sass'

import { withDefaultProps } from '../../../hoc/withDefaultProps'

const defaultProps = {}
type DefaultProps = typeof defaultProps
type Props = {
  type: 'bread-bottom' | 'bread-top' | 'meat' | 'cheese' | 'salad' | 'bacon'
  onClick(e: MouseEvent<HTMLElement>): void
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
          <div className={Classes.Seed1} />
          <div className={Classes.Seed2} />
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

export default withDefaultProps(defaultProps, burgerIngredient)