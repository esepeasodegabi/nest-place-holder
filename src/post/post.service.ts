import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios'
import { map, Observable } from 'rxjs';
import { PostDto } from 'src/model/post.dto';

@Injectable()
export class PostService {

    baseUrl = 'https://jsonplaceholder.typicode.com/posts';

    constructor(private httpService: HttpService) {}

    getAllPostByUser(userId: string): Observable<AxiosResponse<PostDto[]>> {
        const finalUrl = (userId !== undefined) ? 
                this.baseUrl + '?userId=' + userId : 
                this.baseUrl;
        return this.httpService.get(finalUrl).pipe(map(response => response.data));
    }

    getAPostById(params): Observable<AxiosResponse<PostDto[]>>{
        return this.httpService.get(this.baseUrl + '/' + params.id ).pipe(map(response => response.data));
    }


    createPost(postToCreate: PostDto) {
        return this.httpService.post(this.baseUrl, postToCreate).pipe(map(response => response.data));
    }

    updatePost(postToUpdate: PostDto, params) {
        postToUpdate.id = params.id;
        return this.httpService.put(this.baseUrl + '/' + params.id, postToUpdate).pipe(map(response => response.data));
    }
}
