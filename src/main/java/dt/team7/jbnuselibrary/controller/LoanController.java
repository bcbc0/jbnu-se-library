package dt.team7.jbnuselibrary.controller;

import dt.team7.jbnuselibrary.service.LoanService;
import dt.team7.jbnuselibrary.service.MemberService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("loans")
public class LoanController {

    private LoanService loanService;
    private MemberService memberService;
}
