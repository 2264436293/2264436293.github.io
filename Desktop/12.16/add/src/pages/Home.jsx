import React from 'react'
import {NavLink} from 'react-router-dom'
import RouterView from '../router/RouterView'
import '../css/home.css'
export default function Home(props) {
    let {child,navLink}=props
    return (
        <div className='ooo'>
            <header>
                头部
            </header>
            <main>
                <RouterView routerList={child}></RouterView>
            </main>
            <footer>
                {
                    navLink.map((item,index)=>{
                        return <NavLink key={index} to={item.path}>{item.title}</NavLink>
                    })
                }
            </footer>
        </div>
    )
}
