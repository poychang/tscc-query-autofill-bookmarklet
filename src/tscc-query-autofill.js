(function() {
    var ln = location.href;
    var cardID = 'YOUR_CARD_ID'; // 悠遊卡卡號
    var birth = 'YOUR_BIRTHDAY'; // 持卡人生日
    var vatNum = 'YOUR_VAT_NUMBER'; // 公司統一編號
    var bankCode = 'YOUR_BANK_CODE'; // 悠遊聯名卡發卡銀行代號

    var tscc_url = 'https://queryweb.tscc.com.tw/thsrc_web/';
    var tscc_purchase_proof_url = 'https://queryweb.tscc.com.tw/thsrc_web/THSRC_page.aspx';
    if (ln === tscc_url) {
        document.getElementById('txtCardID').value = cardID;
        document.getElementById('txtBirth').value = birth;
    } else if (ln === tscc_purchase_proof_url) {
        document.getElementById('VAT_Num').value = vatNum;
        document.getElementById('txtBank_code').value = bankCode;
    } else {
        void (location.href = tscc_url);
    }
})();
