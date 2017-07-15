import { Component } from '@angular/core';
import { CalculaterModel } from './CalculaterModel'

@Component({
	selector : 'calculator-two',
	template : `
		<h1>Calculator</h1>
		<hr>
		<input type="number" [(ngModel)]="model.number1">
		<select [(ngModel)]="operation">
		<option value="onAddClick">Add</option>
		<option value="onSubstractClick">Subtract</option>
		<option value="onMultiplyClick">Multiply</option>
		<option value="onDivideClick">Divide</option>
		</select>
		<input type="number" [(ngModel)]="model.number2" >
		<input type="button" value="Calculate" (click)=model[operation]()>
		<div>{{model.result}}</div>
		`
})
export class NewCalculatorComponent{
		model: CalculaterModel = new CalculaterModel();
		operation : string = '';

}

