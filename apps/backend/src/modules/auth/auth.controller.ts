import { Controller, Get } from "@nestjs/common";
import { AuthService } from "./auth.service";



@Controller('auth')
export class AuthController{
    constructor(private readonly authService: AuthService){}

    @Get('')
    async authMethod(){ 
        // return this.authService.authMethod()
    }
}