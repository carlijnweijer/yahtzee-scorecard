import "./App.css";

function App() {
  return (
    <div class="yahtzee">
      <h1 class="yahtzee__heading">Yahtzee</h1>
      <div class="yahtzee__score-card">
        <table>
          <tbody class="upper">
            <tr class="head">
              <th>Upper Section</th>
              <th>How to Score</th>
              <th>Game #1</th>
              <th>Game #2</th>
              <th>Game #3</th>
              <th>Game #4</th>
              <th>Game #5</th>
              <th>Game #6</th>
            </tr>
            <tr>
              <th>
                <div class="desc">
                  <div class="primary">Aces </div>
                  <div class="die">&#x2680;</div>
                </div>
              </th>
              <th class="how-to-score">Count and Add Only Aces</th>
              <td>
                <input class="t" tabindex="1" />
              </td>
              <td>
                <input class="t" tabindex="2" />
              </td>
              <td>
                <input class="t" tabindex="3" />
              </td>
              <td>
                <input class="t" tabindex="4" />
              </td>
              <td>
                <input class="t" tabindex="5" />
              </td>
              <td>
                <input class="t" tabindex="6" />
              </td>
            </tr>
            <tr>
              <th>
                <div class="desc">
                  <div class="primary">Twos </div>
                  <div class="die">&#x2681;</div>
                </div>
              </th>
              <th class="how-to-score">Count and Add Only Twoes</th>
              <td>
                <input class="t" tabindex="1" />
              </td>
              <td>
                <input class="t" tabindex="2" />
              </td>
              <td>
                <input class="t" tabindex="3" />
              </td>
              <td>
                <input class="t" tabindex="4" />
              </td>
              <td>
                <input class="t" tabindex="5" />
              </td>
              <td>
                <input class="t" tabindex="6" />{" "}
              </td>
            </tr>
            <tr>
              <th>
                <div class="desc">
                  <div class="primary">Threes </div>
                  <div class="die">&#x2682;</div>
                </div>
              </th>
              <th class="how-to-score">Count and Add Only Threes</th>
              <td>
                <input class="t" tabindex="1" />
              </td>
              <td>
                <input class="t" tabindex="2" />
              </td>
              <td>
                <input class="t" tabindex="3" />
              </td>
              <td>
                <input class="t" tabindex="4" />
              </td>
              <td>
                <input class="t" tabindex="5" />
              </td>
              <td>
                <input class="t" tabindex="6" />{" "}
              </td>
            </tr>
            <tr>
              <th>
                <div class="desc">
                  <div class="primary">Fours </div>
                  <div class="die">&#x2683;</div>
                </div>
              </th>
              <th class="how-to-score">Count and Add Only Fours</th>
              <td>
                <input class="t" tabindex="1" />
              </td>
              <td>
                <input class="t" tabindex="2" />
              </td>
              <td>
                <input class="t" tabindex="3" />
              </td>
              <td>
                <input class="t" tabindex="4" />
              </td>
              <td>
                <input class="t" tabindex="5" />
              </td>
              <td>
                <input class="t" tabindex="6" />{" "}
              </td>
            </tr>
            <tr>
              <th>
                <div class="desc">
                  <div class="primary">Fives </div>
                  <div class="die">&#x2684;</div>
                </div>
              </th>
              <th class="how-to-score">Count and Add Only Fives</th>
              <td>
                <input class="t" tabindex="1" />
              </td>
              <td>
                <input class="t" tabindex="2" />
              </td>
              <td>
                <input class="t" tabindex="3" />
              </td>
              <td>
                <input class="t" tabindex="4" />
              </td>
              <td>
                <input class="t" tabindex="5" />
              </td>
              <td>
                <input class="t" tabindex="6" />{" "}
              </td>
            </tr>
            <tr>
              <th>
                <div class="desc">
                  <div class="primary">Sixes </div>
                  <div class="die">&#x2685;</div>
                </div>
              </th>
              <th class="how-to-score">Count and Add Only Sixes</th>
              <td>
                <input class="t" tabindex="1" />
              </td>
              <td>
                <input class="t" tabindex="2" />
              </td>
              <td>
                <input class="t" tabindex="3" />
              </td>
              <td>
                <input class="t" tabindex="4" />
              </td>
              <td>
                <input class="t" tabindex="5" />
              </td>
              <td>
                <input class="t" tabindex="6" />{" "}
              </td>
            </tr>
            <tr class="foot">
              <th>
                <div class="desc">
                  <div class="primary">Total Score</div>
                </div>
              </th>
              <th class="how-to-score"></th>
              <td>
                <input class="t" tabindex="1" />
              </td>
              <td>
                <input class="t" tabindex="2" />
              </td>
              <td>
                <input class="t" tabindex="3" />
              </td>
              <td>
                <input class="t" tabindex="4" />
              </td>
              <td>
                <input class="t" tabindex="5" />
              </td>
              <td>
                <input class="t" tabindex="6" />
              </td>
            </tr>
            <tr class="foot">
              <th>
                <div class="desc">
                  <div class="primary">Bonus</div>
                </div>
              </th>
              <th class="how-to-score">Score 35</th>
              <td>
                <input class="t" tabindex="1" />
              </td>
              <td>
                <input class="t" tabindex="2" />
              </td>
              <td>
                <input class="t" tabindex="3" />
              </td>
              <td>
                <input class="t" tabindex="4" />
              </td>
              <td>
                <input class="t" tabindex="5" />
              </td>
              <td>
                <input class="t" tabindex="6" />
              </td>
            </tr>
            <tr class="foot">
              <th>
                <div class="desc">
                  <div class="primary">Total</div>
                  <div class="alt">Of Upper Section</div>
                </div>
              </th>
              <th class="how-to-score"></th>
              <td>
                <input class="t" tabindex="1" />
              </td>
              <td>
                <input class="t" tabindex="2" />
              </td>
              <td>
                <input class="t" tabindex="3" />
              </td>
              <td>
                <input class="t" tabindex="4" />
              </td>
              <td>
                <input class="t" tabindex="5" />
              </td>
              <td>
                <input class="t" tabindex="6" />
              </td>
            </tr>
          </tbody>
          <tbody class="lower">
            <tr class="head">
              <th colspan="8">Lower Section</th>
            </tr>
            <tr>
              <th>
                <div class="desc">
                  <div class="primary">3 of a kind</div>
                </div>
              </th>
              <th class="how-to-score">Total of all dice </th>
              <td>
                <input class="t" tabindex="1" />
              </td>
              <td>
                <input class="t" tabindex="2" />
              </td>
              <td>
                <input class="t" tabindex="3" />
              </td>
              <td>
                <input class="t" tabindex="4" />
              </td>
              <td>
                <input class="t" tabindex="5" />
              </td>
              <td>
                <input class="t" tabindex="6" />{" "}
              </td>
            </tr>
            <tr>
              <th>
                <div class="desc">
                  <div class="primary">4 of a kind </div>
                </div>
              </th>
              <th class="how-to-score">Total of all dice</th>
              <td>
                <input class="t" tabindex="1" />
              </td>
              <td>
                <input class="t" tabindex="2" />
              </td>
              <td>
                <input class="t" tabindex="3" />
              </td>
              <td>
                <input class="t" tabindex="4" />
              </td>
              <td>
                <input class="t" tabindex="5" />
              </td>
              <td>
                <input class="t" tabindex="6" />{" "}
              </td>
            </tr>
            <tr>
              <th>
                <div class="desc">
                  <div class="primary">Full House </div>
                </div>
              </th>
              <th class="how-to-score">Score 25</th>
              <td>
                <input class="t" tabindex="1" />
              </td>
              <td>
                <input class="t" tabindex="2" />
              </td>
              <td>
                <input class="t" tabindex="3" />
              </td>
              <td>
                <input class="t" tabindex="4" />
              </td>
              <td>
                <input class="t" tabindex="5" />
              </td>
              <td>
                <input class="t" tabindex="6" />{" "}
              </td>
            </tr>
            <tr>
              <th>
                <div class="desc">
                  <div class="primary">Small street </div>
                </div>
              </th>
              <th class="how-to-score">Score 30</th>
              <td>
                <input class="t" tabindex="1" />
              </td>
              <td>
                <input class="t" tabindex="2" />
              </td>
              <td>
                <input class="t" tabindex="3" />
              </td>
              <td>
                <input class="t" tabindex="4" />
              </td>
              <td>
                <input class="t" tabindex="5" />
              </td>
              <td>
                <input class="t" tabindex="6" />{" "}
              </td>
            </tr>
            <tr>
              <th>
                <div class="desc">
                  <div class="primary">Large street </div>
                </div>
              </th>
              <th class="how-to-score">Score 40</th>
              <td>
                <input class="t" tabindex="1" />
              </td>
              <td>
                <input class="t" tabindex="2" />
              </td>
              <td>
                <input class="t" tabindex="3" />
              </td>
              <td>
                <input class="t" tabindex="4" />
              </td>
              <td>
                <input class="t" tabindex="5" />
              </td>
              <td>
                <input class="t" tabindex="6" />{" "}
              </td>
            </tr>
            <tr>
              <th>
                <div class="desc">
                  <div class="primary">YAHTZEE </div>
                </div>
              </th>
              <th class="how-to-score">Score 50</th>
              <td>
                <input class="t" tabindex="1" />
              </td>
              <td>
                <input class="t" tabindex="2" />
              </td>
              <td>
                <input class="t" tabindex="3" />
              </td>
              <td>
                <input class="t" tabindex="4" />
              </td>
              <td>
                <input class="t" tabindex="5" />
              </td>
              <td>
                <input class="t" tabindex="6" />{" "}
              </td>
            </tr>
            <tr>
              <th>
                <div class="desc">
                  <div class="primary">Chance </div>
                </div>
              </th>
              <th class="how-to-score">Total of all dice</th>
              <td>
                <input class="t" tabindex="1" />
              </td>
              <td>
                <input class="t" tabindex="2" />
              </td>
              <td>
                <input class="t" tabindex="3" />
              </td>
              <td>
                <input class="t" tabindex="4" />
              </td>
              <td>
                <input class="t" tabindex="5" />
              </td>
              <td>
                <input class="t" tabindex="6" />{" "}
              </td>
            </tr>

            <tr class="foot">
              <th>
                <div class="desc">
                  <div class="primary">Total</div>
                  <div class="alt">Of Lower Section</div>
                </div>
              </th>
              <th class="how-to-score"></th>
              <td>
                <input class="t" tabindex="1" />
              </td>
              <td>
                <input class="t" tabindex="2" />
              </td>
              <td>
                <input class="t" tabindex="3" />
              </td>
              <td>
                <input class="t" tabindex="4" />
              </td>
              <td>
                <input class="t" tabindex="5" />
              </td>
              <td>
                <input class="t" tabindex="6" />
              </td>
            </tr>
            <tr class="foot">
              <th>
                <div class="desc">
                  <div class="primary">Total</div>
                  <div class="alt">Of Upper Section </div>
                </div>
              </th>
              <th class="how-to-score"></th>
              <td>
                <input class="t" tabindex="1" />
              </td>
              <td>
                <input class="t" tabindex="2" />
              </td>
              <td>
                <input class="t" tabindex="3" />
              </td>
              <td>
                <input class="t" tabindex="4" />
              </td>
              <td>
                <input class="t" tabindex="5" />
              </td>
              <td>
                <input class="t" tabindex="6" />
              </td>
            </tr>
            <tr class="foot">
              <th>
                <div class="desc">
                  <div class="primary">Grand Total</div>
                </div>
              </th>
              <th class="how-to-score"></th>
              <td>
                <input class="t" tabindex="1" />
              </td>
              <td>
                <input class="t" tabindex="2" />
              </td>
              <td>
                <input class="t" tabindex="3" />
              </td>
              <td>
                <input class="t" tabindex="4" />
              </td>
              <td>
                <input class="t" tabindex="5" />
              </td>
              <td>
                <input class="t" tabindex="6" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
