package com.cheeeeze.reactstd.v1.web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping( "/api")
public class HomeController {
	
	@GetMapping( "/hello" )
	public String sayHello() {
		return "port 8080 response";
	}
}
