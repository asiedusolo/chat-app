import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService{

    async testUsers(){
        return 'Users'
    }
}