import { iLoginResponse } from "src/app/interfaces/auth/ilogin-response";

export class LoginResponse implements iLoginResponse {
    accessToken!: string;
    email!: string;
    id!: number;
    roles!: string[];
    tokenType!: string;
    username!: string;
}
