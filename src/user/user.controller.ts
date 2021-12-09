import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { PostDto } from 'src/model/post.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {

constructor(private readonly userService: UserService) {}


    @Get()
    async getAllUsers(){
        return this.userService.getAllUsers();
    }

    @Get(':id')
    async getUserById(@Param() params){
        return this.userService.getAUserById(params);
    }


}
