var arrResult = [];

function getResult() {
    $.ajax({
        url: 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=' + $('#search').val(),

        dataType: 'jsonp',
        type: 'post',

        success: function(data) {
            console.log(data);
        }
    });
}