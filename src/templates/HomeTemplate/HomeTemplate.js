import { Fragment } from "react"
import { Route } from "react-router-dom"
import Footer from "../layout/Footer/Footer"
import Header from "../layout/Header/Header"
import HomeCarousel from "../layout/HomeCarousel/HomeCarousel"

export const HomeTemplate = (props) => {
    const { Component, ...restProps } = props
    return <Route {...restProps} render={(propsRout) => {
        return <Fragment>
            <Header {...propsRout} />
            <HomeCarousel {...propsRout} />
            <Component {...propsRout} />
            <Footer />
        </Fragment>
    }} />
}