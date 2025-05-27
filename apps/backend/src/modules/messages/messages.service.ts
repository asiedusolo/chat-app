import { Injectable } from "@nestjs/common";


@Injectable()
export class MessagesService{

    async getMessage(): Promise<string> {
        return "Hello Solomon!!"
    }
}