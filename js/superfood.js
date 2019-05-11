
var cards = document.getElementsByClassName('card');
var foodList = [];

for (var i = 0; i < cards.length; i++) {

//creates list with food items
  var foodTitle = cards[i].querySelector('.food-title');
  var foodName = foodTitle.innerHTML.toLowerCase();
  foodList.push(foodName);

/*if 'More' button is clicked, '.food-about' section is displayed for earch
card*/
  var button = cards[i].querySelector('.food-button');
  button.addEventListener('click', function(event) {
    var currentButton = event.target;
    var currentCard = currentButton.parentNode;
    var currentAbout = currentCard.querySelector('.food-about');

    if (currentButton.innerHTML == 'More') {
      currentAbout.style.display = 'Block';
      currentButton.innerHTML = 'Hide';
    } else {
      currentAbout.style.display = 'None';
      currentButton.innerHTML = 'More';
    }
  })
}

//enables filtering food items
var searchBar = document.getElementById('search-bar');
searchBar.addEventListener('keyup', function(event){
  var text = searchBar.value;
  for (var i = 0; i < cards.length; i++) {
    if (foodList[i].indexOf(text) < 0) {
      cards[i].style.display = 'None';
    } else {
      cards[i].style.display = 'Block';
    }
  }
});

//opens the popup window which contains form
document.getElementById('order-button').addEventListener('click',
  function() {
    document.querySelector('.bg-modal').style.display = 'flex';
  });

//closes the popup window which contains form
document.querySelector('.close').addEventListener('click',
  function() {
    document.querySelector('.bg-modal').style.display = 'none';
  })

/* if a checkbox near the'I wan't a picnic blanket:' is ticked, the section with
 the color selection is displayed*/
  var checkbox = document.getElementById('blanket-checkbox');
  var sectionDiv = document.getElementById('blanket-selection');
  checkbox.addEventListener('change', function(event) {
      if (checkbox.checked == true) {
        sectionDiv.style.display = 'Block';
      } else {
        sectionDiv.style.display = 'None';
      }
  });

/*if all input fields are populated, all the order information are displaeyed in
 the allert window after submiting the form*/
  var orderForm = document.getElementById('order-form');
  orderForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var firstName = orderForm.elements[0].value;
    var lastName = orderForm.elements[1].value;
    var address = orderForm.elements[2].value;
    var phone = orderForm.elements[3].value;
    var email = orderForm.elements[4].value;
    var wantsBlanket = orderForm.elements[5].checked;

    if (firstName == '' || lastName == '' || address == '' || phone == ''
      || email == '') {
      alert('All fields must be populated!');
      return;
      }

    if (wantsBlanket) {
      var blanketText = orderForm.elements[6].value + ' blanket';
    } else {
      var blanketText = 'No blanket';
    }

    alert('The order was successfull \n' +
      'Your basket will be delivered to your address whihin two days \n' +
      'Order info: \n' +
      firstName + '\n' +
      lastName + '\n' +
      address + '\n' +
      phone + '\n' +
      email + '\n' +
      blanketText + '\n')
  })
