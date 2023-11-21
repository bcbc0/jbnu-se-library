package dt.team7.jbnuselibrary.repository;


import dt.team7.jbnuselibrary.entity.Book;
import dt.team7.jbnuselibrary.entity.LoanHistory;
import dt.team7.jbnuselibrary.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface LoanRepository extends JpaRepository<LoanHistory, Long> {
    List<LoanHistory> findByBook(Book book);

    List<LoanHistory> findByMemberAndBook(Member member, Book book);
}
