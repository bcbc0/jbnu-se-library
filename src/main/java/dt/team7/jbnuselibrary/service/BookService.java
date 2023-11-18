package dt.team7.jbnuselibrary.service;

import dt.team7.jbnuselibrary.entity.Book;

import java.util.List;

public interface BookService {

    List<Book> getAllBooks();

    Book getBookById(Long id);

    List<Book> getBookByTitle(String title);

    List<Book> getBookByAuthor(String author);

    void addBook(Book book);
}
