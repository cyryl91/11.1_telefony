function phone(name, model, color){
	this.name = name;
	this.model = model;
	this.color = color;
}
phone.prototype.printInfo = function(){
	console.log('nazaw telefonu: ' +this.name+ ', model: ' +this.model+ ', kolor: ' +this.color+'.');
}

var phone1 = new phone("Apple", 2250, "silver"),
	phone2 = new phone("iPhone", "s6", "black"),
	phone3 = new phone("OnePlus", "One", "blue");

phone1.printInfo();
phone1.printInfo();
phone3.printInfo();


//Samsung Galaxy S6
//iPhone 6s
//OnePlus One.