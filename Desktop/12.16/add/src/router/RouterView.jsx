import React from 'react'
import {Switch,Redirect,Route} from 'react-router-dom'
export default function RouterView(props) {
    let {routerList}=props;
    let redirect=routerList.filter(item=>item.to)[0]
    let list=routerList.filter(item=>item.path)
    return (
        
         <Switch>
             {
                list.map((item,index)=>{
                     return <Route key={index} path={item.path} render={(props)=>{
                          let Com=item.com;
                          if(item.children){
                              return <Com {...props} child={item.children} navLink={item.children.filter(item=>item.path)}/>
                          }
                          return <Com {...props} />
                     }}/>
                 })
             }
             {
                 redirect ?<Redirect to={redirect.to} from={redirect.from}></Redirect>:<></>
             }
         </Switch>      
       
    )
}
