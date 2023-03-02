import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResourceModel } from '../models/generic-model';
import { map, Observable, tap } from 'rxjs';
import { ActivatedRouteSnapshot, Resolve, ResolveEnd, ResolveStart, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export abstract class ResourceService <T extends ResourceModel<T>> implements Resolve<T[]>{
  constructor(
    private http:HttpClient,
    private tConstructor: { new (m: Partial<T>, ...args: unknown[]): T },
    protected apiUrl: string
  ) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Observable<T[]>{
   return this.getAll()
  
  }

  public add(resource: Partial<T> & { toJson: () => T }): Observable<T> {
    return this.http
      .post<T>(`${this.apiUrl}`, resource.toJson())
      .pipe(map((result) => new this.tConstructor(result)));
  }

  public getAll(): Observable<T[]> {
    return this.http
      .get<T[]>(`${this.apiUrl}`)
      .pipe(map((result) => result.map((i) => new this.tConstructor(i))));
  }

  public getById(id: string): Observable<T> {
    return this.http
      .get<T>(`${this.apiUrl}/${id}`)
      .pipe(map((result) => new this.tConstructor(result)));
  }

  public update(resource: Partial<T> & { toJson: () => T }): Observable<T> {
    return this.http
      .put<T>(`${this.apiUrl}/${resource.id}`, resource.toJson())
      .pipe(map((result) => new this.tConstructor(result)));
  }

  public delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
