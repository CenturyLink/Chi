var numberInputs = document.querySelectorAll('input[type=number].a-input');

for (var i = 0; i < numberInputs.length; i++) {
  var input = numberInputs[i];
  var wrapper = input.parentElement;
  if (!wrapper.classList.contains('a-inputWrapper')) { continue; }

  var buttons = wrapper.querySelectorAll('button');
  if (buttons.length !== 2) { continue; }

  var incrementButton = buttons[0];
  var decrementButton = buttons[1];
  incrementButton.addEventListener('click', function() { this.stepUp() }.bind(input));
  decrementButton.addEventListener('click', function() { this.stepDown() }.bind(input));
};
