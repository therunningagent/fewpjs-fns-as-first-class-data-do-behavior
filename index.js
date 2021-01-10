/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeStr){

  const hour = parseInt(timeStr)

  if(hour >= 13 && hour <= 17){
    return 'Good Afternoon'
  } else if(hour < 12){
    return 'Good Morning'
  } else {
    return 'Good Evening'
  }
}


/* Write your implementation of displayMessage() */

function displayMessage(time){
  const Update = document.querySelector('#greeting')
  Update.textContent = time
}