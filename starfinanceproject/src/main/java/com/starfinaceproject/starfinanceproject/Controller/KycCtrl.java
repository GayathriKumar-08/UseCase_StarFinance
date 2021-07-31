package com.starfinaceproject.starfinanceproject.Controller;

import java.util.List;

import com.starfinaceproject.starfinanceproject.Entity.Kycproof;
import com.starfinaceproject.starfinanceproject.Entity.ProofNumberNotFoundException;
import com.starfinaceproject.starfinanceproject.Repository.Kycrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class KycCtrl {
    @Autowired
    private Kycrepo krepo;

    // @Autowired
    // private KycService kservice;

    @PostMapping(value = "/kycproof")
    public ResponseEntity<Kycproof> submitData(@RequestBody Kycproof kproof) {
        System.out.println("Insertion method!!!");
        System.out.println(kproof);
      if(kproof.getTxt()==0 || kproof.getProof()==" "){
          throw new ProofNumberNotFoundException();
      }
      else{
        krepo.save(kproof);
        System.out.println("Employee details:" + kproof);
        System.out.println("Successfully inserterd");
        return new ResponseEntity<Kycproof>(kproof, HttpStatus.CREATED);
      }
    }

    @GetMapping(value = "/kycproof")
    public ResponseEntity<List<Kycproof>> fetchAllKYC() {
        return new ResponseEntity<List<Kycproof>>(krepo.findAll(), HttpStatus.OK);
    }

    @DeleteMapping(value = "/kycproof/{pid}")
    public void DeletePid(@PathVariable int pid) {
        krepo.deleteById(pid);
        System.out.println("deleted successfully");
    }

}
