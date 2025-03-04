import { Fragment } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App(){
    return (
        <section className='App'>
            <TwitterFollowCard isFollowing userName='Mayron' name='Mayron Castillo'/>
            <TwitterFollowCard isFollowing={false} userName='Andres' name='Andres Castillo'/>
            <TwitterFollowCard isFollowing userName='Pablo' name='Pablo Castillo'/>
            <TwitterFollowCard isFollowing userName='Alex' name='Alex Castillo'/>
        </section>
    )
}