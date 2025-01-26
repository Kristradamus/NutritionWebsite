import Header from "./Header.jsx"
import Navigation from "./Navigation.jsx"
import Title from "./Title.jsx"
import { useState } from 'react'

export default function MainLayout(){
    return (
        <>
            <Header/>
            <Navigation/>
            <Title/>
        </>
    )
}