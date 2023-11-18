package dt.team7.jbnuselibrary.service;
import dt.team7.jbnuselibrary.entity.Book;
import dt.team7.jbnuselibrary.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {
    private final BookRepository bookRepository;

    @Autowired
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }
    public List<Book> getAllBooks(){
        return bookRepository.findAll();

    }
    public void addBook(Book book){
        bookRepository.save(book);
    }
}
