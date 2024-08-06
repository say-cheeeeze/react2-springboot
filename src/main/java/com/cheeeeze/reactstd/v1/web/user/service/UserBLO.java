package com.cheeeeze.reactstd.v1.web.user.service;

import java.util.List;

import com.cheeeeze.reactstd.v1.web.user.vo.UserInfo;
import org.springframework.stereotype.Service;

@Service
public class UserBLO implements UserService {
	
	private final UserRepository repository;
	
	public UserBLO( UserRepository repository ) {
		this.repository = repository;
	}
	
	@Override
	public List<UserInfo> getListAll() {
		return repository.listAll();
	}
}
