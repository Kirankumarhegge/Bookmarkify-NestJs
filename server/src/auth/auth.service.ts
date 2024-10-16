import { Injectable } from "@nestjs/common";
import { User, Bookmark } from "@prisma/client";

@Injectable ({})
export class AuthService {
    test (name) {
        console.log("Into the auth service test function, Hi ", name);

    }

    signup() {
        console.log("signup");
        return { msg : "signup" };
    }

    signin() {
        console.log("signin");
        return { msg : "signin" };
    }
}