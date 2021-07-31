package com.starfinaceproject.starfinanceproject.Controller;

import java.util.List;

// import java.util.List;
// import java.util.Optional;

import com.starfinaceproject.starfinanceproject.Entity.GoldLoan;
import com.starfinaceproject.starfinanceproject.Entity.KNnotFoundException;
import com.starfinaceproject.starfinanceproject.Entity.LoanForm;
import com.starfinaceproject.starfinanceproject.Repository.Goldloanrepo;
import com.starfinaceproject.starfinanceproject.Service.GoldloanService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class GoldLoanCtrl {
    @Autowired
    private Goldloanrepo grepo;
    @Autowired
    private GoldloanService gservice;

    @PostMapping("/goldloan")
    public void add(@RequestBody GoldLoan goldLoan) {
        if(goldLoan.getKn()==0)
        {
            throw new KNnotFoundException();
        }
        else{
        grepo.save(goldLoan);
        System.out.println("Inserted Successfully....");
        }
    }

    @GetMapping("/goldloan")
    public ResponseEntity<List<LoanForm>> fetchAll() {
        return new ResponseEntity<List<LoanForm>>(grepo.findAll(), HttpStatus.OK);
    }

    @DeleteMapping(value = "/goldloan/{kn}")
    public void deleteLoan(@PathVariable Long kn) {
        grepo.deleteById(kn);
        System.out.println("deleted successfully....");
    }

}
