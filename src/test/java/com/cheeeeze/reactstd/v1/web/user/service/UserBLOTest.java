package com.cheeeeze.reactstd.v1.web.user.service;

import java.util.List;

import com.cheeeeze.reactstd.v1.web.user.vo.UserInfo;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class UserBLOTest {
	
	@Autowired
	private UserBLO userBLO;
	
	@Test
	@DisplayName( "모든사용자조회" )
	void userListAll_TEST() {
		List<UserInfo> listAll = userBLO.getListAll();
		System.out.println( "listAll = " + listAll );
		
	}
}