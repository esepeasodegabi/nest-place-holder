import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios'
import { map, Observable } from 'rxjs';
import { UserDto } from 'src/model/user.dto';

@Injectable()
export class UserService {

    baseUrl = 'https://jsonplaceholder.typicode.com/users';

    constructor(private httpService: HttpService) {}

    getAllUsers(): Observable<AxiosResponse<UserDto[]>> {
        return this.httpService.get(this.baseUrl).pipe(map(response => response.data));
    }

    getAUserById(params): Observable<AxiosResponse<UserDto[]>>{
        return this.httpService.get(this.baseUrl + '/' + params.id ).pipe(map(response => response.data));
    }


}
