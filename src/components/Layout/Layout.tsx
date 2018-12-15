import React from 'react'
import Classes from './Layout.module.sass'

const layout = (props: any) => (
  <>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={Classes.LayoutComponent}>{props.children}</main>
  </>
)

export default layout
