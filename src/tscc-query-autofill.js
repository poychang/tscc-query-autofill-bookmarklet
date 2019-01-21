(function() {
    var ln = location.href;
    var cardID = 'YOUR_CARD_ID';
    var birth = 'YOUR_BIRTHDAY';
    
    if (ln === 'https://queryweb.tscc.com.tw/thsrc_web/') {
        var txtCardID = document.getElementById('txtCardID');
        var txtBirth = document.getElementById('txtBirth');
        txtCardID.value = cardID;
        txtBirth.value = birth;
}
})();
