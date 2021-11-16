import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private userUrl = 'https://jsonplaceholder.typicode.com/users'

  constructor(private httpClient: HttpClient) {
  }
  getByUserId(id:number):Observable<IPost[]>{
    return this.httpClient.get<IPost[]>(`${this.userUrl}/${id}/posts`)
  }
}
