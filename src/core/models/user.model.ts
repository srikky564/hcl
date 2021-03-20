
export interface User {
    userId: string;
    email: string;
    userName: string;
    userRole: string;
    totalFine: number;
    books: Array<Book>;

}


export interface Book {

    bookId: string;
    name: string;
    authorName: string,
    category: string,
    status: string,
    borrowedDate: string;
    returnedDate: string;
    dueDate: string;
    fine: number
}

