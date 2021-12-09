import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { PostDto } from 'src/model/post.dto';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {

constructor(private readonly postService: PostService) {}


    @Get()
    async getPostByUser(@Query('userId') userId){
        return this.postService.getAllPostByUser(userId);
    }

    @Get(':id')
    async getPostById(@Param() params){
        return this.postService.getAPostById(params);
    }

    @Post()
    async createPost(@Body() createPostDto: PostDto) {
        return this.postService.createPost(createPostDto);
    }

    @Put(':id')
    async editPost (@Body() updatePostDto: PostDto, @Param() params) {
        return this.postService.updatePost(updatePostDto, params);
    }

}
