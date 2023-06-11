package springboot.batch2pm.awsb.emp.AngularWSB2.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import springboot.batch2pm.awsb.emp.AngularWSB2.EmployeeRepository;
import springboot.batch2pm.awsb.emp.AngularWSB2.model.Employee;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class EmployeeController {
	 
	@Autowired
	
	    private EmployeeRepository ER;
	
	
	@PostMapping("/save")
	public void saveEmployee(@RequestBody Employee em) {
		ER.save(em);
		}
	@RequestMapping("/details")
	    public List < Employee > getUsers() {
	        return this.ER.findAll();
	        
	        
	    }
	    @RequestMapping("/details/{id}")
	    public Employee getById(@PathVariable("id")Long id) {
	    return ER.findById(id).get();
	    
}
   
	    @PutMapping("/update/{id}")
	    public ResponseEntity updateEmployee ( @PathVariable("id")Long id,@RequestBody Employee em) {
	    	Employee e1= ER.findById(id).get();
	    	
	    	e1.setFirstName(em.getFirstName());
	    	e1.setLastName(em.getLastName());
	    	e1.setEmailId(em.getEmailId());
	    	ER.save(e1);
			return new ResponseEntity(HttpStatus.OK);
	    
    		}

	    
	    @DeleteMapping("/delete/{id}")
	    public ResponseEntity deleteEmployee(@PathVariable("id")long id) {
	    	ER.deleteById(id);
	    	return new ResponseEntity(HttpStatus.OK);
	    }
}