/**
*
*
*/
package com.example.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entity.Todo;



public interface TodoRepository extends JpaRepository<Todo, Integer>{

}
