/**
*
*
*/
package com.example.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class Todo {
	@Id @GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	private String description;
	@Temporal(TemporalType.TIMESTAMP)
	private Date createdOn = new Date();
	
	public Todo() {
	}
	
	public Todo(Integer id, String description, Date createdOn) {
		this.id = id;
		this.description = description;
		this.createdOn = createdOn;
	}

	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Date getCreatedOn() {
		return createdOn;
	}
	public void setCreatedOn(Date createdOn) {
		this.createdOn = createdOn;
	}
	
	
}
