import { GASClient } from "gas-client";

import * as server from "../server/main";

import { ReactComponent as WorksLogo } from '../assets/works_logo.svg';

import {
  RecoilRoot, atom, selector, useRecoilState, useRecoilValue,
} from 'recoil';

const { serverFunctions } = new GASClient<typeof server>();

function App() {
  const handleButtonClick = async () => {
    const sheetData = await serverFunctions.getSheetData();
    console.log(sheetData);

    serverFunctions.appendRowsToSheet("シート1", 1);
  };

  const textState = atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
  });
  const [text, setText] = useRecoilState(textState);

  const onChange = () => {
    setText('TEST');
  };

  return (
    <div className="App">
      <button type="button" onClick={onChange}>
        ボタン
      </button>
      {text}
      {/* <WorksLogo /> */}
    </div>
  );
}

export default App;