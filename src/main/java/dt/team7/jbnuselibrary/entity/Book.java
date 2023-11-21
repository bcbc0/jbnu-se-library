package dt.team7.jbnuselibrary.entity;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String title;

    @Column
    private String link;

    @Column
    private String image;

    @Column
    private String author;

    @Column
    private String publisher;

    @Column
    private LocalDate pubDate;

    @Column
    private String isbn;

    @Column
    private String description;

    @Column
    private String lecture;

    @Column
    private Long count;

    @Column
    private Long borrowedCount;

    public void increaseBorrowedCount() {
        this.borrowedCount++;
    }

    public void decreaseBorrowedCount() {
        this.borrowedCount--;
    }
}
