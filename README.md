# 自動填入台灣高鐵悠遊聯名卡搭乘資訊查詢系統

如果你經常使用悠遊聯名卡搭乘台灣高鐵，並且要透過[台灣高鐵悠遊聯名卡搭乘資訊查詢系統](https://queryweb.tscc.com.tw/thsrc_web/)查詢搭查紀錄，以提供財務單位進行報帳，這個小工具能幫助你，自動填入你經常使用的悠遊卡號碼及使用者生日進行查詢。

## 安裝方式

1. 開啟瀏覽器，並打開瀏覽器的**書籤工具列**或**我的最愛列**：
   * Google Chrome 瀏覽器請按下 `Ctrl+Shift+B` 進行切換。
   * Internet Explorer 瀏覽器請點選主選單的 `[檢視]` / `[工具列]` / `[我的最愛列]` 進行切換。
2. 將以下超連結 (**查詢高鐵搭乘資訊**)，直接利用滑鼠拖曳到**書籤工具列**或**我的最愛列**上

   * [查詢高鐵搭乘資訊](https://queryweb.tscc.com.tw/thsrc_web/)

3. 請你手動修改這個 **查詢高鐵搭乘資訊** 的超連結，並將下列程式碼中的 `YOUR_CARD_ID` (悠遊聯名卡卡號)和 `YOUR_BIRTHDAY` (持卡人生日)改成您的查詢資訊後，貼上網址欄為即可！

```js
javascript:!function(){var t=location.href,e="https://queryweb.tscc.com.tw/thsrc_web/";t===e?(document.getElementById("txtCardID").value="YOUR_CARD_ID",document.getElementById("txtBirth").value="YOUR_BIRTHDAY"):"https://queryweb.tscc.com.tw/thsrc_web/THSRC_page.aspx"===t?(document.getElementById("VAT_Num").value="YOUR_VAT_NUMBER",document.getElementById("txtBuy").value="YOUR_VAT_NAME",document.getElementById("txtBank_code").value="YOUR_BANK_CODE"):location.href=e}();
```

4. 若需要 **電子車票證明**，請再將修改下列程式碼中的 `YOUR_VAT_NUMBER` (公司統一編號)、`YOUR_VAT_NAME` (營利事業名稱)和 `YOUR_BANK_CODE` (悠遊聯名卡發卡銀行代號)改成您的查詢資訊後，貼上網址欄為即可！

```js
javascript:!function(){var t=location.href,e="https://queryweb.tscc.com.tw/thsrc_web/";t===e?(document.getElementById("txtCardID").value="YOUR_CARD_ID",document.getElementById("txtBirth").value="YOUR_BIRTHDAY"):"https://queryweb.tscc.com.tw/thsrc_web/THSRC_page.aspx"===t?(document.getElementById("VAT_Num").value="YOUR_VAT_NUMBER",document.getElementById("txtBuy").value="YOUR_VAT_NAME",document.getElementById("txtBank_code").value="YOUR_BANK_CODE"):location.href=e}();
```

## 使用方式

1. 第一次點選書籤開啟[台灣高鐵悠遊聯名卡搭乘資訊查詢系統](https://queryweb.tscc.com.tw/thsrc_web/)
2. 第二次點選書籤會輸入悠遊聯名卡卡號及持卡人生日

部落格文章：[在台灣高鐵搭乘資訊查詢系統自動填入常用的悠遊卡號碼](https://poychang.github.io/autofill-tscc-boarding-info-query-paramter/)

## 建置方式

```bash
npm run build
```

建置完成後，將 `dist\tscc-query-autofill.min.js` 檔案的內容前面加上 `javascript:`  即是 Bookmarklet 瀏覽器書籤小工具。
