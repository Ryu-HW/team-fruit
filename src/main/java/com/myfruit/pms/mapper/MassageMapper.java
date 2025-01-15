package com.myfruit.pms.mapper;

import com.myfruit.pms.DTO.Message;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MassageMapper {

    public void insertMessage(Message message);
}
