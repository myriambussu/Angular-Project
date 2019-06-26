import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
 private arr:Book[] = []
  public books =[
    {
      id:1,
      name:"Harry Potter",
      author:"J K Rowling",
      pageNum:526

  },
  {
      id:2,
      name:"Twilight",
      author:"Jhon Brice",
      pageNum:256
  },
  {
      id:3,
      name:"Little princess",
      author:"Anna M",
      pageNum:150
  },
  {
      
      id:4,
      name:"Hunger Games",
      author:"Jhon Brice",
      pageNum:256
  },
  {
      id:5,
      name:"programation pour les nuls",
      author:"Geeks",
      pageNum:89
  },
  {
      id:6,
      name:"Il etait une fois...",
      author:"Jhon Brice",
      pageNum:256
  },
  {
      id:7,
      name:"Esprit criminel",
      author:"B.P",
      pageNum:256
  }]

  constructor() { }

  public getBooks(){
    return this.books
  }

  public getBook(id){
   let books:Book[] = this.getBooks();
   let book:Book = books.find(mybook=>mybook.id == id)
   return book
  }
  public getNewBooks():Observable<Book[]>{
    return Observable.create((o)=>{
      let arr:Book[] = []
      setTimeout(()=>{
        
        arr.push(new Book(1,"Puisque tu pars...","A.P. Jhones",789))
        arr.push(new Book(2,"Un jour sur la lune","R. Cohen",487))
        o.next(arr)
      
        setTimeout(()=>{
           arr.push(new Book(1,"Harry Potter","J K Rowling",789))
           arr.push(new Book(2,"Hunger Games","Sylvie Hans",487))
           arr.push(new Book(2,"programation pour les nuls","Geeks",487))
           arr.push(new Book(2,"Esprit criminel","B. P. Dupont",487))
           o.next(arr)
          },5000)
    
        },2000)
      })
    }
  }


