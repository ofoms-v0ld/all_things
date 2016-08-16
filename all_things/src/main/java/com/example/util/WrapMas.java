package com.example.util;

import com.example.entity.Check;
import com.example.entity.Expenses;

public class WrapMas {
	
	Expenses expenses;
	Check check;
	public Expenses getExpenses() {
		return expenses;
	}
	public void setExpenses(Expenses expenses) {
		this.expenses = expenses;
	}
	public Check getCheck() {
		return check;
	}
	public void setCheck(Check check) {
		this.check = check;
	}
	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("WrapMas [expenses=");
		builder.append(expenses);
		builder.append(", check=");
		builder.append(check);
		builder.append("]");
		return builder.toString();
	} 

}
