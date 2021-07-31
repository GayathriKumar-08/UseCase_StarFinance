package com.starfinaceproject.starfinanceproject.Service;

//import java.util.List;

import javax.transaction.Transactional;

import com.starfinaceproject.starfinanceproject.Entity.Kycproof;
import com.starfinaceproject.starfinanceproject.Repository.Kycrepo;

import org.springframework.stereotype.Service;
@Service
@Transactional
public class KycImpl implements KycService{
    private Kycrepo krepo;
    @Override
    public Kycproof saveData(Kycproof kproof) {
        return krepo.save(kproof);
    }
    // @Override
    // public List<Kycproof> fetchAll() {
    //     return krepo.findAll();
    // }
    
}
