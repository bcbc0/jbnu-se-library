package dt.team7.jbnuselibrary.controller;

import dt.team7.jbnuselibrary.entity.Book;
import dt.team7.jbnuselibrary.service.BookService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/book")
public class BookController {
    private final BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping("/list")
    public String getAllBooks(Model model) {
        List<Book> books = bookService.getAllBooks();
        model.addAttribute("books", books);
        return "book/list";
    }


    @GetMapping("/{title}")
    public String getBooksByTitle(@PathVariable(value = "title") String title, Model model) {
        List<Book> books = bookService.getBookByTitle(title);
        model.addAttribute("books", books);
        return "book/list";
    }

    @GetMapping("/{lecture}")
    public String getBooksByLecture(@PathVariable(value = "lecture") String lecture, Model model) {
        List<Book> books = bookService.getBookByLecture(lecture);
        model.addAttribute("books", books);
        return "book/list";
    }

    @GetMapping("/add")
    public String showAddBookForm(Model model) {
        model.addAttribute("Book", new Book());
        return "book/add";
    }
}
