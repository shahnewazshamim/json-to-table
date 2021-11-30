(function ($) {
    $.fn.createTable = function (data, options) {
        var element = this;
        var settings = $.extend({}, $.fn.createTable.defaults, options);
        var selector;

        if (element[0].className !== undefined && element[0].className.length > 0) {
            var split = element[0].className.split(' ');
            selector = '.' + split.join('.') + ' ';
        } else if (element[0].id !== undefined) {
            selector = '#' + element[0].id + ' ';
        }

        var table = $.fn.createTable.parseTableData(data, settings.showTableHeader, settings);
        element.html(table);

        return function () {
            $(selector + '.json-to-table').css({
                borderCollapse: 'collapse',
                width: settings.width,
                border: settings.borderWidth + ' ' + settings.borderStyle + ' ' + settings.borderColor,
                fontFamily: settings.fontFamily
            });

            $(selector + '.json-to-table caption#title').css({
                captionSide: 'top',
                textAlign: settings.titleAlign
            });
            $(selector + '.json-to-table caption#footer').css({
                captionSide: 'bottom',
                textAlign: settings.footerAlign,
                fontSize: '12px'
                
            });

            $(selector + '.jsl').css({
                minWidth: '18px',
                width: '18px',
                padding: '0'
            });
            
            if (settings.colsSameWidh) {
                $(selector + '.json-to-table thead th:not(:first-child), .json-to-table tbody td:not(:first-child)').css({
                    width: (100 / Object.keys(data[0]).length ) + '%'
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

    $.fn.createTable.isFunction = function (functionToCheck) {
        return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
    }

    $.fn.createTable.parseTableData = function (data, thead, settings) {

        if (settings.debug) {
            settings.parser = function(rowIdx, colIdx, value, isHead){ return (rowIdx+':'+colIdx); };
            settings.parseHeader = true;
            settings.parseRowNumber = true;
            settings.showTitle = true;
            settings.showFooter = true;
        }
        
        var table = '';
        table =  '<table class="json-to-table">';

        title = settings.titleText? settings.titleText : data.length+' records';
        footer = settings.footerText? settings.footerText : data.length+' records';
        if (settings.showTitle) table += '<caption id="title">'+title+'</caption>';
        if (settings.showFooter) table += '<caption id="footer">'+footer+'</caption>';

        var iColHeader = 1;
        if (thead === true) {
            table +=  settings.showTableRowNumber ? '<thead><tr><th class="jsl"></th>' : '<thead><tr>';
            
            $.each(data[0], function (key, value) { 
                if ($.fn.createTable.isFunction(settings.parser)) {
                    settings.parserCols = Array.isArray(settings.parserCols) ? settings.parserCols : [];
                    key = settings.parseHeader ? settings.parser(0, iColHeader, key, true) : key;
                }
                iColHeader++;
                table += '<th>' + $.fn.humanize(key) + '</th>';
            });
            table += '</tr></thead>';
        }
        table += '<tbody>';

        for (var i = 0; i < data.length; i++) {
            if ($.fn.createTable.isFunction(settings.parser)) {
                settings.parserCols = Array.isArray(settings.parserCols) ? settings.parserCols : [];
                value = settings.parseRowNumber ? settings.parser(i+1, 0, settings.rowNumberInitialValue + i, false) : settings.rowNumberInitialValue + i;
            } else { //fix error when showTableRowNumber is true and no parser is present. missing value.
                value = settings.rowNumberInitialValue + i;
            }
            table += settings.showTableRowNumber ? ('<tr><td class="jsl">'+(value)+'</td>') : '<tr>';
            
            iCol = 1;
            $.each(data[i], function (key, value) {
                if ($.fn.createTable.isFunction(settings.parser)) {
                    settings.parserCols = Array.isArray(settings.parserCols) ? settings.parserCols : [];
                    value = (settings.parserCols.includes(key) || settings.parserCols.length == 0) ? settings.parser(i+1, iCol, value, false) : value;
                }
                iCol++;
                table += '<td>' + value + '</td>';
            });
            table += '</tr>';
        }
        table += '</tbody>';
        table += '</table>';
        return table;
    };

    $.fn.humanize = function (text) {
        var string = text.split('_')
        for (i = 0; i < string.length; i++) {
            string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
        }
        return string.join(' ');
    };

    $.fn.createTable.defaults = {
        width: '100%',
        showTableHeader: true,
        rowNumberInitialValue: 1,

        titleAlign: 'center',
        footerAlign: 'center',

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