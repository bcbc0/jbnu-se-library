package dt.team7.jbnuselibrary.repository;

import dt.team7.jbnuselibrary.entity.Loan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoanRepository extends JpaRepository<Loan, Long> {
}
