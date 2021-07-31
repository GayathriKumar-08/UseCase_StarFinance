package com.starfinaceproject.starfinanceproject.Service;

import javax.transaction.Transactional;

import com.starfinaceproject.starfinanceproject.Entity.MessageClass;
import com.starfinaceproject.starfinanceproject.Repository.Messagerepo;

import org.springframework.stereotype.Service;
@Service
@Transactional
public class MessageImpl implements MessageServ {

    private Messagerepo mrepo;
    @Override
    public void saveDate(MessageClass mclass) {
         mrepo.save(mclass);
    }
    
}
