package com.starfinaceproject.starfinanceproject.Controller;

import java.util.List;

import com.starfinaceproject.starfinanceproject.Entity.Register;
import com.starfinaceproject.starfinanceproject.Repository.Registerrepo;
//import com.starfinaceproject.starfinanceproject.Service.RegisterservImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class RegisterCtrl {
    @Autowired
    private Registerrepo regrepo;

    // @Autowired
    // private RegisterservImpl rservice;
   
    @PostMapping(value="/register")
    public ResponseEntity<Register> submitData(@RequestBody Register reg)
    {
        try{
         regrepo.save(reg);
            return new ResponseEntity<>(reg,HttpStatus.CREATED);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
        
    }
    
    @GetMapping(value = "/register")
    public ResponseEntity<List<Register>> fetchAllRegister() {
        return new ResponseEntity<List<Register>>(regrepo.findAll(), HttpStatus.OK);
    }

    
    // @GetMapping(value="/register")
    // public List<Register> list() {
    //     return rservice.fetchAllRegister();
    // }
    
    // @GetMapping(value = "/register")
    // public ResponseEntity<List<Register>> fetchAll()
    // {
    //     return new ResponseEntity<List<Register>>(rservice.fetchAllRegister(),HttpStatus.OK);
    // }
}
