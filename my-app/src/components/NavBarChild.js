import React from 'react'

function NavBarChild(props) {
    return (
        <div>
            <form>
                <label htmlFor='username' >Username:</label>
                <input type='text' name='username' id='username' placeholder='username'></input>
                <label htmlFor='password'>Password:</label>
                <input type='password' name='password' id='password' placeholder='password'></input>
                <button type='submit' onClick={props.handlleClick}>Submit</button>
            </form>
        </div>
    )
}

export default NavBarChild
