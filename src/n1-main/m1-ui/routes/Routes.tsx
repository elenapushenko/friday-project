import React from 'react';
import { Route } from 'react-router-dom';
import SignInPage from "../../../n2-features/f1-auth/a1-sign-in/ui/SignInPage";
import RegisterPage from "../../../n2-features/f1-auth/a2-register/ui/RegisterPage";
import PasswordRecoveryPage from "../../../n2-features/f1-auth/a3-password-recovery/ui/PasswordRecoveryPage";
import NewPasswordPage from "../../../n2-features/f1-auth/a4-new-password/ui/NewPasswordPage";
import ProfilePage from '../../../n2-features/f1-auth/a5-profile/ui/ProfilePage';


export const SIGN_IN_PATH = '/sign_in';
export const REGISTER_PATH = '/register';
export const PASSWORD_RECOVERY_PATH = '/password_recovery';
export const NEW_PASSWORD_PATH = '/new_password';
export const PROFILE_PATH = '/profile';


const Routes: React.FC = () => {
    return (
        <>
            <Route path={SIGN_IN_PATH} render={() => <SignInPage/>}/>
            <Route path={REGISTER_PATH} render={() => <RegisterPage/>}/>
            <Route path={PASSWORD_RECOVERY_PATH} render={() => <PasswordRecoveryPage/>}/>
            <Route path={NEW_PASSWORD_PATH} render={() => <NewPasswordPage/>}/>
            <Route path={PROFILE_PATH} render={() => <ProfilePage/>}/>
        </>

    );
};

export default Routes;