package com.myfruit.pms.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HelloController {

    @GetMapping("/hello")
    public String hello(){
        return "common/hello"; // hello.html
    }

    @ResponseBody
    @GetMapping("world")
    public String world(){
        return "world";
    }

}
