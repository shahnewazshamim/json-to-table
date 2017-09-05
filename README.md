# JSON to HTML Table
JSON Data To HTML Table is Example of Lightweight jQuery Plugin for Beginners. 
Though this is not a datatable, you can modify this plugin and customize it 
to make your own datatable. This is an example to make an HTML table with JSON data.

![alt text](https://github.com/shahnewazshamim/json-to-table/blob/master/screenshot.png "JSON to HTML Table")

## Download
#### Current Version
Version 1.0.0

You can download the [latest or current stable](https://github.com/shahnewazshamim/json-to-table/releases/latest) version
from here (***recommended***) or download it form master branch (*not recommended*). 
> `https://github.com/shahnewazshamim/json-to-table/archive/master.zip`  

Git Clone:
> `https://github.com/shahnewazshamim/json-to-table.git`  

## Installation
Using **Production version** `JSON-to-Table.min.1.0.0.js` 
> `<script src="jQuery-3.2.1.min.js"></script>`

Or **Development version** `JSON-to-Table.1.0.0.js`
> `<script src="JSON-to-Table.min.1.0.0.js"></script>`

## How to use
Just call `createTable` method in your document ready function with your json `data` object.

`$('your-selector').createTable(data);`

## Property Definition
> **Every single value of these properties is similar to CSS property value.**
- #### borderWidth
    Defines to control table and it's all rows and columns border width.
  
    **Ex:** `borderWidth: '1px'`
    
- #### borderStyle
    Defines to control table and it's all rows and columns border style.
    
    **Ex:** `borderStyle: 'solid'`
    
- #### borderColor
    Defines to control table and it's all rows and columns border color.
  
    **Ex:** `borderColor: '#DDDDDD'`
    
- #### fontFamily
    Defines to control table font family.
    
    **Ex:** `fontFamily: 'Verdana, Helvetica, Arial, FreeSans, sans-serif'`

- #### thBg
    Defines to control table header background color.
    
    **Ex:** `thBg: '#F3F3F3'`

- #### thColor
    Defines to control table header text color.
    
    **Ex:** `thColor: '#0E0E0E'`

- #### thHeight
    Defines to control table header height.
    
    **Ex:** `thHeight: '30px'`

- #### thFontFamily
    Defines to control table header font family.
    
    **Ex:** `thFontFamily: '"Open Sans Condensed", sans-serif'`

- #### thFontSize
    Defines to control table header font size.
    
    **Ex:** `thFontSize: '14px'`
    
- #### thTextTransform
    Defines to control table header text style.
    
    **Ex:** `thTextTransform: 'capitalize'`

- #### trBg
    Defines to control table row background color.
    
    **Ex:** `trBg: '#FFFFFF'`

- #### trColor
    Defines to control table row text color.
    
    **Ex:** `thColor: '#0E0E0E'`

- #### trHeight
    Defines to control table row height.
    
    **Ex:** `thHeight: '25px'`

- #### trFontFamily
    Defines to control table row font family.
    
    **Ex:** `trFontFamily: '"Open Sans", sans-serif'`

- #### thFontSize
    Defines to control table row font size.
    
    **Ex:** `thFontSize: '13px'`

- #### tdPaddingLeft
    Defines to control table column left padding.
    
    **Ex:** `tdPaddingLeft: '10px'`

- #### tdPaddingRight
    Defines to control table column right padding.
    
    **Ex:** `tdPaddingRight: '10px'`

## Examples

##### Using a JSON data from your JS variable.
```javascript
var data = [
             {
               "id": 1,
               "first_name": "Alli",
               "last_name": "Cassey",
               "email": "acassey0@list-manage.com",
               "gender": "Female",
               "ip_address": "129.82.128.62"
             },
             {
               "id": 2,
               "first_name": "Clyde",
               "last_name": "Bromage",
               "email": "cbromage1@bbb.org",
               "gender": "Male",
               "ip_address": "232.45.125.179"
             },
             {
               "id": 3,
               "first_name": "Janeczka",
               "last_name": "Trett",
               "email": "jtrett2@vistaprint.com",
               "gender": "Female",
               "ip_address": "149.4.116.82"
             },
             {
               "id": 4,
               "first_name": "Kristoforo",
               "last_name": "Duplain",
               "email": "kduplain3@vimeo.com",
               "gender": "Male",
               "ip_address": "137.198.100.233"
             },
             {
               "id": 5,
               "first_name": "Devonna",
               "last_name": "Medeway",
               "email": "dmedeway4@google.nl",
               "gender": "Female",
               "ip_address": "136.193.208.118"
             }
         ];

$(document).ready(function () {
    $('#table-2').createTable(data);    
});
```

##### External JSON file.
```javascript
$(document).ready(function () {
    $.getJSON("sample-data.json", function (data) {
        $('.table').createTable(data, {
            // General Style for Table
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: '#DDDDDD',
            fontFamily: 'Verdana, Helvetica, Arial, FreeSans, sans-serif',
            
            // Table Header Style
            thBg: '#F3F3F3',
            thColor: '#0E0E0E',
            thHeight: '30px',
            thFontFamily: '"Open Sans Condensed", sans-serif',
            thFontSize: '14px',
            thTextTransform: 'capitalize',
            
            // Table Body/Row Style
            trBg: '#FFFFFF',
            trColor: '#0E0E0E',
            trHeight: '25px',
            trFontFamily: '"Open Sans", sans-serif',
            trFontSize: '13px',
            
            // Table Body's Column Style
            tdPaddingLeft: '10px',
            tdPaddingRight: '10px'
        });
    });
});
```
