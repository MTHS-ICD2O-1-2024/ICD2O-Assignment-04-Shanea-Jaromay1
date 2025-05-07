// Copyright (c) 2025 Shanea Jaromay All rights reserved
//
// Created by: Shanea Jaromay
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function generates random positive or negative number
 */
// eslint-disable-next-line no-unused-vars

function calculatePrice() {
  // input
  const optionPositive = document.getElementById("option-positive").checked

  // generate a new random number every time
  const randomNumber = Math.floor(Math.random() * 6) + 1

  // output
  if (optionPositive === true) {
    document.getElementById("answer").innerHTML =
      "Your random number is: " + randomNumber
  } else {
    const randomNegativeNumber = randomNumber * -1
    document.getElementById("answer").innerHTML =
      "Your random number is: " + randomNegativeNumber
  }
}
