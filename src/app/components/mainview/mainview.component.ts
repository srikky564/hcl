import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/core/models/user.model';
import { PagerService } from 'src/core/services/pagination.service';

@Component({
  selector: 'app-mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.css']
})
export class MainviewComponent implements OnInit {
  pager: any = {};
  pagedItems: Array<Book>;
  bookList: Array<Book>;
  updatedBookList: Array<Book>;

  constructor(private pagerService: PagerService, private router: Router
  ) { }

  ngOnInit(): void {
    let data: Array<Book> = [
      {

        bookId: "1",
        name: "Sherlock-holmes",
        authorName: "sir author canon Doyle",
        category: "Thriller",
        status: "Borrowed",
        borrowedDate: "22-10-2010",
        dueDate: "29-10-2010",
        returnedDate: "29-11-2010",
        fine: 100
      },
      {

        bookId: "2",
        name: "Baroda-diareies",
        authorName: "Mary",
        category: "Pshycology",
        status: "Available",
        borrowedDate: "",
        dueDate: "",
        returnedDate: "",
        fine: 0
      },
      {

        bookId: "3",
        name: "Garyson help",
        authorName: "gary",
        category: "Thriller",
        status: "Borrowed",
        borrowedDate: "22-10-2010",
        dueDate: "29-10-2010",
        returnedDate: "29-10-2010",
        fine: 100
      },
      {

        bookId: "1",
        name: "Asignable Job",
        authorName: "david",
        category: "Thriller",
        status: "Borrowed",
        borrowedDate: "22-10-2010",
        dueDate: "29-10-2010",
        returnedDate: "29-10-2010",
        fine: 100
      },
      {

        bookId: "1",
        name: "Sherlmary margerett",
        authorName: "mary",
        category: "Thriller",
        status: "Borrowed",
        borrowedDate: "22-10-2010",
        dueDate: "29-10-2010",
        returnedDate: "29-10-2010",
        fine: 100
      },
      {

        bookId: "1",
        name: "",
        authorName: "sir author canon Doyle",
        category: "Thriller",
        status: "Borrowed",
        borrowedDate: "22-10-2010",
        dueDate: "29-10-2010",
        returnedDate: "29-10-2010",
        fine: 100
      },
      {

        bookId: "1",
        name: "Sherlock holmes",
        authorName: "sir author canon Doyle",
        category: "Thriller",
        status: "Borrowed",
        borrowedDate: "22-10-2010",
        dueDate: "29-10-2010",
        returnedDate: "29-10-2010",
        fine: 100
      },
      {

        bookId: "1",
        name: "Sherlock holmes",
        authorName: "sir author canon Doyle",
        category: "Thriller",
        status: "Borrowed",
        borrowedDate: "22-10-2010",
        dueDate: "29-10-2010",
        returnedDate: "29-10-2010",
        fine: 100
      }
    ]

    this.bookList = data;
    this.updatedBookList = this.bookList;
    this.setPage(1);


  }


  applyFilter(filter: string) {
    if (filter !== '') {
      this.updatedBookList = this.bookList.filter(item => {
        if ((item.name && item.name.toString().toLowerCase().indexOf(filter.toLowerCase()) !== -1) ||
          (item.authorName && item.authorName.toString().toLowerCase().indexOf(filter.toLowerCase()) !== -1) ||
          (item.category && item.category.toString().toLowerCase().indexOf(filter.toLowerCase()) !== -1)) {
          return true;
        }
        return false;
      }
      );
    } else {
      this.updatedBookList = this.bookList;

    }
    this.applySort('name');


  }
  applySort(fieldName: string) {
    this.updatedBookList.sort((a, b) => (a[fieldName] > b[fieldName]) ? 1 : ((b[fieldName] > a[fieldName]) ? -1 : 0));
    this.setPage(1);
  }

  setPage(page: number) {

    this.pager = this.pagerService.getPager(this.updatedBookList.length, page, 3);

    this.pagedItems = this.updatedBookList.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}






