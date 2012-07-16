# How use jQuery pop-up plugin
## Description
This is pretty simple jQuery pop-up plugin, which displays "Windows like style"
tooltip on web page.

## Requrements
jQuery >= 1.7.2

## Usage
Html:

`<div id="message">Demo message</div>`


Before using jQuery pop-up you should place links to pop-up css and jQuery libruary:

    <link type="text/css" rel="stylesheet" href="jquery-pop-up.css"/>
    <script type="text/javascript" src="jquery-1.7.2.min.js"></script> 
    <script type="text/javascript" src="jquery-popup.js"></script>

To show pop-up message you should initilize pop-up plugin:

    <script type="text/javascript">
        $(function(){
          $('div.message').popUp();
        });
    </script>

Also, you can use layout parameters(all parameters described below):

    <script type="text/javascript">
        $(function(){
          $('div.message').popUp({
                                   width: 200,
                                   top: 10,
                                   left: 50
                                 });
        });
    </script>

To change pop-up message coordinates or width use "show" method:

    <script type="text/javascript">
        $(function(){
          $('div.message').popUp('show' ,{
                                          width: 250,
                                          top: 15,
                                          left: 10
                                         });
        });
    </script>

To hide pop-up message just call hide method:

    <script type="text/javascript">
        $(function(){
          $('div.message').popUp('hide');
        });
    </sсript>
## Parameters

*width* - specify width of message

*top* - specify coordinate of top corners of message
NOTE: *top* will be ignored, if you specify *bottom* parameter