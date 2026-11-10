//要素
const searchButton = document.getElementById("searchButton");
const tempText = document.getElementById("tempText");
const stateText = document.getElementById("stateText");
const cityText = document.getElementById("cityText");
const cityInput = document.getElementById("cityInput");

//イベント
searchButton.addEventListener("click", async () => {
    stateText.textContent = "最新のデータを読み込み中...";

    const cityName = cityInput.value;
    try {
        const url = "https://geocoding-api.open-meteo.com/v1/search?count=1&language=ja&name=" + cityName;
        const response1 = await fetch(url);
        const data1 = await response1.json();

        if (!data1.results) {
            stateText.textContent = "都市が見つかりませんでした";
            return;
        }

        const latitude = data1.results[0].latitude;
        const longitude = data1.results[0].longitude;

        const response2 = await fetch("https://api.open-meteo.com/v1/forecast?latitude=" + latitude + "&longitude=" + longitude + "&current=temperature_2m");
        const data2 = await response2.json();
        cityText.textContent = data1.results[0].name;
        tempText.textContent = data2.current.temperature_2m;
        stateText.textContent = "";

    } catch (error) {
        stateText.textContent = "データを取得できませんでした";
    }

    cityInput.value = "";
});
