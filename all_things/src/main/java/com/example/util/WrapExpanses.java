package com.example.util;

import java.util.Arrays;
import java.util.List;

import com.example.entity.Check;
import com.example.entity.Expenses;

public class WrapExpanses {

	
	private Check check;
	private Expenses[] expenses;
	
	public Check getCheck() {
		return check;
	}
	public void setCheck(Check check) {
		this.check = check;
	}
	public Expenses[] getExpenses() {
		return expenses;
	}
	public void setExpenses(Expenses[] expenses) {
		this.expenses = expenses;
	}
	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("WrapExpanses [check=");
		builder.append(check);
		builder.append(", expenses=");
		builder.append(Arrays.toString(expenses));
		builder.append("]");
		return builder.toString();
	}
		}
