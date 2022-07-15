import "./App.css";
import { GASClient } from "gas-client";

import * as server from "../server/main";

import { ReactComponent as WorksLogo } from '../assets/works_logo.svg';

const { serverFunctions } = new GASClient<typeof server>();

function App() {
  const handleButtonClick = async () => {
    const sheetData = await serverFunctions.getSheetData();
    console.log(sheetData);

    serverFunctions.appendRowsToSheet("シート1", 1);
  };

  return (
    <div className="App">
      <button type="button" onClick={handleButtonClick}>
        ボタン
      </button>
      <WorksLogo />
    </div>
  );
}

export default App;