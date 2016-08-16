/**
 *
 *
 */
package com.example.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.entity.Todo;
import com.example.repo.TodoRepository;

@RestController
@RequestMapping("/todos")
public class TodoController {

    @Autowired
    private TodoRepository todoRepository;

    @RequestMapping("")
    public List<Todo> persons() {
        return todoRepository.findAll();
    }
    @RequestMapping(value="/{id}", method=RequestMethod.GET)
    public Todo get(@PathVariable("id") Integer id) {
	return this.todoRepository.findOne(id);
    }
    @RequestMapping(value="", method=RequestMethod.POST)
    public Todo create(@RequestBody Todo todo) {
	return this.todoRepository.save(todo);
   }
    @RequestMapping(value="/{id}", method=RequestMethod.PUT)
    public Todo update(@RequestBody Todo todo) {
	return this.todoRepository.save(todo);
    }
    
    @RequestMapping(value="/{id}", method=RequestMethod.DELETE)
    public void delete(@PathVariable("id") Integer id) {
	this.todoRepository.delete(id);
    }
}
