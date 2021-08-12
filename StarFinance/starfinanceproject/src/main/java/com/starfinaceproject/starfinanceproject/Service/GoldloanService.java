package com.starfinaceproject.starfinanceproject.Service;

import java.util.List;

import com.starfinaceproject.starfinanceproject.Entity.GoldLoan;
import com.starfinaceproject.starfinanceproject.Entity.LoanForm;

public interface GoldloanService {
    public void save(GoldLoan goldloan);

    public void deleteKnNumber(Long kn);

    // public void deleteById(Long kn);
    // public List<LoanForm> listAll();
   
}
