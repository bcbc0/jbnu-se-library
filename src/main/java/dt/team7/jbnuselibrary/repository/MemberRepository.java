package dt.team7.jbnuselibrary.repository;

import dt.team7.jbnuselibrary.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {
}
