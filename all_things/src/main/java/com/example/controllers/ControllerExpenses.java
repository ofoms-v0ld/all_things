package com.example.controllers;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Date;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Check;
import com.example.entity.Expenses;
import com.example.entity.ListCategoryProduct;
import com.example.entity.Todo;
import com.example.repo.ExpensesRepository;
import com.example.repo.ListCategoryProductRepository;
import com.example.util.WrapExpanses;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@RequestMapping("/product")
public class ControllerExpenses {

	@Autowired ListCategoryProductRepository pruductrepository;
	
	@RequestMapping("")
	public List<ListCategoryProduct> expenses() {
		return pruductrepository.findAll();
	}
	
}
