import { Component } from '@angular/core';
import { CalculaterModel } from './CalculaterModel'

@Component({
	selector: 'calculater',
	template: `
		<h1>Calculator</h1>
		<hr>
		<input type="number" [(ngModel)]="model.number1" >
		<input type="number" [(ngModel)]="model.number2" >
		<input type="button" value="Add" (click)="model.onAddClick()">
		<input type="button" value="Subtract" (click)="model.onSubstractClick()">
		<input type="button" value="Multiply" (click)="model.onMultiplyClick()">
		<input type="button" value="Divide" (click)="model.onDivideClick()">
		<div>{{model.result}}</div>
		`
})
export class CalculaterComponent{
	model: CalculaterModel = new CalculaterModel();
}