import { GASClient } from "gas-client";

import * as server from "../server/main";

import { ReactComponent as WorksLogo } from '../assets/works_logo.svg';

import {
  RecoilRoot, atom, selector, useRecoilState, useRecoilValue,
} from 'recoil';
import './index.css';

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
      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Cyan to blue
        </span>
      </button>
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default</button>
      <button type="button" onClick={onChange}>
        ボタン
      </button>
      <p className="text-3xl font-bold underline">{text}</p>
      {/* <WorksLogo /> */}
    </div>
  );
}

export default App;