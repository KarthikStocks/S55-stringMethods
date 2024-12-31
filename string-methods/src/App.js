import "./App.css";

function App() {
  let news =
    "Stock market soared today with Nifty crossing 20000 points and Sensex hitting record highs.";

  return (
    <div className="App">
      <h1>Learning String Methods with Stock Market Terms</h1>
      <div className="card">
        <button
          type="button"
          onClick={() => {
            console.log(news.toUpperCase());
            console.log(news.toLowerCase());
          }}
        >
          toUpperCase | toLowerCase
        </button>
        <button
          type="button"
          onClick={() => {
            let [stock, market] = ["Nifty", "Sensex"];
            let indices = stock.concat(market);
            let indices2 = `${stock} and ${market}`;

            console.log(indices, indices2);
          }}
        >
          concat
        </button>
        <button
          type="button"
          onClick={() => {
            let analyst = "   Market Analyst   ";
            console.log(`---->${analyst.trimStart()}<----`);
            console.log(`---->${analyst.trimEnd()}<----`);
            console.log(`---->${analyst.trim()}<----`);
          }}
        >
          trim | trimStart | trimEnd
        </button>
        <button
          type="button"
          onClick={() => {
            let msg = "Buy the dip!";
            console.log(msg.padStart(50, "💹"));
            console.log(msg.padEnd(50, "🚀"));
          }}
        >
          padStart | padEnd
        </button>
        <button
          type="button"
          onClick={() => {
            let phrase = "Bull run is here! ";
            console.log(phrase.repeat(5));
          }}
        >
          repeat
        </button>
        <button
          type="button"
          onClick={() => {
            let headline =
              "Nifty showed remarkable performance today, with Nifty crossing record highs, and Nifty traders celebrating the bull run.";

            console.log(headline.replace("remarkable", "outstanding"));
            console.log(
              headline.replaceAll(
                "Nifty",
                "National Stock Exchange Index, the equity index of India"
              )
            );
          }}
        >
          replace | replaceAll
        </button>
        <button
          type="button"
          onClick={() => {
            let headline =
              "Sensex is on a bull run, while Nifty is touching record highs.";

            console.log(headline);
            console.log(headline.split(" ")); // Split by space
            console.log(headline.split("i")); // Split by letter 'i'
          }}
        >
          split
        </button>
        <button
          type="button"
          onClick={() => {
            let ticker = "NASDAQ";

            console.log(ticker.length);
            console.log(ticker.at(0));
            console.log(ticker.charAt(0));
            console.log(ticker[0]);
          }}
        >
          length
        </button>
        <button
          type="button"
          onClick={() => {
            let ticker = "NASDAQ";

            console.log(ticker.slice(2, 4)); // SD
            console.log(ticker.substring(2, 4)); // SD
            console.log(ticker.substr(2, 2)); // SD
          }}
        >
          slice | substring | substr
        </button>
        <button
          type="button"
          onClick={() => {
            for (let i = 3077; i < 3300; i++) {
              console.log(String.fromCharCode(i));
            }

            console.log(String.fromCharCode(65));
            console.log(String.fromCharCode(3077));
            console.log(String.fromCharCode(4077));
          }}
        >
          fromCharCode
        </button>
        <button
          type="button"
          onClick={() => {
            let [alphabets, వయస్సు] = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", 20];

            console.log(వయస్సు);

            for (let i = 0; i < alphabets.length; i++) {
              console.log(alphabets.charCodeAt(i));
            }
          }}
        >
          charCodeAt
        </button>
        <button
          type="button"
          onClick={() => {
            let stock = "Indian Renewable Energy Development Agency Limited";

            console.log(stock.startsWith("Indian"));
            console.log(stock.endsWith("Limited"));
            console.log(stock.startsWith("Indan"));
            console.log(stock.endsWith("d"));

            console.log(stock.includes("Development"));
            console.log(stock.includes("Tesla"));
          }}
        >
          startsWith | endsWith | includes
        </button>
        <button
          type="button"
          onClick={() => {
            let news = "Stock market is volatile. Stock market is exciting.";

            console.log(news.indexOf("market")); // First occurrence
            console.log(news.lastIndexOf("market")); // Last occurrence

            console.log(news.indexOf("Market"));
            console.log(news.search(/Market/i)); // Case-insensitive search
          }}
        >
          indexOf | lastIndexOf | search
        </button>
      </div>
    </div>
  );
}

export default App;
