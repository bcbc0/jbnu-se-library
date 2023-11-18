package dt.team7.jbnuselibrary.repository;
import dt.team7.jbnuselibrary.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
public interface BookRepository extends JpaRepository<Book, Long> {
}
