package com.starfinaceproject.starfinanceproject.Service;

import javax.transaction.Transactional;

import com.starfinaceproject.starfinanceproject.Entity.GoldLoan;
import com.starfinaceproject.starfinanceproject.Repository.Loanformrepo;

import org.springframework.stereotype.Service;
@Service
@Transactional
public class GoldloanImpl implements GoldloanService {

    private Loanformrepo lrepo;
    @Override
    public void save(GoldLoan goldloan) {
       lrepo.save(goldloan);
        
    }


    @Override
    public void deleteKnNumber(Long kn) {
        // TODO Auto-generated method stub
        
    }
    
}
