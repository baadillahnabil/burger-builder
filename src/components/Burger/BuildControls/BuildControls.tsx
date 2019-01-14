import React, { FunctionComponent, memo } from 'react'
import { withDefaultProps } from '@src/hoc/withDefaultProps'
import Classes from './BuildControls.module.sass'

// Components
import BuildControl from './BuildControl/BuildControl'

// Props
export interface IBuildControlsProps {}
const defaultProps = {}
type DefaultProps = typeof defaultProps
type Props = IBuildControlsProps & DefaultProps

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Meat', type: 'meat' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Bacon', type: 'bacon' }
]

const buildControls: FunctionComponent<Props> = props => {
  const {} = props

  return (
    <div className={Classes.BuildControls}>
      {controls.map((control, index) => (
        <BuildControl key={index} label={control.label} />
      ))}
    </div>
  )
}

export default withDefaultProps(defaultProps, memo(buildControls))
