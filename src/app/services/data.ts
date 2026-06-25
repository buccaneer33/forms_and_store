import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { BehaviorSubject, filter, map, Observable } from 'rxjs';

interface User {
  name: string;
  lastName: string;
  isActive: boolean;
  existDate: Date;
}

@Injectable()
export class UserService {
  private http = inject(HttpClient);

  private _data = new BehaviorSubject<User[] | null>(null);

  get data$(): Observable<User[]>{
    return this._data
      .asObservable()
      .pipe(filter((user): user is User[] => user !== null));
  }
  get getActiveUsers$(){
    return this.data$.pipe(
      map((users: User[]) => users.filter(user => user.isActive))
    )
  }
  private set data$(data: User[]){
    this._data.next(data);
  }
  private addUser(user: User){
    const users: User[] = this._data.getValue() as User[];
    users?.push(user);
    this.data$ = [...users];
    this.addUserRequest(user);
  }

  loadUsers() {
    this.http.get<User[]>(`/api/users`)
      .subscribe(users => this.data$ = users);
  }
  addUserRequest(user: User){
    this.http.put<User>(`/api/users`, user)
      .subscribe(response => console.log(response))
  }
}
