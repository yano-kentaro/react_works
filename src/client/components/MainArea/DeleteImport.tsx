//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//┃
//┃──┨ DeleteImport.tsx [Ver.2022_07_16] ┃
//┃
//┠──┨ Copyright(C) https://github.com/yano-kentaro
//┠──┨ https://www.kengineer.dev
//┠──┨ 開発開始日：2022_07_16
//┃
//┃──┨ 認証情報設定画面 ┃
//┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

//=============================================================|0
//                         依存関係
//====================================================|2022_07_16

//------------------------------------------
// Modules

//------------------------------------------
// Components
import TitleBar from './parts/TitleBar';
import Box from '@mui/material/Box';

//------------------------------------------
// Functions

//------------------------------------------
// Tailwind CSS
import '../../index.css'

//------------------------------------------
// Text
import allText from '../../text/text';
const text = allText.DeleteImport;

//------------------------------------------
// Static

//=============================================================|0
//                    コンポーネント定義
//====================================================|2022_07_16
function DeleteImport() {

  return (
    <Box className="DeleteImport">
      <TitleBar title={text.title} />
    </Box>
  )
}

export default DeleteImport
