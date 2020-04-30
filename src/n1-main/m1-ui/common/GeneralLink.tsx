import React from 'react';
import {NavLink} from "react-router-dom";

type OwnPropsType = {
    path: string
    title: string
}
type PropsType = OwnPropsType


const GeneralLink: React.FC<PropsType> = (props) => {
    return (
        <div>
            <NavLink to={props.path}>title={props.title} </NavLink>
        </div>
    );
};

export default GeneralLink;