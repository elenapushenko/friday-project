import React from 'react';


type OwnPropsType = {
    type: string,
    placeholder?: string
}
type PropsType = OwnPropsType


const Input: React.FC<PropsType> = (props) => {
    return (
        <div>
            <form >
                {props.type === "text" || "password" ?
                <input type={props.type} placeholder={props.placeholder}/>
                : <input type="checkbox"/>}
            </form>
        </div>
    );
};

export default Input;