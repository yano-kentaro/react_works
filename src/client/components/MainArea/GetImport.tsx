//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//┃
//┃──┨ GetImport.tsx [Ver.2022_07_16] ┃
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
import { useState} from 'react';
// サーバーサイド関連
import { GASClient } from "gas-client";
import * as server from "../../../server/main";
const { serverFunctions } = new GASClient<typeof server>();

//------------------------------------------
// Components
import TitleBar from './parts/TitleBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { blue, green } from '@mui/material/colors';

//------------------------------------------
// Functions

//------------------------------------------
// Tailwind CSS
import '../../index.css'

//------------------------------------------
// Text
import allText from '../../text/text';
const text = allText.GetImport;

//------------------------------------------
// Static

//=============================================================|0
//                    コンポーネント定義
//====================================================|2022_07_16
function GetImport () {
  // フォーム送信
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const onSubmit = async () => {
    setLoading(true);
    setSuccess(false);
    await serverFunctions.getImportAPI();
    setLoading(false);
    setSuccess(true);
  }

  // 送信ボタンデザイン
  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700],
      },
    }),
    ...(!success && {
      bgcolor: blue[500],
      '&:hover': {
        bgcolor: blue[700],
      },
    })
  };
  // ローディングアニメーションデザイン
  const circularProgressSx = {
    color: blue[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: '-12px',
    marginLeft: '-12px',
  }

  return (
    <Box className="GetImport">
      <TitleBar title={text.title} />
      <Box className="p-8">
        <Typography variant="h6" className="headline">
          {text.howToUse}
        </Typography>
        <Typography variant="body1" className="textBody">
          使い方の解説
        </Typography>
        <Box className='flex justify-center'>
          <Button
            className="w-1/4" variant="contained" size="large"
            disabled={loading} sx={buttonSx} onClick={onSubmit}
          >
            {
              loading ? text.loadingButtonLabel
              : success ? text.successButtonLabel
              : text.submitButtonLabel
            }
            {loading && (
              <CircularProgress
                size={24} 
                sx={circularProgressSx}
              />
            )}
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default GetImport
