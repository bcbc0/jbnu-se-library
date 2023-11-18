package dt.team7.jbnuselibrary.service;

import dt.team7.jbnuselibrary.entity.Loan;

import java.util.List;

public interface LoanService {
    List<Loan> getAllLoans();

    Loan getLoanById(Long id);

    void saveLoan(Loan loan);
}
