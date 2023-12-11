package dt.team7.jbnuselibrary.controller;

import dt.team7.jbnuselibrary.service.LoanService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/loan")
@RequiredArgsConstructor
public class LoanController {

    private final LoanService loanService;

    @GetMapping("/borrow/{bookId}")
    public String borrowBook(@PathVariable Long bookId, Model model) {
        if (loanService.borrowBook(bookId)) {
            return "redirect:/books/";
        }
        return "redirect:/";

    }

    @GetMapping("/return/{loanId}")
    public String returnBook(@PathVariable Long loanId, Model model) {
        loanService.returnBook(loanId);
        return "redirect:/";
    }
}
