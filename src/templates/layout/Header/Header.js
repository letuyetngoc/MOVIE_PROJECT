import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header(props) {
    return (
        <header className="p-4 dark:bg-coolGray-800 dark:text-coolGray-100 fixed bg-black text-white w-full bg-opacity-50 z-10">
            <div className="container flex justify-between h-16 mx-auto">
                <NavLink rel="noopener noreferrer" to="/home" aria-label="Back to homepage" className="flex items-center p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="text-white flex-shrink-0 w-8 h-8 rounded-full dark:text-coolGray-900">
                        <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z" />
                    </svg>
                </NavLink>
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">
                        <NavLink rel="noopener noreferrer" to="/home" activeClassName='border-b-2 border-indigo-500' className="flex items-center px-4 -mb-1  dark:border-transparent dark:text-violet-400 dark:border-violet-400 text-white">HOME</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink rel="noopener noreferrer" to="/news" activeClassName='border-b-2 border-indigo-500' className="flex items-center px-4 -mb-1  dark:border-transparent text-white">NEWS</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink rel="noopener noreferrer" to="/contact" activeClassName='border-b-2 border-indigo-500' className="flex items-center px-4 -mb-1  dark:border-transparent text-white">CONTACT</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink rel="noopener noreferrer" to="/register" activeClassName='border-b-2 border-indigo-500' className="flex items-center px-4 -mb-1  dark:border-transparent text-white">REGISTER</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink rel="noopener noreferrer" to="/login" activeClassName='border-b-2 border-indigo-500' className="flex items-center px-4 -mb-1  dark:border-transparent text-white">LOGIN</NavLink>
                    </li>

                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    <button className="self-center px-8 py-3 rounded">SIGN IN</button>
                    <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-coolGray-900">SIGN UP</button>
                </div>
                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-coolGray-100">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>
    )
}
