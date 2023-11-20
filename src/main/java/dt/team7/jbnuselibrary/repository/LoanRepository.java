package dt.team7.jbnuselibrary.repository;


import dt.team7.jbnuselibrary.entity.Book;
import dt.team7.jbnuselibrary.entity.Loan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface LoanRepository extends JpaRepository<Loan, Long> {
    List<Loan> findByBook(Book book);
}
