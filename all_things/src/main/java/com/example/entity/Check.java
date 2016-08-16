package com.example.entity;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;



import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
@Entity
@Table(name = "check_tab")
public class Check{
	

	private int idcheck;
	private String product;
	private String category;
	private String price;
	private String quantity;
	private String summa;
	private Expenses expense;
	
	@Id @GeneratedValue(strategy=GenerationType.AUTO)
	public int getIdcheck() {
		return idcheck;
	}
	public void setIdcheck(int idcheck) {
		this.idcheck = idcheck;
	}
	public String getProduct() {
		return product;
	}
	public void setProduct(String product) {
		this.product = product;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public String getQuantity() {
		return quantity;
	}
	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}
	public String getSumma() {
		return summa;
	}
	public void setSumma(String summa) {
		this.summa = summa;
	}
	
	@ManyToOne
    @JoinColumn(name = "expenses_tab_id")
    @JsonIgnore
	public Expenses getExpenses() {
		return expense;
	}
	public void setExpenses(Expenses expense) {
		this.expense = expense;
	}
	public Check() {
	}
	
	public Check(String product, String category, String price,
			String quantity, String summa) {
		super();
		this.product = product;
		this.category = category;
		this.price = price;
		this.quantity = quantity;
		this.summa = summa;
	}
	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Check [idcheck=");
		builder.append(idcheck);
		builder.append(", product=");
		builder.append(product);
		builder.append(", category=");
		builder.append(category);
		builder.append(", price=");
		builder.append(price);
		builder.append(", quantity=");
		builder.append(quantity);
		builder.append(", summa=");
		builder.append(summa);
		builder.append(", expense=");
		builder.append(expense);
		builder.append("]");
		return builder.toString();
	}
	
	
}
