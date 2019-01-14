import React, { FunctionComponent, memo } from 'react'
import { withDefaultProps } from '@src/hoc/withDefaultProps'
import Classes from './BuildControl.module.sass'

// Props
export interface IBuildControlProps {
  label: string
}
const defaultProps = {}
type DefaultProps = typeof defaultProps
type Props = IBuildControlProps & DefaultProps

const buildControl: FunctionComponent<Props> = props => {
  const { label } = props

  return (
    <div className={Classes.BuildControl}>
      <div className={Classes.Label}>{label}</div>
      <button className={Classes.Less}>Less</button>
      <button className={Classes.More}>More</button>
    </div>
  )
}

export default withDefaultProps(defaultProps, memo(buildControl))
