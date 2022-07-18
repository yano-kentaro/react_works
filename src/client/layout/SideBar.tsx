//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//┃
//┃──┨ SideBar.tsx [Ver.2022_07_16] ┃
//┃
//┠──┨ Copyright(C) https://github.com/yano-kentaro
//┠──┨ https://www.kengineer.dev
//┠──┨ 開発開始日：2022_07_16
//┃
//┃──┨ メニューを表示するサイドバーのコンポーネント ┃
//┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

//=============================================================|0
//                         依存関係
//====================================================|2022_07_16

//------------------------------------------
// Modules
import React, { useEffect } from 'react';
// サーバー関連
import { GASClient } from "gas-client";
import * as server from "../../server/main";
const { serverFunctions } = new GASClient<typeof server>();

//------------------------------------------
// Recoil State
import { useSetRecoilState, useRecoilState } from 'recoil';
import { mainAreaView, sheetPropertiesState } from '../atoms';

//------------------------------------------
// Components
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import BookmarkSharpIcon from '@mui/icons-material/BookmarkSharp';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import DnsIcon from '@mui/icons-material/Dns';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import FolderIcon from '@mui/icons-material/Folder';
import GetAppSharpIcon from '@mui/icons-material/GetAppSharp';
import InfoIcon from '@mui/icons-material/Info';
import NumbersIcon from '@mui/icons-material/Numbers';
import PrivacyTipSharpIcon from '@mui/icons-material/PrivacyTipSharp';
import SendIcon from '@mui/icons-material/Send';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

//------------------------------------------
// Tailwind CSS
import '../index.css';

//------------------------------------------
// Text
import allText from '../text/text';
const text = allText.SideBar;

//------------------------------------------
// Static
import { ReactComponent as WorksLogo } from '../../assets/works_logo.svg';

//=============================================================|0
//                    コンポーネント定義
//====================================================|2022_07_16
function SideBar() {
  // レコード
  const [recordFlag, setRecordFlag] = React.useState(false);
  const toggleRecordFlag = () => {
    setRecordFlag(!recordFlag);
  }

  // カスタムリスト
  const [customFlag, setCustomFlag] = React.useState(false);
  const toggleCustomFlag = () => {
    setCustomFlag(!customFlag);
  }

  // その他
  const [otherFlag, setOtherFlag] = React.useState(false);
  const toggleOtherFlag = () => {
    setOtherFlag(!otherFlag);
  }

  //------------------------------------------
  // Recoil State
  // 初期描画時に認証情報を取得
  const [sheetProperties ,setSheetProperties] = useRecoilState(sheetPropertiesState);
  useEffect(() => {
    const getSheetProperties = async () => {
      const propertiesString = await serverFunctions.getProperties();
      const properties: SheetProperties = JSON.parse(propertiesString);
      setSheetProperties(properties);
    }
    getSheetProperties();
  },[]);

  //------------------------------------------
  // MainAreaViewのsetter
  const setMainAreaView = useSetRecoilState(mainAreaView);
  const updateMainAreaView = (view: string) => {
    setMainAreaView(view);
  }

  return (
    <Box className='SideBar'>
      <Box className='worksLogo'>
        <WorksLogo />
      </Box>
      <List className='w-full'>
        {/* レコード */}
        <ListItemButton onClick={toggleRecordFlag} disabled={!sheetProperties.auth}>
          <ListItemIcon><DnsIcon sx={{ color: "#069E2E" }} /></ListItemIcon>
          <ListItemText primary={text.record} />
          {recordFlag ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={recordFlag} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* 一括登録設定の取得 */}
            <ListItemButton onClick={() => updateMainAreaView('getImportation')} sx={{ pl: 4 }}>
              <ListItemIcon><GetAppSharpIcon color="success" /></ListItemIcon>
              <ListItemText primary={text.getImportation} />
            </ListItemButton>
            {/* 一括登録設定の取得 */}
            {/* 一括登録の予約 */}
            <ListItemButton onClick={() => updateMainAreaView('reserveImportation')} sx={{ pl: 4 }}>
              <ListItemIcon><BookmarkSharpIcon color="warning" /></ListItemIcon>
              <ListItemText primary={text.reserveImportation} />
            </ListItemButton>
            {/* 一括登録の予約 */}
            {/* 一括登録の実行 */}
            <ListItemButton onClick={() => updateMainAreaView('postImportation')} sx={{ pl: 4 }}>
              <ListItemIcon><SendIcon color="info" /></ListItemIcon>
              <ListItemText primary={text.postImportation} />
            </ListItemButton>
            {/* 一括登録の実行 */}
            {/* 一括登録作業データ削除 */}
            <ListItemButton onClick={() => updateMainAreaView('deleteImportation')} sx={{ pl: 4 }}>
              <ListItemIcon ><DeleteRoundedIcon color="error" /></ListItemIcon>
              <ListItemText primary={text.deleteImportation} />
            </ListItemButton>
            {/* 一括登録作業データ削除 */}
          </List>
        </Collapse>
        {/* レコード */}

        {/* カスタムリスト */}
        <ListItemButton onClick={toggleCustomFlag} disabled={!sheetProperties.auth}>
          <ListItemIcon><FolderIcon sx={{ color: "#EBC459" }} /></ListItemIcon>
          <ListItemText primary={text.custom} />
          {customFlag ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={customFlag} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* カスタムリスト取得 */}
            <ListItemButton onClick={() => updateMainAreaView('getCustom')} sx={{ pl: 4 }}>
              <ListItemIcon><GetAppSharpIcon color="success" /></ListItemIcon>
              <ListItemText primary={text.getCustom} />
            </ListItemButton>
            {/* カスタムリスト取得 */}
            {/* レコード取得の予約 */}
            <ListItemButton onClick={() => updateMainAreaView('reserveRecords')} sx={{ pl: 4 }}>
              <ListItemIcon><BookmarkSharpIcon color="warning" /></ListItemIcon>
              <ListItemText primary={text.reserveRecords} />
            </ListItemButton>
            {/* レコード取得の予約 */}
            {/* レコード取得の実行 */}
            <ListItemButton onClick={() => updateMainAreaView('getRecords')} sx={{ pl: 4 }}>
              <ListItemIcon><GetAppSharpIcon color="success" /></ListItemIcon>
              <ListItemText primary={text.getRecords} />
            </ListItemButton>
            {/* レコード取得の実行 */}
          </List>
        </Collapse>
        {/* カスタムリスト */}

        {/* 認証設定 */}
        <ListItemButton onClick={() => updateMainAreaView('setAuth')}>
          <ListItemIcon><SettingsRoundedIcon sx={{ color: "#A0B0C0" }} /></ListItemIcon>
          <ListItemText primary={text.config} />
        </ListItemButton>
        {/* 認証設定 */}

        {/* その他 */}
        <ListItemButton onClick={toggleOtherFlag}>
          <ListItemIcon><InfoIcon /></ListItemIcon>
          <ListItemText primary={text.info} />
          {otherFlag ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={otherFlag} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* バージョンボタン */}
            <ListItemButton onClick={() => updateMainAreaView('sheetVersion')} sx={{ pl: 4 }}>
              <ListItemIcon><NumbersIcon color="info" /></ListItemIcon>
              <ListItemText primary={text.version} />
            </ListItemButton>
            {/* バージョンボタン */}
            {/* ライセンスボタン */}
            <ListItemButton onClick={() => updateMainAreaView('sheetLicense')} sx={{ pl: 4 }}>
              <ListItemIcon><PrivacyTipSharpIcon color="warning" /></ListItemIcon>
              <ListItemText primary={text.license} />
            </ListItemButton>
            {/* ライセンスボタン */}
          </List>
        </Collapse>
        {/* その他 */}

      </List>
    </Box>
  )
}

export default SideBar
