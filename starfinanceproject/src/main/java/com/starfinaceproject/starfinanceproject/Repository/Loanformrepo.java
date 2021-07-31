package com.starfinaceproject.starfinanceproject.Repository;

import com.starfinaceproject.starfinanceproject.Entity.LoanForm;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface Loanformrepo extends JpaRepository<LoanForm,Long> {
    
}
