package com.example.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Product {
	
	private Integer id;
	private String product;
	private ListCategoryProduct listcategoryproduct;
	
	@Id @GeneratedValue(strategy=GenerationType.AUTO)
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	
	public String getProduct() {
		return product;
	}
	public void setProduct(String product) {
		this.product = product;
	}
	
	@ManyToOne
    @JoinColumn(name = "listcategoryproduct_tab_id")
    @JsonIgnore
	public ListCategoryProduct getListcategoryproduct() {
		return listcategoryproduct;
	}
	public void setListcategoryproduct(ListCategoryProduct listcategoryproduct) {
		this.listcategoryproduct = listcategoryproduct;
	}
}
