package com.starfinaceproject.starfinanceproject.Repository;

import java.util.List;

import com.starfinaceproject.starfinanceproject.Entity.Kycproof;
//import com.starfinaceproject.starfinanceproject.Entity.Register;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;

public interface Kycrepo extends JpaRepository<Kycproof,Integer>{
    public List<Kycproof> findAll();

    public void deleteById(int pid);

    
}
