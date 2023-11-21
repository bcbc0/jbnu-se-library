package dt.team7.jbnuselibrary.service;

import dt.team7.jbnuselibrary.entity.Book;
import dt.team7.jbnuselibrary.entity.LoanHistory;
import dt.team7.jbnuselibrary.entity.Member;
import dt.team7.jbnuselibrary.repository.BookRepository;
import dt.team7.jbnuselibrary.repository.LoanRepository;
import dt.team7.jbnuselibrary.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;


@Service
@RequiredArgsConstructor
public class LoanServiceImpl implements LoanService {

    private final MemberRepository memberRepository;
    private final BookRepository bookRepository;
    private final LoanRepository loanRepository;

    @Override
    public List<LoanHistory> getAllLoanHistories() {
        return loanRepository.findAll();
    }

    @Override
    public LoanHistory getLoanHistoriesById(Long id) {
        return loanRepository.findById(id).orElse(null);
    }

    @Override
    public List<LoanHistory> getLoanHistoriesByMemberIdAndBookId(Long memberId, Long bookId) {
        Member member = memberRepository.findById(memberId).orElse(null);
        Book book = bookRepository.findById(bookId).orElse(null);

        return loanRepository.findByMemberAndBook(member, book);
    }

    @Override
    @Transactional
    public Boolean borrowBook(Long memberId, Long bookId) {
        Member member = memberRepository.findById(memberId).orElse(null);
        Book book = bookRepository.findById(bookId).orElse(null);

        assert book != null;
        if (book.getCount() <= book.getBorrowedCount()) {
            return false;
        }

        book.increaseBorrowedCount();

        LoanHistory loanHistory = LoanHistory.builder()
                .member(member)
                .book(book)
                .borrowDate(LocalDateTime.now())
                .build();

        loanRepository.save(loanHistory);

        return true;
    }

    @Override
    @Transactional
    public void returnBook(Long memberId, Long bookId) {
        Member member = memberRepository.findById(memberId).orElse(null);
        Book book = bookRepository.findById(bookId).orElse(null);

        assert book != null;
        book.decreaseBorrowedCount();
    }
}
