//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//┃
//┃──┨ main.tsx [Ver.2022_07_16] ┃
//┃
//┠──┨ Copyright(C) https://github.com/yano-kentaro
//┠──┨ https://www.kengineer.dev
//┠──┨ 開発開始日：2022_07_16
//┃
//┃──┨ メイン処理 ┃
//┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

//=============================================================|0
//                         依存関係
//====================================================|2022_07_16

//------------------------------------------
// Modules
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RecoilRoot, atom, selector, useRecoilState, useRecoilValue,
} from 'recoil';

//------------------------------------------
// Components
import App from './App'

//------------------------------------------
// Functions

//------------------------------------------
// Tailwind CSS


//------------------------------------------
// Text
// import * as TXT from 'src/text/'

//------------------------------------------
// Static

//=============================================================|0
//                    コンポーネント定義
//====================================================|2022_07_16
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
)
