package dt.team7.jbnuselibrary.controller;

import dt.team7.jbnuselibrary.entity.Book;
import dt.team7.jbnuselibrary.entity.Loan;
import dt.team7.jbnuselibrary.entity.Member;
import dt.team7.jbnuselibrary.service.BookService;
import dt.team7.jbnuselibrary.service.LoanService;
import dt.team7.jbnuselibrary.service.MemberService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/loans")
public class LoanController {

    private final LoanService loanService;
    private final MemberService memberService;
    private final BookService bookService;

    public LoanController(LoanService loanService, MemberService memberService, BookService bookService) {
        this.loanService = loanService;
        this.memberService = memberService;
        this.bookService = bookService;
    }

    @GetMapping("/list")
    public String listLoans(Model model) {
        List<Loan> loans = loanService.getAllLoans();
        model.addAttribute("loans", loans);
        return "loan-list";
    }

    @GetMapping("/add")
    public String showAddForm(Model model) {
        List<Member> members = memberService.getAllMembers();
        List<Book> books = bookService.getAllBooks();

        model.addAttribute("loan", new Loan());
        model.addAttribute("members", members);
        model.addAttribute("books", books);

        return "loan-form";
    }

    
    @PostMapping("/add")
    public String addLoan(@ModelAttribute("loan") Loan loan) {
        loanService.saveLoan(loan);
        return "redirect:/loans/list";
    }

}
