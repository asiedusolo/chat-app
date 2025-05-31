import { Injectable } from "@nestjs/common"
import { UsersService } from "../users/users.service"
import { JwtService } from "@nestjs/jwt"
import * as bcrypt from "bcrypt"



@Injectable()
export class AuthService{
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService
    ){}

    async validateUser(username: string, pass: string): Promise<any>{
        const user = await this.usersService.findByUsername(username)

        if(user && (await bcrypt.compare(pass, user.password))){
            const { password, ...result } = user.toObject()
            return result
        }

        return null
    }


    async login(user: any){
        const payload = { username: user.username, sub: user._id}
        return {
            access_token: this.jwtService.sign(payload)
        }
    }


    async register(username: string, password: string){
        const hash = await bcrypt.hash(password, 10);
        const user = await this.usersService.create({username, password: hash})
        const { password: _, ...result } = user.toObject()
        return result;
    }
}