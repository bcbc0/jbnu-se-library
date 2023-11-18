package dt.team7.jbnuselibrary.service;

import dt.team7.jbnuselibrary.entity.Book;

import java.util.List;

public interface BookService {

    List<Book> getAllBooks();

    Book getBookById(Long id);

    void addBook(Book book);
}
