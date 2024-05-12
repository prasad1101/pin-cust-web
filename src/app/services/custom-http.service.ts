import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomHttpService {
  constructor(public httpClient: HttpClient) {}

  /**
   * helper function for get req
   */
  public getReq(url: string) {
    return this.httpClient.get(url);
  }

  /**
   * helper function for post req
   * @param url
   * @param payload
   * @returns
   */
  public postReq(url: any, payload: any): Observable<any> {
    return this.httpClient.post(`${url}`, payload);
  }

  /**
   * helper function for put req
   * @param url
   * @param payload
   * @returns
   */
  public putReq(url: any, payload: any): Observable<any> {
    return this.httpClient.put(`${url}`, payload);
  }

  /**
   * helper function for patch req
   * @param url
   * @param payload
   * @returns
   */
  public patchReq(url: any, payload: any): Observable<any> {
    return this.httpClient.patch(`${url}`, payload);
  }

  /**
   * helper function for delete req
   * @param url
   * @param id
   * @returns
   */
  public deleteReq(url: any, id: any): Observable<any> {
    return this.httpClient.delete(`${url}/${id}`);
  }
}
