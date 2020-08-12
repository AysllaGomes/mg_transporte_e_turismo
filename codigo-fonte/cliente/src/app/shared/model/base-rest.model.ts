import {Observable} from 'rxjs';
import {Paginator} from './paginator.model';
import { BaseModel } from './base-model';

export interface BaseRest<T> {
  getAll(page: string, search?: string): Observable<Paginator<T>>;

  getById(id: any): Observable<BaseModel<T>>;

  save(T);

  update(T);

  delete(T);
}
