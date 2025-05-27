import { UsersService } from './users.service';
import { Controller, Get } from "@nestjs/common";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}

    @Get('')
    async testUsers(){
        return this.usersService.testUsers()
    }
}