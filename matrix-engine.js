function ci_matrixUpdater(rows, cols)
{
        var elem = document.getElementById('matrixBox');
        var tmp = '';
        for(var i = 0; i <= cols; i++)
        {
            var round = Math.round(Math.random());
            tmp += round + '';
        }
        tmp += '<br />'
        elem.innerHTML = tmp + elem.innerHTML;
        if (elem.innerHTML.length > (tmp.length * rows))
        {
            elem.innerHTML = elem.innerHTML.substring(0, elem.innerHTML.length - tmp.length);
        }
}

function ci_matrix(rows, colst)
{
    var t = setInterval("ci_matrixUpdater(" + rows + ", " + colst + ")", 40);

}

function init()
{
    var winWidth = window.innerWidth;
    var winHeight = window.innerHeight;
    
    var zeroWidth = document.getElementById('letter-0').offsetWidth;
    var oneWidth = document.getElementById('letter-1').offsetWidth;
    var lineHeight = document.getElementById('letter-0').offsetHeight;
    var charWidth = (zeroWidth + oneWidth) / 2;
    
    var charsCount = Math.floor(winWidth / charWidth);
    var linesCount = Math.floor(winHeight / lineHeight) + 2;
    
    window.alert('Fenstermaße: ' + winWidth + 'x' + winHeight + 'px\n'
               + 'Breite der 0: ' + zeroWidth + 'px\n'
               + 'Breite der 1: ' + oneWidth + 'px\n'
               + 'Höhe der Zeilen: ' + lineHeight + 'px\n'
               + 'Anzahl der Zeichen: ' + charsCount + '\n'
               + 'Anzahl der Zeilen: ' + linesCount);
    
    
    ci_matrix(linesCount, charsCount);
}

window.onload = init;