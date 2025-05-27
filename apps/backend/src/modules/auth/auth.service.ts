import { Injectable } from "@nestjs/common";



@Injectable()
export class AuthService{

    async authMethod(){
        return 'Auth'
    }
}