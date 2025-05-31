import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { User, UserDocument } from "./schemas/user.schema"
import { Model } from "mongoose"

@Injectable()
export class UsersService{
    constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>){}

    async findByUsername(username: string){
        return this.userModel.findOne({ username })
    }

    async create( data: { username: string, password: string }) {
        return new this.userModel(data).save()
    }
}