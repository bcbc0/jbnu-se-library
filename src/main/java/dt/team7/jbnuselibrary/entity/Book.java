package dt.team7.jbnuselibrary.entity;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
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
}
