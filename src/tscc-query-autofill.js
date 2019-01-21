(function() {
    var ln = location.href;
    var tscc_url = 'https://queryweb.tscc.com.tw/thsrc_web/';
    var cardID = 'YOUR_CARD_ID';
    var birth = 'YOUR_BIRTHDAY';
    if (ln === tscc_url) {
        var txtCardID = document.getElementById('txtCardID');
        var txtBirth = document.getElementById('txtBirth');
        txtCardID.value = cardID;
        txtBirth.value = birth;
    }
    else{
        void (location.href = tscc_url);
    }
})();
