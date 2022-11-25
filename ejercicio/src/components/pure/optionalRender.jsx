import React, {useState} from 'react';

// ? Estilo para usuario logueado
const loggedStyle = {
    backgroundColor: 'black',
    color: 'white',
    fontWeight: 'bold',
    width: '255px',
    height: '255px'
};

// ? Estilo para usuario no logueado
const unloggedStyle = {
    backgroundColor: 'red',
    color: 'white',
    fontWeight: 'bold',
    width: '255px',
    height: '255px'
}

// Login / Logout divs
const LoginRect = ({loginAction, propStyle}) => {
    return (
        <div style={propStyle} onDoubleClick={loginAction}>Rect 1</div>
    )
}

const LogoutRect = ({logoutAction, propStyle}) => {
    return (
        <div style={propStyle} onClick={logoutAction} >Rect 2</div>
    )
}


const Optionalrender = () => {

    const [access, setAccess] = useState(false);

    const loginAction = () => {
        setAccess(true)
    }

    const logoutAction = () => {
        setAccess(false)
    }

    let optionalRect;

    if(access){
        optionalRect = <LogoutRect propStyle={ unloggedStyle } logoutAction={logoutAction} ></LogoutRect>
    }else{
        optionalRect = <LoginRect propStyle={ loggedStyle  } loginAction={loginAction}></LoginRect>
    }


    return (
        <div>
            {/* Optional Rect */}
            { optionalRect }
            {access}
        </div>
    );
}

export default Optionalrender;
