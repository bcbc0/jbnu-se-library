package dt.team7.jbnuselibrary.service;

import dt.team7.jbnuselibrary.entity.Member;

import java.util.List;

public interface MemberService {
    List<Member> getAllMembers();

    Member getMemberById(Long id);

    void saveMember(Member member);
}
