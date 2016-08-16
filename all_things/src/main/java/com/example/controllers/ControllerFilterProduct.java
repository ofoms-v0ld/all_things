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
import com.example.entity.Todo;
import com.example.repo.ExpensesRepository;
import com.example.util.WrapExpanses;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@RequestMapping("/expanses")
public class ControllerFilterProduct {

	@Autowired ExpensesRepository expensesrepository;
	
	@RequestMapping("")
	public List<Expenses> expenses() {
		return expensesrepository.findAllByOrderByDatepurchaseDesc();
	}
	
	@RequestMapping(value="/{id}", method=RequestMethod.GET)
    public Expenses get(@PathVariable("id") Integer id) {
	return expensesrepository.findOne(id);
    }

	@RequestMapping(value="", method=RequestMethod.POST)
    public List<Expenses> create(HttpServletRequest request) throws IOException {
		 // 1. get received JSON data from request
		BufferedReader br = new BufferedReader(new InputStreamReader(request.getInputStream()));
        String json = "";
        if(br != null){
            json = br.readLine();
        }
        
        // 2. initiate jackson mapper
        ObjectMapper mapper = new ObjectMapper();
 
        // 3. Convert received JSON to Article
        WrapExpanses[] wrapexpanses = mapper.readValue(json, WrapExpanses[].class);
        
        System.out.println("json "+json);
        // длинна всегда будет приходить в единственном количестве 
        Expenses[] exp = wrapexpanses[wrapexpanses.length-1].getExpenses();
        Expenses indb = exp[0];
        indb.setUser("user");
        
        Set<Check> ls = new HashSet<Check>();
        for(WrapExpanses b : wrapexpanses)
        {
        	if(b.getCheck() != null){
        		b.getCheck().setExpenses(indb);
        		ls.add(b.getCheck());
        	}
        }
        
        indb.setChecks(ls);
        Set<Expenses>  vv = new HashSet<Expenses>();
		vv.add(indb);
		return this.expensesrepository.save(vv);
	}
	
	@RequestMapping(value="/{id}", method=RequestMethod.PUT)
    public Expenses update(@RequestBody Expenses todo) {
		
		Set<Check> ls = todo.getChecks();
		Iterator<Check> it = ls.iterator();
		while(it.hasNext())
		{
			Check check = it.next();
			check.setExpenses(todo);
		}
	return this.expensesrepository.save(todo);
    }
	
	@RequestMapping(value="/create", method=RequestMethod.GET)
    public List<Expenses> create() {
		
		Check check = new Check("Молоко", "Молочка", "35", "2", "70");
		Check check2 = new Check("Какао", "Бакалея", "70", "1", "70");

		Set<Check> ls = new HashSet<Check>();
		ls.add(check);
		ls.add(check2);
		Expenses expenses = new Expenses(new Date(), "дата", "Быстроном", "пл.Маркса", "user", ls);
		
		check.setExpenses(expenses);
		check2.setExpenses(expenses);
		Set<Expenses>  vv = new HashSet<Expenses>();
		vv.add(expenses);
		
	return this.expensesrepository.save(vv);
   }
}
