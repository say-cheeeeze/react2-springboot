package com.cheeeeze.reactstd.v1.web.user.service;

import java.util.List;

import com.cheeeeze.reactstd.v1.web.user.vo.UserInfo;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserRepository {
	
	List<UserInfo> listAll();
	
}
