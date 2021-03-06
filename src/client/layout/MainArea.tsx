//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//┃
//┃──┨ MainArea.tsx [Ver.2022_07_16] ┃
//┃
//┠──┨ Copyright(C) https://github.com/yano-kentaro
//┠──┨ https://www.kengineer.dev
//┠──┨ 開発開始日：2022_07_16
//┃
//┃──┨ メインエリアの表示部分 ┃
//┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

//=============================================================|0
//                         依存関係
//====================================================|2022_07_16

//------------------------------------------
// Recoil State
import { useRecoilValue } from 'recoil';
import { mainAreaView } from '../atoms';

//------------------------------------------
// Components
import Top from '../components/MainArea/Top';
import GetImport from '../components/MainArea/GetImport';
import ReserveImport from '../components/MainArea/ReserveImport';
import PostImport from '../components/MainArea/PostImport';
import DeleteImport from '../components/MainArea/DeleteImport';
import GetCustom from '../components/MainArea/GetCustom';
import ReserveRecords from '../components/MainArea/ReserveRecords';
import GetRecords from '../components/MainArea/GetRecords';
import SetAuth from '../components/MainArea/SetAuth';
import Version from '../components/MainArea/Version';
import License from '../components/MainArea/License';
import Box from '@mui/material/Box';

//------------------------------------------
// Tailwind CSS
import '../index.css'

//=============================================================|0
//                    コンポーネント定義
//====================================================|2022_07_16

function MainArea() {
  const mainArea = useRecoilValue(mainAreaView);

  return (
    <Box className="MainArea">
      {(() => {
        switch (mainArea) {
          case 'getImportation':     return <GetImport />;
          case 'reserveImportation': return <ReserveImport />;
          case 'postImportation':    return <PostImport />;
          case 'deleteImportation':  return <DeleteImport />;
          case 'getCustom':          return <GetCustom />;
          case 'reserveRecords':     return <ReserveRecords />;
          case 'getRecords':         return <GetRecords />;
          case 'setAuth':            return <SetAuth />;
          case 'sheetVersion':       return <Version />;
          case 'sheetLicense':       return <License />;
          default:                   return <Top />;
        }
      })()}
    </Box>
  )
}

export default MainArea
