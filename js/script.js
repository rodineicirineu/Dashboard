/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn-dashboard')) {
      var dropdowns = document.getElementsByClassName("btndropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  /* Range Slider */
  var inputLeft = document.getElementById("input-left");
  var inputRight = document.getElementById("input-right");
  
  var thumbLeft = document.querySelector(".slider > .thumb.left");
  var thumbRight = document.querySelector(".slider > .thumb.right");
  var range = document.querySelector(".slider > .range");
  
  function setLeftValue() {
    var _this = inputLeft,
      min = parseInt(_this.min),
      max = parseInt(_this.max);
  
    _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);
  
    var percent = ((_this.value - min) / (max - min)) * 100;
  
    thumbLeft.style.left = percent + "%";
    range.style.left = percent + "%";
  }
  setLeftValue();
  
  function setRightValue() {
    var _this = inputRight,
      min = parseInt(_this.min),
      max = parseInt(_this.max);
  
    _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);
  
    var percent = ((_this.value - min) / (max - min)) * 100;
  
    thumbRight.style.right = (100 - percent) + "%";
    range.style.right = (100 - percent) + "%";
  }
  setRightValue();
  
  
  inputLeft.addEventListener("input", setLeftValue);
  inputRight.addEventListener("input", setRightValue);
  
  inputLeft.addEventListener("mouseover", function() {
    thumbLeft.classList.add("hover");
  });
  inputLeft.addEventListener("mouseout", function() {
    thumbLeft.classList.remove("hover");
  });
  inputLeft.addEventListener("mousedown", function() {
    thumbLeft.classList.add("active");
  });
  inputLeft.addEventListener("mouseup", function() {
    thumbLeft.classList.remove("active");
  });
  
  inputRight.addEventListener("mouseover", function() {
    thumbRight.classList.add("hover");
  });
  inputRight.addEventListener("mouseout", function() {
    thumbRight.classList.remove("hover");
  });
  inputRight.addEventListener("mousedown", function() {
    thumbRight.classList.add("active");
  });
  inputRight.addEventListener("mouseup", function() {
    thumbRight.classList.remove("active");
  });



  var slider1 = document.getElementById("input-left");
  var output1 = document.getElementById("left");
  var slider = document.getElementById("input-right");
  var output = document.getElementById("right");
  output.innerHTML = slider.value;
  output1.innerHTML = slider1.value;

  slider1.oninput = function() {
    output1.innerHTML = this.value;
  }
  
  slider.oninput = function() {
    output.innerHTML = this.value;
  }


  /* Pagination */
  var items = $($('.card '));
  var numItems = 20;
  var perPage = 4;

  items.slice(perPage).hide();

  $('#pagination-container').pagination({
    items : numItems,
    itemsOnPage : perPage,
    prevText: "<",
    nextText: ">",
    onPageClick : function (pageNumber) {
      var showFrom = perPage * (pageNumber - 1);
      var showTo = showFrom + perPage;
      items.hide().slice(showFrom, showTo).show(500);
    }
  })

  /* Calendar */
  var calendar = flatpickr('#flatpickr');

  /* Menu */
 function menu() {
    const el = document.querySelector(".side-bar");
    if (el.classList.contains("showMenu")) {
      el.classList.remove("showMenu")
    }
    else
      el.classList.add("showMenu")
  }
