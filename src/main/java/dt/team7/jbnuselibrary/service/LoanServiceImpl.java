package dt.team7.jbnuselibrary.service;

import dt.team7.jbnuselibrary.entity.Loan;
import dt.team7.jbnuselibrary.entity.Book;
import dt.team7.jbnuselibrary.repository.BookRepository;
import dt.team7.jbnuselibrary.repository.LoanRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@Service
public class LoanServiceImpl implements LoanService {

    private final LoanRepository loanRepository;
    private final BookRepository bookRepository;

    public LoanServiceImpl(LoanRepository loanRepository, BookRepository bookRepository) {
        this.loanRepository = loanRepository;
        this.bookRepository = bookRepository;
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
    public void loanBook(Loan loan) {
        loanRepository.save(loan);
    }

    @Override
    public void returnBook(Long bookId) {
        Book book = bookRepository.findById(bookId).orElse(null);
        List<Loan> loans = loanRepository.findByBook(book)
                .stream()
                .filter(Loan::isReturned)
                .collect(Collectors.toList());

        for (Loan loan : loans) {
            loan.setReturned(true);
            loanRepository.save(loan);
        }
    }
}
