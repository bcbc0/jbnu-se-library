package dt.team7.jbnuselibrary.service;

import dt.team7.jbnuselibrary.entity.Loan;
import dt.team7.jbnuselibrary.repository.LoanRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoanServiceImpl implements LoanService{

    private final LoanRepository loanRepository;

    public LoanServiceImpl(LoanRepository loanRepository) {
        this.loanRepository = loanRepository;
    }

    @Override
    public List<Loan> getAllLoans() {
        return loanRepository.findAll();
    }

    @Override
    public Loan getLoanById(Long id) {
        return loanRepository.findById(id).orElse(null);
    }

    @Override
    public void saveLoan(Loan loan) {
        loanRepository.save(loan);
    }
}
