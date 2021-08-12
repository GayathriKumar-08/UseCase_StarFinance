package com.starfinaceproject.starfinanceproject.Controller;

import com.starfinaceproject.starfinanceproject.Entity.MessageClass;
import com.starfinaceproject.starfinanceproject.Repository.Messagerepo;
// import com.starfinaceproject.starfinanceproject.Service.MessageServ;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class MessageCtrl {
    // @Autowired
    // private MessageServ mservice;

    @Autowired
    private Messagerepo mrepo;
    @PostMapping(value="/knnum")
    public ResponseEntity<MessageClass> submitData(@RequestBody MessageClass msg)
    {
        System.out.println("Insertion method!!!");
        System.out.println(msg);

                       mrepo.save(msg);
                System.out.println("Employee details:" + msg);
                System.out.println("Successfully inserterd");
                return new ResponseEntity<MessageClass>(msg, HttpStatus.CREATED);
    
        
    }
    
}
