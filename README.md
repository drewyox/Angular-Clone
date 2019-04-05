# Super Galactic Age Calculator

#### This website is a recreation of the Etsy homepage, created for an exercise of understanding the Angular superset.

#### By **Drew Yoxsimer**

## Description

This is the beginning of a clone of the Etsy crafting site. Right now it consists of mostly just html and css to mark out and map the site. However, these css and html files are divided into separate components. Each component houses a small amount of html and css and is passed back up the chain to the root component.

### Planned Features EDITED UPON 2ND WEEK COMPLETION

# _Shopping-Section and Latest-Section Components_
  * Both of these components feature bits of css and html that are essentially repeated, spare the content within them. For example, the shopping section features divs of html that are structured the same (Image above lines of text describing the image and a relevant price) I hope to write a ts class and give myself the ability of freely edit them instead of having them hard coded into the site. Many of the objects change based on time i.e latest items added, and recently popular to name two conditions for display. By creating a reusable class I will be able to mimic the flexible coding the website uses to display this information.

##WEEK TWO ACCOMPLISHMENTS IN SHOPPING Section

* I was able to associate some of the repeatable elements in my shop.component with data stored in firebase. The shop component featured 6 repeating elements that used the same layout. Image over a line of text. While I was unable to actually store an call an image to be displayed, I was able to store other information (strings) and call them into the appropriate areas.

# _Missing Components_
  * The components themselves are created, but are empty expect for the default text. I am going to fill out the remaining components that map out the homepage in its entirety. The footer component, review component, and blog component are all missing their respective html/css stylings as of now. I will add in the code to mimic the lay out as I have for the previous components, which are nested within the body component.

##WEEK TWO ACCOMPLISHMENTS WITH MISSING COMPONENTS

  * All compononents as represented by the home page of etsy were successfully added. 

## Known Bugs
* No known bugs at this time.

## Technologies Used
  _HTML_
  _CSS_
  _Node_
  _Jasmine_
  _Karma_
  _Type Script_
  _Angular 6_

Copyright (c) 2019 **_{Drew Yoxsimer}_**
