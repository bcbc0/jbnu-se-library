package dt.team7.jbnuselibrary.controller;

import dt.team7.jbnuselibrary.entity.LoanHistory;
import dt.team7.jbnuselibrary.service.LoanService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class IndexController {

    private final LoanService loanService;

    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("/myLibrary")
    public String myLibrary(Model model) {
        List<LoanHistory> allLoanHistories = loanService.getAllLoanHistories();
        model.addAttribute("loanHistories", allLoanHistories);
        return "mylibrary";
    }
}
