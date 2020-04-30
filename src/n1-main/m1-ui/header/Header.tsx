import React from 'react';
import {NEW_PASSWORD_PATH, PASSWORD_RECOVERY_PATH, PROFILE_PATH, REGISTER_PATH, SIGN_IN_PATH} from "../routes/Routes";
import GeneralLink from "../common/GeneralLink";



const Header: React.FC = () => {
    return (
        <>
            <GeneralLink path={SIGN_IN_PATH} title={'Sign-in'}/>
            <GeneralLink path={REGISTER_PATH} title={'Register'}/>
            <GeneralLink path={PASSWORD_RECOVERY_PATH} title={'Password recovery'}/>
            <GeneralLink path={NEW_PASSWORD_PATH} title={'New password'}/>
            <GeneralLink path={PROFILE_PATH} title={'Profile'}/>
            </>
    );
};

export default Header;