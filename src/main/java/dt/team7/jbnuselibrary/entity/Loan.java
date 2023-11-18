package dt.team7.jbnuselibrary.entity;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
public class Loan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    private Member member;

    @OneToOne
    private Book book;

    @Column
    private LocalDate loanDate;

    @Column
    private LocalDate returnDate;

    @Column
    private Boolean returned;
}
