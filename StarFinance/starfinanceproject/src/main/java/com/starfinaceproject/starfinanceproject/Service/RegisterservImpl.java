package com.starfinaceproject.starfinanceproject.Service;

//import java.util.List;

import javax.transaction.Transactional;

import com.starfinaceproject.starfinanceproject.Entity.Register;
import com.starfinaceproject.starfinanceproject.Repository.Registerrepo;

import org.springframework.stereotype.Service;

@Service
@Transactional
public class RegisterservImpl implements RegisterServ {
   
    private Registerrepo repo;

    @Override
    public Register saveData(Register reg) {
       
        return repo.save(reg);
    }
    // @Override
    // public List<Register> fetchAllRegister() {
      
    //     return repo.findAll();
    // }
    
}
