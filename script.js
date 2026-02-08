function calculateArea() {
  let radius = prompt("Enter the radius of the circle:");
  let ans = Math.PI * radius ** 2;
  alert(`The area of the circle with radius ${radius} is ${ans.toFixed(2)}`);
}

calculateArea();
