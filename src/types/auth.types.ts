import { UserDataType } from "./user.types";

export type EMailType = {
  email: string;
};

export type PasswordType = {
  password: string;
};

export type LoginFormType = {
  email: string;
  password?: string;
};

export type LoginBodyType = {
  email: string;
  password: string
}


export type LoginResponseType = {
    accessToken: string;
    user: UserDataType
}

export type AuthResponseType = {
    sessionId: string;
    expireAt: number;
    user: UserDataType
}

export type RedisResponseType = {
    value: string;
}
