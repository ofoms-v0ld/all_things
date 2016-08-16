package com.example.entity;

import java.util.Date;
import java.util.Set;






import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

//import javax.persistence.*;



@Entity
@Table(name = "expenses_tab")
public class Expenses{


	private int id;
	@Temporal(TemporalType.TIMESTAMP)
	private Date dateinput = new Date();
	private String datepurchase;
	private String supermarket;
	private String adresssupermarket;
	private String user;
	private Set<Check> checks;
	
	public Date getDateinput() {
		return dateinput;
	}
	public void setDateinput(Date dateinput) {
		this.dateinput = dateinput;
	}
	public String getDatepurchase() {
		return datepurchase;
	}
	public void setDatepurchase(String datepurchase) {
		this.datepurchase = datepurchase;
	}
	public String getSupermarket() {
		return supermarket;
	}
	public void setSupermarket(String supermarket) {
		this.supermarket = supermarket;
	}
	public String getAdresssupermarket() {
		return adresssupermarket;
	}
	public void setAdresssupermarket(String adresssupermarket) {
		this.adresssupermarket = adresssupermarket;
	}
	
	public String getUser() {
		return user;
	}
	public void setUser(String user) {
		this.user = user;
	}
	
	public Expenses() {}
	
	@Id @GeneratedValue(strategy=GenerationType.AUTO)
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	@OneToMany(mappedBy = "expenses", cascade = CascadeType.ALL)
	public Set<Check> getChecks() {
		return checks;
	}
	public void setChecks(Set<Check> checks) {
		this.checks = checks;
	}
	public Expenses(Date dateinput, String datepurchase, String supermarket,
			String adresssupermarket, String user, Set<Check> checks) {
		this.dateinput = dateinput;
		this.datepurchase = datepurchase;
		this.supermarket = supermarket;
		this.adresssupermarket = adresssupermarket;
		this.user = user;
		this.checks = checks;
	}
	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Expenses [id=");
		builder.append(id);
		builder.append(", dateinput=");
		builder.append(dateinput);
		builder.append(", datepurchase=");
		builder.append(datepurchase);
		builder.append(", supermarket=");
		builder.append(supermarket);
		builder.append(", adresssupermarket=");
		builder.append(adresssupermarket);
		builder.append(", user=");
		builder.append(user);
		builder.append(", checks=");
		builder.append(checks);
		builder.append("]");
		return builder.toString();
	}
	
	
}
