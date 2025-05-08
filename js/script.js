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
  const TAX_RATE = 0.13
  let subTotal = 0
  let bagType = ""

  // Input
  const optionSingle = document.getElementById('option-single-bag').checked
  const optionFamily = document.getElementById('option-family-bag').checked
  const userCandy = document.getElementById('user-candy').value

  // Process
  if (optionSingle) {
    subTotal = 5
    bagType = "Single-size bag"
  } else if (optionFamily) {
    subTotal = 15
    bagType = "Family-size bag"
  } else {
    document.getElementById("answer").innerHTML = "Please select a bag size."
    return
  }

  // Tax calculation
  const tax = subTotal * TAX_RATE
  const totalPrice = subTotal + tax

  // Output
  document.getElementById("answer").innerHTML = 
    'You selected ' + userCandy + ' in a ' + bagType + '.' <br>
  'Sub Total: $' +
  subTotal.toFixed(2) +
  '<br>' +
  'Tax: $' +
  tax.toFixed(2) +
  '<br>' +
  'Total Price: $' +
  totalPrice.toFixed(2)
}
