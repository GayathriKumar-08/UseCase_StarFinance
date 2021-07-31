package com.starfinaceproject.starfinanceproject.Service;

import com.starfinaceproject.starfinanceproject.Entity.GoldLoan;

public interface GoldloanService {
    public void save(GoldLoan goldloan);

    public void deleteKnNumber(Long kn);

    // public void deleteById(Long kn);
}
