package com.starfinaceproject.starfinanceproject.Repository;

import com.starfinaceproject.starfinanceproject.Entity.MessageClass;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface Messagerepo extends JpaRepository<MessageClass,Long> {
    
}
