import Header from "./Header.jsx"
import Navigation from "./Navigation.jsx"
import Title from "./Title.jsx"
import { useState } from 'react'
import { Outlet } from "react-router-dom";

export default function MainLayout(){
    return (
        <>
            <Header/>
            <Navigation/>
            <main>
                <Outlet />
            </main>
        </>
    )
}