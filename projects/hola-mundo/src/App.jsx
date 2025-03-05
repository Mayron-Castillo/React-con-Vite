import { Fragment } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App(){
    return (
        <section className='App'>
            <TwitterFollowCard userName='Mayron' initialIsFollowing = {false} name='Mayron Castillo'/>
            
            <TwitterFollowCard userName='Andres' initialIsFollowing name='Andres Castillo'/>
            
            <TwitterFollowCard userName='Pablo' initialIsFollowing = {false} name='Pablo Castillo'/>
            
            <TwitterFollowCard userName='Alex' initialIsFollowing name='Alex Castillo'/>
        </section>
    )
}