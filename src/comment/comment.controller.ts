import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CpuInfo } from 'os';
import { CommentService } from './comment.service';


@Controller('comments')
export class CommentController {

constructor(private readonly commentService: CommentService) {}


    @Get()
    async getCommentsByPost(@Query('postId') postId){
        return this.commentService.getAllCommentsByPost(postId);
    }


}
