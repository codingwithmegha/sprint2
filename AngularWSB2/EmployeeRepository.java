package springboot.batch2pm.awsb.emp.AngularWSB2;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import springboot.batch2pm.awsb.emp.AngularWSB2.model.Employee;
@Repository
public interface EmployeeRepository extends  JpaRepository<Employee, Long>{

}
