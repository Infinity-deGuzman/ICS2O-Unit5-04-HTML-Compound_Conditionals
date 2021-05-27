// Copyright (c) 2021 Infinity de Guzman All rights reserved
//
// Created by: Infinity de Guzman
// Created on: May 2021
// This file contains the JS functions for index.html

"use strict"

function doMathClicked () {
  // This code will check your age and the day of the week to determine how much you pay for your entry to the museum.

  const userAge = parseInt(document.getElementById('user-age').value)
	const userDay = document.getElementById('user-day').value

  if ((userAge > 12 && userAge < 21) || (userDay == "Tuesday" || userDay == "Thursday")) {
		document.getElementById('answer').innerHTML = "You are eligible for student pricing!";
	} else if (userAge < 5 || userAge > 95) {
		document.getElementById('answer').innerHTML = "You have free admission :)";
	} else {
		document.getElementById('answer').innerHTML = "You must pay regular pricing.";
	}
}
