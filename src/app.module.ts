import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentController } from './comment/comment.controller';
import { CommentService } from './comment/comment.service';
import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, PostController, UserController, CommentController],
  providers: [AppService, PostService, UserService, CommentService],
})
export class AppModule {}
