var inputFiles = document.querySelectorAll('input[type="file"].a-input');

Array.prototype.forEach.call(inputFiles, function(input) {
  var label = input.nextElementSibling;

  input.addEventListener('change', function(e) {
    var fileName = '';

    if (this.files && this.files.length > 1) {
      fileName = this.files.length + ' files selected';
    } else {
      fileName = e.target.value.split('\\').pop();
    }

    if (fileName) {
      label.innerHTML = fileName;
    }
  });
});
