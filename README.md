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
javascript:!function(){var t="https://queryweb.tscc.com.tw/thsrc_web/";if(location.href===t){var e=document.getElementById("txtCardID"),c=document.getElementById("txtBirth");e.value="YOUR_CARD_ID",c.value="YOUR_BIRTHDAY"}else location.href=t}();
```
