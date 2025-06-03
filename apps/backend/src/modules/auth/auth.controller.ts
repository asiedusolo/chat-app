import { Body, Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { RegisterDto } from "./dto/register.dto";
import { LoginDto } from "./dto/login.dto";
import { ApiBody, ApiTags } from "@nestjs/swagger";



@ApiTags('auth')
@Controller('auth')
export class AuthController{
    constructor(private readonly authService: AuthService){}


    @ApiBody({ type: RegisterDto})
    @Post('register')
    async register(@Body() dto: RegisterDto){
        return this.authService.register(dto.username, dto.password)
    }

    @ApiBody({ type: LoginDto})
    @Post('login')
    async login(@Body() dto: LoginDto){
        const user = await this.authService.validateUser(dto.username, dto.password)

        if(!user){
            throw new Error('Invalid credentials');
        }

        return this.authService.login(user)
    }

 
}