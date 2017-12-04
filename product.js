  /*
      Script name: product.js
      Description: Used to display animals and related info from an XML file
      Author: 
      Date Created:
      */
  function display_animals() 
  {
    //var searchText = document.getElementById("search_text").value;
    // Code that you want executed once the DOM has loaded goes here.
    //grab the elements on html page  
    var section = document.getElementById("content");
    var ul = document.getElementById("tourpack");

    //created variable to hold the text information from the search input
    //var searchButton = document.getElementById("search_button");
    //var showAll = document.getElementById("show_all_button");

    // made shortcut to get all the elements from xml
    var tour = loadXML("tourpackages.xml");
    var tourRoot = tour.documentElement;
    var safari = tourRoot.children;
      //we can loop through each element item 
    var xmlElements = ["package_name","tour_name","description","image"];

      for (var i = 0; i < safari.length; i++) 
      {
        // get the xml node (element) we want:                             // use can use textContent.
        var packageName = safari[i].getElementsByTagName("package_name")[0].firstChild.nodeValue
        var tour = safari[i].getElementsByTagName("tour_name")[0].firstChild.nodeValue
        var description = safari[i].getElementsByTagName("description")[0].firstChild.nodeValue
          var images = safari[i].getElementsByTagName("image");

          var animalItem = document.createElement("li");
          var nameH3 = document.createElement("h3");
          var nameH4 = document.createElement("h4");
          var blockQuote = document.createElement("blockquote");
          var style = document.createElement("style");

          nameH3.innerHTML = packageName;
          nameH4.innerHTML = tour;
          blockQuote.innerHTML = description;
          
          animalItem.appendChild(nameH3);
          animalItem.appendChild(nameH4);
          animalItem.appendChild(blockQuote);

          // looping through the images and adding them to element
          for(var j=0; j<images.length; j++)
          { 
            var img = document.createElement("img");
            img.setAttribute("src","images/" + images[j].firstChild.nodeValue);
            animalItem.appendChild(img);   
          }
            // append the new html elements into the li and UL
            ul.appendChild(animalItem);
      }
    //Ensure that the xml has loaded correctly.
    console.log(xmlToString(tour));
  }
  function load()
  {
    display_animals() ;
   // Add event listener for the form search button
    document.getElementsByTagName("li")[0].style.display ="none";
  }
  // Other event listeners can go here.
  document.addEventListener("DOMContentLoaded", load, false);
  