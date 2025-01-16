package com.myfruit.pms.controller;

import com.myfruit.pms.DTO.Message;
import com.myfruit.pms.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class MessageController {

    @Autowired
    MessageService messageService;

    @GetMapping("/create/msg")
    public String createPage(){
        return "message/create";
    }

    @PostMapping("/msg")
    @ResponseBody
    public String createMessage(@RequestBody Message message){
        messageService.insertMessage(message);
        return "저장완료";
    }



}
