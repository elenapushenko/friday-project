import React from 'react';
import { NavLink } from 'react-router-dom';
import {NEW_PASSWORD_PATH, PASSWORD_RECOVERY_PATH, PROFILE_PATH, REGISTER_PATH, SIGN_IN_PATH} from "../routes/Routes";



const Header: React.FC = () => {
    return (
        <>
            <NavLink to={SIGN_IN_PATH}>Sign-in</NavLink>
            <NavLink to={REGISTER_PATH}>Register</NavLink>
            <NavLink to={PASSWORD_RECOVERY_PATH}>Password recovery </NavLink>
            <NavLink to={NEW_PASSWORD_PATH}>New password</NavLink>
            <NavLink to={PROFILE_PATH}>Profile</NavLink>
            </>
    );
};

export default Header;