import React, { Component } from 'react'
import css from "./css/NavBarForm.module.css"
import NavBarChild from './NavBarChild'

export class NavBarForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    handlleClick = () => {
        console.log(this.state.isLoggedIn)
        this.setState((prevState) => ({
            isLoggedIn: prevState.isLoggedIn === true ? false : true
        }))
    }
    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                <div>{this.state.isLoggedIn ? (
                    <NavBarChild handlleClick={this.handlleClick}/>
                ) : (
                    <button onClick={this.handlleClick}>Login</button>
                )
                }</div>
            </div>
        )
    }
}

export default NavBarForm
