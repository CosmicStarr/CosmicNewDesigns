import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment.prod';
import { IBrand } from '../models/brand';
import { ICategory } from '../models/category';
import { PaginatedResults } from '../models/pagination';
import { StarrParams } from '../models/params';
import { IProducts } from '../models/products';
import { IUser } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products:IProducts
  user:IUser
  baseUrl = environment.baseUrl;
  PaginatedResult:PaginatedResults<IProducts[]> = new PaginatedResults<IProducts[]>()
  header = new HttpHeaders({ Authorization: 'Bearer ' + localStorage.getItem('token'),})
  constructor(private http:HttpClient) { }
  getProducts(sunParams?:StarrParams){
    let params = new HttpParams
    if(sunParams?.sort){
      params = params.append('sort', sunParams.sort)
    }
    if(sunParams?.brandId){
      params = params.append('brandId',sunParams.brandId.toString())
    }
    if(sunParams?.catId){
      params = params.append('catId',sunParams.catId.toString())
    }
    if(sunParams?.search)
    {
      params = params.append('Search',sunParams.search)
    }
    if(sunParams?.pageNumber !== undefined && sunParams?.pageSize !== undefined){
      params = params.append('pageNumber',sunParams.pageNumber.toString());
      params = params.append('pageSize',sunParams.pageSize.toString());
      params = params.append('TotalItems',sunParams.TotalItems.toString()); 
    }
    return this.http.get<any>(this.baseUrl + 'Products/Products',{ observe:'response', params, headers: this.header})
    .pipe(
      map(response =>{
        this.PaginatedResult.result = response.body;
        if(response.headers.get('Pagination') !== undefined || response.headers.get('Pagination') == null){
    
          // this.PaginatedResult.Pagination = JSON.parse(response.headers.get('Pagination'));
        }
        return this.PaginatedResult
      },(error: any)=>{
        console.log(error)
      })
    )
  }

  getProduct(id:number){
    return this.http.get<IProducts>(this.baseUrl + 'Products/' + id)
  }

  getCategory(){
    return this.http.get<ICategory[]>(this.baseUrl + 'Products/Category')
  }

  getBrands(){
    return this.http.get<IBrand[]>(this.baseUrl + 'Products/Brand')
  }

  postRatings(id:number,rating:number){ 
    const username:IUser = JSON.parse(localStorage.getItem('user'))
    let params = new HttpParams
    params = params.append('user',username.email)
    return this.http.post<IProducts>(this.baseUrl + 'Products/ratings/'+ id,rating,{params})
  }
}
