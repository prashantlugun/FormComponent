export interface InputConfig {
    type?: string | undefined;
    name?: string | undefined;
    placeholder?: string | undefined;
}

export interface onLoginProps {
    username?: string | undefined;
    email?: string | undefined;
    password?: string | undefined;
}

export interface LoginProps {
    inputs?: InputConfig[] | undefined;
    onLogin?: onLoginProps[] | undefined;
}