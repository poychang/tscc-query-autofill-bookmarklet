(function () {
    // 檢查是否已載入 Tesseract.js
    if (!window.Tesseract) {
        var script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/tesseract.js@4.0.2/dist/tesseract.min.js';
        script.onload = function () {
            runTesseract();
        };
        document.body.appendChild(script);
    } else {
        runTesseract();
    }

    var ln = location.href;
    var cardID = 'YOUR_CARD_ID'; // 悠遊卡卡號
    var birth = 'YOUR_BIRTHDAY'; // 持卡人生日
    var vatNum = 'YOUR_VAT_NUMBER'; // 公司統一編號
    var vatName = 'YOUR_VAT_NAME'; // 營利事業名稱
    var bankCode = 'YOUR_BANK_CODE'; // 悠遊聯名卡發卡銀行代號

    var tscc_url = 'https://queryweb.easycard.com.tw/thsrc_web/';
    var tscc_purchase_proof_url = 'https://queryweb.easycard.com.tw/thsrc_web/THSRC_page.aspx';
    if (ln === tscc_url) {
        document.getElementById('txtCardID').value = cardID;
        document.getElementById('txtBirth').value = birth;

        const imgElement = document.getElementById('captchaImage');
        try {
            // 建立 canvas 元素來取得圖片的像素數據
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');

            // 設置 canvas 尺寸與圖片相同
            canvas.width = imgElement.width;
            canvas.height = imgElement.height;

            // 將圖像繪製到 canvas 上
            context.drawImage(imgElement, 0, 0, imgElement.width, imgElement.height);

            // 從 canvas 中獲取圖像數據
            const dataUrl = canvas.toDataURL();

            // 使用 Tesseract 進行識別
            Tesseract.recognize(
                dataUrl, // 使用 canvas 獲取的 base64 圖片數據
                'eng', // 語言設置為英語（如果圖片包含中文字元，可以使用 'chi_tra'）
                {
                    logger: (info) => console.log(info), // 記錄進度
                }
            )
                .then(({ data: { text } }) => {
                    console.log(`辨識結果: ${text.trim()}`);
                })
                .catch((error) => {
                    console.log(`辨識失敗: ${error.message}`);
                });
        } catch (error) {
            console.log(`獲取圖片失敗: ${error.message}`);
        }
    } else if (ln === tscc_purchase_proof_url) {
        document.getElementById('VAT_Num').value = vatNum;
        document.getElementById('txtBuy').style.display = '';
        document.getElementById('txtBuy').value = vatName;
        document.getElementById('txtBank_code').value = bankCode;
    } else {
        void (location.href = tscc_url);
    }
})();
