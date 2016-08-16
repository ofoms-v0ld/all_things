package com.example.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entity.Expenses;


	public interface ExpensesRepository extends JpaRepository<Expenses, Integer>{
		
		public List<Expenses> findAllByOrderByIdDesc();
		public List<Expenses> findAllByOrderByDatepurchaseDesc();
	}
