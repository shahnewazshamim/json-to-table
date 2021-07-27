# JSON to HTML Table
JSON Data To HTML Table is Example of Lightweight jQuery Plugin for Beginners. 
Though this is not a datatable, you can modify this plugin and customize it 
to make your own datatable. This is an example to make an HTML table with JSON data.

![alt text](https://github.com/philmottin/json-to-table/blob/master/screenshot.png "JSON to HTML Table")
![alt text](https://github.com/philmottin/json-to-table/blob/master/screenshot_parser.png "JSON to HTML Parse Table")

## Download
#### Current Version
Version 1.0.1

This project was forked from `https://github.com/shahnewazshamim/json-to-table` to include new features.

You can download the [latest or current stable](https://github.com/philmottin/json-to-table/releases/latest) version
from here (***recommended***) or download it form master branch (*not recommended*). 
> `https://github.com/philmottin/json-to-table/archive/refs/heads/master.zip`  

Git Clone:
> `https://github.com/philmottin/json-to-table.git`  

## Installation
1- Add jQuery 
> `<script src="jQuery-3.2.1.min.js"></script>`

2- Add JSON-to-Table pluging
Using **Production version** `JSON-to-Table.min.1.0.1.js` 
> `<script src="JSON-to-Table.min.1.0.1.js"></script>`

Or **Development version** `JSON-to-Table-1.0.1.js`
> `<script src="JSON-to-Table-1.0.1.js"></script>`

## How to use
Just call `createTable` method in your document ready function with your json `data` object.

`$('your-selector').createTable(data, optionsObject);`



## Property (optionsObject) Definition

> **Table properties**

- #### showTableRowNumber
    Display the first column as counter.
    Default: false
  
    **Ex:** `showTableHeaderCounter: true`

- #### rowNumberInitialValue
    If you would like start with row number 9 set it. Otherwise let default as 1.
    Default: 1

    **Ex:** `rowNumberInitialValue: 101`

- #### parser
    Custom function to parse data values.
    Default: none
  
    **Ex:** `parser: function(rowIdx, colIdx, value, isHead) { /* function scope */ return value; }`

- #### parserCols
    Array of columns names to execute the parser function. If ommited, the parser run on all fields.
    Default: all cells, except header and rowNumbers.
  
    **Ex:** `parserCols: ['column1','column2']`

- #### parseHeader
    Enable parsing on header cells
    Default: false
  
    **Ex:** `parseHeader: true`

- #### parseRowNumber
    Enable parsing on rowNumber cells
    Default: false
  
    **Ex:** `parseRowNumber: true`

- #### showTitle
    Enable table title at the top
    Default: false
  
    **Ex:** `showTitle: true`

- #### titleText
    Text to display in the title
    Default: Will show the number of records. `'n records'`
  
    **Ex:** `titleText: 'My awesome table title'`

- #### titleAlign
    Set the alignment of the title. `('left' | 'center' | 'right')`
    Default: 'center'
  
    **Ex:** `titleAlign: 'left'`

- #### showFooter
    Enable table footer at the bottom
    Default: false
  
    **Ex:** `showFooter: true`

- #### footerText
    Text to display in the footer
    Default: Will show the number of records. `'n records'`
  
    **Ex:** `footerText: 'My awesome table footer'`

- #### footerAlign
    Set the alignment of the footer. `('left' | 'center' | 'right')`
    Default: 'center'
  
    **Ex:** `footerAlign: 'left'`

> **Every single value of these properties is similar to CSS property value.**

- #### colsSameWidh
    Set all table columns with same widht
    Default: false

    **Ex:** `colsSameWidh: true

- #### width
    Set table width. Any css unit can be used like '%', 'px', 'em'
    Default: '100%'

    **Ex:** `width: '1200px'`

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

##### Use custom parser
```javascript
var data = [
             {
               "id": 1123,
               "first_name": "Alli",
               "last_name": "Cassey",
               "email": "acassey0@list-manage.com",
               "gender": "Female",
               "registered": false
             },
             {
               "id": 1124,
               "first_name": "Clyde",
               "last_name": "Bromage",
               "email": "cbromage1@bbb.org",
               "gender": "Male",
               "registered": true
             },
             {
               "id": 1125,
               "first_name": "Janeczka",
               "last_name": "Trett",
               "email": "jtrett2@vistaprint.com",
               "gender": "Female",
               "registered": null
             },
             {
               "id": 1126,
               "first_name": "Kristoforo",
               "last_name": "Duplain",
               "email": "kduplain3@vimeo.com",
               "gender": "Male",
               "registered": true
             },
             {
               "id": 1127,
               "first_name": "Devonna",
               "last_name": "Medeway",
               "email": "dmedeway4@google.nl",
               "gender": "Female",
               "registered": false
             }
         ];

    var parser = function(value) {
                    if (String(value) == 'true')
                        value = '✔';
                    else if (String(value) == 'false')
                        value = '-';
                    else if (value == null)
                        value = '';
                    else if (value == 'Female')
                        value = '👨🏻';
                    else if (value == 'Male')
                        value = '👩🏻';
                    return value;

    $('#table').createTable(data, { showTableHeaderCounter: true,
                                    parser: parser,                                            
                                    parserCols: ['gender','registered'],
                                    colsSameWidh: false,
                                    width: '80%'
                                  });
```




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
