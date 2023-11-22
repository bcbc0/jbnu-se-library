package dt.team7.jbnuselibrary.controller;

import dt.team7.jbnuselibrary.entity.Book;
import dt.team7.jbnuselibrary.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/books")
@RequiredArgsConstructor
public class BookController {
    private final BookService bookService;


    @GetMapping("/")
    public String getAllBooks(Model model) {
        List<Book> books = bookService.getAllBooks();
        books.sort(Comparator.comparing(Book::getTitle));

        model.addAttribute("books", books);
        return "book/list";
    }


    @GetMapping("/title")
    public String getBooksByTitle(
            @RequestParam String title,
            Model model
    ) {
        List<Book> books = bookService.getBookByTitle(title);
        books.sort(Comparator.comparing(Book::getTitle));

        model.addAttribute("books", books);
        return "book/list";
    }

    @GetMapping("/lecture")
    public String getBooksByLecture(
            @RequestParam String lecture,
            Model model
    ) {
        List<Book> books = bookService.getBookByLecture(lecture);
        books.sort(Comparator.comparing(Book::getTitle));

        model.addAttribute("books", books);
        return "book/list";
    }

    @GetMapping("/add")
    public String showAddBookForm(Model model) {
        model.addAttribute("Book", new Book());
        return "book/add";
    }

    @PostMapping("/add")
    public String registerBook(@ModelAttribute("book") Book book) {
        bookService.addBook(book);
        return "redirect:/books/";
    }
}
