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
import { RecoilRoot } from 'recoil';

//------------------------------------------
// Components
import SideBar from './layout/SideBar';
import MainArea from './layout/MainArea';
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'

//=============================================================|0
//                    コンポーネント定義
//====================================================|2022_07_16

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <CssBaseline />
      <Box className='flex'>
        <SideBar />
        <MainArea />
      </Box>
    </RecoilRoot>
  </React.StrictMode>
)
