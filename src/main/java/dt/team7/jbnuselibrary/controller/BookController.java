package dt.team7.jbnuselibrary.controller;
import dt.team7.jbnuselibrary.entity.Book;
import dt.team7.jbnuselibrary.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@Controller
public class BookController {
    private final BookService bookService;

    @Autowired
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }
    @GetMapping("/books")
   public String getAllBooks(Model model){
        List<Book> books=bookService.getAllBooks();
        model.addAttribute("books",books);
        return "book/list";
   }

   @GetMapping("/books/add")
    public String showAddBookForm(Model model){
        model.addAttribute("Book", new Book());
        return "book/add";
   }
    @PostMapping("/books/add")
    public String addBlock(@ModelAttribute Book book){
        bookService.addBook(book);
        return "redirect:/books";
    }
}
