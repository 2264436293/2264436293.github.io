import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import routerList from './router/routerList'
import RouterView from './router/RouterView'

export default function App(props) {
  return (
    <BrowserRouter>
     <RouterView routerList={routerList}></RouterView>
    </BrowserRouter>
  )
}
