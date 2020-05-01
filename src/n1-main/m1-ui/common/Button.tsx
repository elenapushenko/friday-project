import React from 'react';


type OwnPropsType = {
    buttonName: string
}
type PropsType = OwnPropsType


const Button: React.FC<PropsType> = (props) => {
    return (
        <div>
            <button>{props.buttonName}</button>
        </div>
    );
};

export default Button;