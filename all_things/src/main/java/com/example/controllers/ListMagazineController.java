package com.example.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Listmagazine;
import com.example.repo.ListMagazineRepository;

@RestController
@RequestMapping("/expanses/listmagazine")
public class ListMagazineController {

	@Autowired
    private ListMagazineRepository listMagazineRepository;

    @RequestMapping("")
    public List<Listmagazine> persons() {
        return listMagazineRepository.findAll();
    }

}
