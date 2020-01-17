(function ($) {

    $.fn.createTable = function (data, options) {

        var element = this;
        var settings = $.extend({}, $.fn.createTable.defaults, options);
        var selector;
        var colCount = 0; //without column of RowNumber

        if ((element[0].className !== undefined) && (element[0].className != '')) {
            var split = element[0].className.split(' ');
            selector = '.' + split.join('.') + ' ';
        } else if (element[0].id !== undefined) {
            selector = '#' + element[0].id + ' ';
        }

        var table = '<table class="json-to-table">';

        table += '<thead>';
        if (settings.showRowNumber){
            table += '<th class="jsl"></th>';
        }
        table += $.fn.createTable.parseTableData(data, true, settings);
        table += '</thead>';
        table += '<tbody>';
        table += $.fn.createTable.parseTableData(data, false, settings);
        table += '</tbody>';
        table += '</table>';

        element.html(table);
        
        $(selector + '.json-to-table tr:nth-child(1) td').each(function () {
            if ($(this).attr('colspan')) {
                colCount += +$(this).attr('colspan');
            } else {
                colCount++;
            }
        });
        if (settings.showRowNumber) {colCount--;}

        return function () {
            $(selector + '.json-to-table').css({
                borderCollapse: 'collapse',
                width: settings.tableWidth().value + settings.tableWidth().type,
                border: settings.borderWidth + ' ' + settings.borderStyle + ' ' + settings.borderColor,
                fontFamily: settings.fontFamily
            });

            if (settings.showRowNumber){
                $(selector + '.jsl').css({
                    minWidth: '18px',
                    width: '18px',
                    padding: '0 10px 0 10px'
                });
            }

            // TODO: please check css selector for consenting with "settings.showRowNumber"
            if (typeof settings.colWidth === 'function'){
                for (var i = 0; i < colCount; i++) {
                    let coldata = settings.colWidth(i, colCount, settings.tableWidth(), settings.showRowNumber);
                    $(selector + '.json-to-table tr td:nth-child(' + (settings.showRowNumber ? (i + 1) : i) + ')').css({
                        width: coldata.value + coldata.type
                    });
                }
            } else if (settings.showRowNumber){
                $(selector + '.json-to-table thead th:not(:first-child), .json-to-table tbody td:not(:first-child)').css({
                    width: (100 / colCount) + '%'
                });
            } else {
                $(selector + '.json-to-table thead th, .json-to-table tbody td').css({
                    width: (100 / colCount) + '%'
                });
            }

            $(selector + '.json-to-table thead th, .json-to-table tbody td').css({
                border: settings.borderWidth + ' ' + settings.borderStyle + ' ' + settings.borderColor
            });

            $(selector + '.json-to-table thead th').css({
                backgroundColor: settings.thBg,
                color: settings.thColor,
                height: settings.thHeight,
                fontFamily: settings.thFontFamily,
                fontSize: settings.thFontSize,
                textTransform: settings.thTextTransform
            });

            $(selector + '.json-to-table tbody td').css({
                backgroundColor: settings.trBg,
                color: settings.trColor,
                paddingLeft: settings.tdPaddingLeft,
                paddingRight: settings.tdPaddingRight,
                height: settings.trHeight,
                fontSize: settings.trFontSize,
                fontFamily: settings.trFontFamily
            });

        }();
    };

    $.fn.createTable.getHighestColumnCount = function (data) {

        var count = 0, temp = 0, column = {max: 0, when: 0};

        for (var i = 0; i < data.length; i++) {
            count = $.fn.getObjectLength(data[i]);
            if (temp <= count) {
                temp = count;
                column.max = count;
                column.when = i;
            }
        }

        return column;
    };

    $.fn.createTable.parseTableData = function (data, thead, settings) {

        var rows = '';
        var lFound = false;

        for (var i = 0; i < data.length; i++) {
            var row = '';
            if (thead === false) {
                row += '<tr>';
                if (settings.showRowNumber) {
                    row += '<td class="jsl">' + settings.cellTextComposer(lCol, i, (settings.rowNumberStartValue + i), thead) + '</td>';
                }
            }
            var lCol = 0;
            $.each(data[i], function (key, value) {
                if (thead === true) {
                    if (i === $.fn.createTable.getHighestColumnCount(data).when) {
                        row += '<th>' + $.fn.humanize(settings.cellTextComposer(lCol, i, key, thead)) + '</th>';
                    }
                } else if (thead === false) {
                    row += '<td>' + settings.cellTextComposer(lCol, i, value, thead) + '</td>';
                }
                lCol++;
            });
            if (thead === false) row += '</tr>';
            rows += settings.rowComposer(i, row, thead);
        }

        return rows;
    };

    $.fn.getObjectLength = function (object) {

        var length = 0;

        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                ++length;
            }
        }

        return length;
    };

    $.fn.humanize = function (text) {

        var string = text.split('_');

        for (var i = 0; i < string.length; i++) {
            string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
        }

        return string.join(' ');
    };

    $.fn.createTable.defaults = {
        tableWidth: function(){return {value: 100, type: '%'}},
        colWidth: null,//function(colIdx, colMax, tableWidth, showRowNumber){return {value: 25, type: '%'};}, // IMPORTANT: no execution for the column of row number
        showRowNumber: true,
        rowNumberStartValue: 1,
        cellTextComposer: function (colIdx, rowIdx, cellValue, isHead){return cellValue;},
        rowComposer: function (rowIdx, rowTxt, isHead){return rowTxt;},

        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: '#DDDDDD',
        fontFamily: 'Verdana, Helvetica, Arial, FreeSans, sans-serif',

        thBg: '#F3F3F3',
        thColor: '#0E0E0E',
        thHeight: '30px',
        thFontFamily: 'Verdana, Helvetica, Arial, FreeSans, sans-serif',
        thFontSize: '14px',
        thTextTransform: 'capitalize',

        trBg: '#FFFFFF',
        trColor: '#0E0E0E',
        trHeight: '25px',
        trFontFamily: 'Verdana, Helvetica, Arial, FreeSans, sans-serif',
        trFontSize: '13px',

        tdPaddingLeft: '10px',
        tdPaddingRight: '10px'
    }

}(jQuery));