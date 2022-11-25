import React, { useState } from 'react';

const useGenerateRandomColor = () => {
    const [ color, setColor ] = useState("")
    const generateColor = () =>{
        setColor(Math.random().toString(16).substr(-6));
    };
    return {color,generateColor};
      
};

function Color() {

    const { color, generateColor } = useGenerateRandomColor();

    return (
        <div>
        <rectangulo 
            style={{
                width: '255px',
                height: '255px',
                backgroundColor: "#" + color,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
            onMouseOver={generateColor}
        ></rectangulo>  
    </div>
    );
}


function Ejercicio() {

    return (
        <div>
            <Color></Color>
        </div>
    );
}

export default Ejercicio;
