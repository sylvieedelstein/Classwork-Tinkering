//hotels.js contains the script used by hotels.html in order to create a reactive webpage.
//This document contains a variety of TODOs that must be filled in by you (the student!) in order for the program to function.


//TODO: create a Property class.
class Property {
	constructor(name) {
		this.house = 0;
		this.hotel = 0;
	}
	//TODO: create a constructor that takes in the property name as a field, and initializes counters for houses and hotels with a default
	//		value of 0.

	//TODO: fill in with a function that increments the instance's house count if the current number of houses is less than 4,
	buildHouse() {
		if (this.house < 4) {
			this.house += 1;
			document.getElementById("house_text").innerHTML = "You bought a house. You have " + this.house + " this many houses.";
			document.getElementById("property_text").innerHTML = "You have " + this.house + " house(s)" + "and " + this.hotel + " hotel(s)";
		} else {
			document.getElementById("house_text").innerHTML = "You have the maximum number of houses.";
			document.getElementById("property_text").innerHTML = "You have " + this.house + " house(s)" + "and " + this.hotel + " hotel(s)";

		}
	//		and sets the appropriate "property_text" and "house_text" using getElementById if so. If the number of houses is four or
	//		more, set the appropriate "property_text" notifying the user that the action is invalid.
	}

	buildHotel() {
		if (this.house >= 4) {
			this.hotel += 1;
			this.house = 0;
			document.getElementById("house_text").innerHTML = "Congrats! Your house has become a hotel!";
			document.getElementById("property_text").innerHTML = "You have " + this.house + " house(s)" + "and " + this.hotel + " hotel(s)";
		} else {
			document.getElementById("house_text").innerHTML = "Sorry! You cannot currently convert houses to hotels.";
			document.getElementById("property_text").innerHTML = "You have " + this.house + " house(s)" + "and " + this.hotel + " hotel(s)";
		}
	//TODO: create a buildHotel() function that increments the instance's hotel count and decrements the house count if the current number
	//		of houses on the property is greater than or equal to four. Make sure to set the appropriate "property_text" with a success 
	//		message and an updated "hotel_text" and "house_text" count. Otherwise, set "property_text" notifying the user that the action
	//		is invalid.
	}
}

let VIRGINIA_AVENUE = new Property("VIRGINIA_AVENUE");

//TODO: create an instance of the Property class named VIRGINIA_AVENUE. 
