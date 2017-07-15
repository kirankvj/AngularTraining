export class CalculaterModel{

	result : number = 0;
	number1 : number = 0;
	number2 : number = 0;

	onAddClick(){
		this.result = this.number1 + this.number2;
	}
	onSubstractClick(){
		this.result = this.number1 - this.number2;
	}
	onMultiplyClick(){
		this.result = this.number1 * this.number2;
	}
	onDivideClick(){
		this.result = this.number1 / this.number2;
	}
}