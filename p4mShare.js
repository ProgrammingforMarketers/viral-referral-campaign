$(function() {
    var clicks = 0;
    $('button').on('click', function() {
        clicks++;
        var percent = Math.min(Math.round(clicks / 3 * 100), 100);
        $('.percent').width(percent + '%');
        $('.number').text(percent + '%');
    });
    
    
    $('.facebook').on('click', function() {
        var w = 580, h = 300,
                left = (screen.width/2)-(w/2),
                top = (screen.height/2)-(h/2);
            
            
            if ((screen.width < 480) || (screen.height < 480)) {
                window.open ('http://www.facebook.com/share.php?u=http://www.programmingformarketers.com', '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
            } else {
                window.open ('http://www.facebook.com/share.php?u=http://www.programmingformarketers.com', '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);   
            }
    });
    
    $('.twitter').on('click', function() {
        var loc = encodeURIComponent('http://www.programmingformarketers.com'),
                title = "Check out this awesome free course on becoming a more technical marketer - ",
                w = 580, h = 300,
                left = (screen.width/2)-(w/2),
                top = (screen.height/2)-(h/2);
                
            window.open('http://twitter.com/share?text=' + title + '&url=' + loc, '', 'height=' + h + ', width=' + w + ', top='+top +', left='+ left +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
    });
    
    $('.email').on('click', function() {
        window.location.href = "mailto:?bcc=bonus@programmingformarketers.com&subject=I%20think%20you%20will%20like%20this&body=I%20found%20this%20free%20course%20on%20becoming%20a%20more%20technical%20marketer%20and%20thought%20you%20might%20be%20interested%20-%20http%3A%2F%2Fwww.programmingformarketers.com%2F%0A%0AIt%20teaches%20you%20how%20to%20use%20technical%20and%20automation%20skills%20to%20become%20a%20better%20marketer.%20I%27m%20taking%20it%20and%20think%20it%20could%20be%20really%20cool.%0A%0A";
    });
    
});