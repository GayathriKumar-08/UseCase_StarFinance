package com.starfinaceproject.starfinanceproject.Service;

import java.util.List;

import javax.transaction.Transactional;

import com.starfinaceproject.starfinanceproject.Entity.GoldLoan;
import com.starfinaceproject.starfinanceproject.Entity.LoanForm;
import com.starfinaceproject.starfinanceproject.Repository.Loanformrepo;

import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
@Service
@Transactional
public class GoldloanImpl implements GoldloanService {

    private Loanformrepo lrepo;
    // private Goldloanrepo glrepo;
    @Override
    public void save(GoldLoan goldloan) {
       lrepo.save(goldloan);
        
    }


    @Override
    public void deleteKnNumber(Long kn) {
        // TODO Auto-generated method stub
        
    }


    // @Override
    // public List<LoanForm> listAll() {
       
    //     return lrepo.findAll(Sort.by("kn").ascending());
    // }
    
}
