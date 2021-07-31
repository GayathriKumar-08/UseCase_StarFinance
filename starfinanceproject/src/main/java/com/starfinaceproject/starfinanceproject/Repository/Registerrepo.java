package com.starfinaceproject.starfinanceproject.Repository;

import java.util.List;

import com.starfinaceproject.starfinanceproject.Entity.Register;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Registerrepo extends JpaRepository<Register,Long> {
    
    public List<Register> findAll();
}
