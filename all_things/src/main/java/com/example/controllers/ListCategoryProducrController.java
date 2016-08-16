package com.example.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.ListCategoryProduct;
import com.example.repo.ListCategoryProductRepository;

@RestController
@RequestMapping("/expanses/listproduct")
public class ListCategoryProducrController {

	@Autowired
    private ListCategoryProductRepository list;

    @RequestMapping("")
    public List<ListCategoryProduct> persons() {
        return list.findAll();
    }

}
