package dt.team7.jbnuselibrary.service;

import dt.team7.jbnuselibrary.entity.LoanHistory;

import java.util.List;

public interface LoanService {
    List<LoanHistory> getAllLoanHistories();

    LoanHistory getLoanHistoriesById(Long id);

    List<LoanHistory> getLoanHistoriesByMemberIdAndBookId(Long memberId, Long bookId);

    Boolean borrowBook(Long bookId);

    void returnBook(Long bookId);
}
