package dt.team7.jbnuselibrary.controller;

import dt.team7.jbnuselibrary.entity.Member;
import dt.team7.jbnuselibrary.service.MemberService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/members")
public class MemberController {

    private final MemberService memberService;

    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @GetMapping("/list")
    public String listMembers(Model model) {
        List<Member> members = memberService.getAllMembers();
        model.addAttribute("members", members);
        return "member-list";
    }

    @GetMapping("/add")
    public String showAddForm(Model model) {
        model.addAttribute("member", new Member());
        return "member-form";
    }

    @PostMapping("/add")
    public String addMember(@ModelAttribute("member") Member member) {
        memberService.saveMember(member);
        return "redirect:/members/list";
    }
}
