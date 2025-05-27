import { Injectable } from "@nestjs/common";


@Injectable()
export class ChatService{

    async getChat(){
        return "Chats"
    }
}