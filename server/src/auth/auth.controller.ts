import { Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { posix } from "node:path/win32";

@Controller ('auth')
export class AuthController {
    constructor(private authService : AuthService) {
        // this.authService.test("Kiran");
    }

    @Post("signup")
    signup() {
        this.authService.signup;
    }

    @Post("signin")
    singin() {
        this.authService.signin;
    }
}