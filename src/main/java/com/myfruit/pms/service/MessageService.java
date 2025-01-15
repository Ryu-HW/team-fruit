package com.myfruit.pms.service;

import com.myfruit.pms.DTO.Message;
import com.myfruit.pms.mapper.MassageMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MessageService {

    @Autowired
    MassageMapper massageMapper;

    public void insertMessage(Message message){
        massageMapper.insertMessage(message);
    }
}
