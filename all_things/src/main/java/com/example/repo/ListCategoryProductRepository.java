package com.example.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entity.ListCategoryProduct;

public interface ListCategoryProductRepository extends JpaRepository<ListCategoryProduct, Integer> {

}
