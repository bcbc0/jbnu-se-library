package dt.team7.jbnuselibrary.controller;

import dt.team7.jbnuselibrary.service.BookService;
import dt.team7.jbnuselibrary.service.LoanService;
import dt.team7.jbnuselibrary.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/loan")
@RequiredArgsConstructor
public class LoanController {

    private final LoanService loanService;

    @PostMapping("/borrow")
    public void borrowBook(
            @RequestParam Long memberId,
            @RequestParam Long bookId
    ) {
        System.out.println("memberId = " + memberId);
        System.out.println("bookId = " + bookId);
        if (!loanService.borrowBook(memberId, bookId)) {
            return;
        }

    }

    @PostMapping("/return")
    public void returnBook(
            @RequestParam Long memberId,
            @RequestParam Long bookId
    ) {
        loanService.returnBook(memberId, bookId);
    }


}
