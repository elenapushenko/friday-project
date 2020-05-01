import React from 'react';
import Input from "../../../../n1-main/m1-ui/common/Input";
import Button from "../../../../n1-main/m1-ui/common/Button";
import GeneralLink from "../../../../n1-main/m1-ui/common/GeneralLink";
import {PASSWORD_RECOVERY_PATH, REGISTER_PATH} from "../../../../n1-main/m1-ui/routes/Routes";


const SignIn = () => {
    return (
        <div>
        <div>
            Sign in
        </div>

            <div>
            <Input type={"text"} placeholder={"Enter your name"}/>
            <Input type={"password"} placeholder={"Enter your password"} />
            <GeneralLink path={PASSWORD_RECOVERY_PATH} title={"Password recovery?"}/>
                <div>
                    Remember me
                </div>
                <Input type={"checkbox"}/>
            <Button buttonName={"Enter"}/>
            <GeneralLink path={REGISTER_PATH} title={"Register"}/>
        </div>
        </div>
    );
};

export default SignIn;