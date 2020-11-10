import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QuizService {

  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get(url);
  }

  getAll() {
    return [
      { id: 'data/aspnet.json', name: 'Asp.Net Quiz' },
      { id: 'data/cpp.json', name: 'C++' },
      { id: 'data/java.json', name: 'Java Based Quiz' },
    ];
  }

}
