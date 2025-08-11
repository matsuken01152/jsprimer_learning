// 変数をURLエスケープするタグ関数
function escapeURL(strings, ...values) {
    return strings.reduce((result, str, i) => {
        return result + encodeURIComponent(values[i - 1]) + str;
    });
}

const query = "a&b";
const sort = "price:asc";
const lang = "ja-JP";

const url = escapeURL`https://example.com/search?q=${query}&sort=${sort}&lang=${lang}`;
console.log(url);
// 出力: https://example.com/search?q=a%26b&sort=price%3Aasc&lang=ja-JP
