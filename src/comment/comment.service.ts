import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios'
import { map, Observable } from 'rxjs';
import { PostDto } from 'src/model/post.dto';

@Injectable()
export class CommentService {

    baseUrl = 'https://jsonplaceholder.typicode.com/comments';

    constructor(private httpService: HttpService) {}

    getAllCommentsByPost(postId: string): Observable<AxiosResponse<PostDto[]>> {
        const finalUrl = (postId !== undefined) ? 
                this.baseUrl + '?postId=' + postId : 
                this.baseUrl;
        return this.httpService.get(finalUrl).pipe(map(response => response.data));
    }
}
