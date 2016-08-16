package com.example.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entity.Listmagazine;

public interface ListMagazineRepository extends JpaRepository<Listmagazine, Integer> {

}
