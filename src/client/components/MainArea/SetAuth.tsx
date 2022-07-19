//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//┃
//┃──┨ SetAuth.tsx [Ver.2022_07_16] ┃
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
import { useState, useEffect } from 'react';
// サーバーサイド関連
import { GASClient } from "gas-client";
import * as server from "../../../server/main";
const { serverFunctions } = new GASClient<typeof server>();
// フォーム関連
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

//------------------------------------------
// Recoil
import { useRecoilState } from 'recoil';
import { sheetPropertiesState } from "../../atoms";

//------------------------------------------
// Components
import TitleBar from './parts/TitleBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { blue, green } from '@mui/material/colors';

//------------------------------------------
// Tailwind CSS
import '../../index.css'

//------------------------------------------
// Text
import allText from '../../text/text';
const text = allText.SetAuth;

//=============================================================|0
//                    コンポーネント定義
//====================================================|2022_07_16

function SetAuth() {
  // 認証情報の状態管理
  const [sheetProperties, setSheetProperties] = useRecoilState(sheetPropertiesState);

  // バリデーション
  const schema = yup.object({
    apiKey: 
      yup.string()
      .required(text.apiKeyRequired)
      .min(30, text.apiKeyInvalid)
      .matches(/^AK/, text.apiKeyInvalid),
    apiToken:
      yup.string()
      .required(text.apiTokenRequired)
      .min(30, text.apiTokenInvalid)
      .matches(/^TK/, text.apiTokenInvalid),
    appKey:
      yup.string().
      required(text.appKeyRequired)
      .matches(/^[A-Z0-9]{3,12}$/, text.appKeyInvalid),
  });

  // フォーム設定
  const {
    register, handleSubmit, formState: {errors}
  } = useForm<PostProperties>({
    resolver: yupResolver(schema),
  });

  // フォーム送信
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const onSubmit: SubmitHandler<PostProperties> = async (data) => {
    setLoading(true);
    setSuccess(false);
    await serverFunctions.setAuth(data);
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
    <Box className="SetAuth">
      <TitleBar title={text.title} />
      <Box className="p-8">
        <Typography variant="h6" className="headline">
          {text.howToUse}
        </Typography>
        <Typography variant="body1" className="textBody">
          使い方の解説
        </Typography>
        <Typography variant="h6" className="headline">
          {text.formTitle}
        </Typography>
        <Stack spacing={3}>
          <TextField
            required label={text.apiKeyLabel}
            defaultValue={sheetProperties.apiKey}
            {...register("apiKey")}
            error={"apiKey" in errors}
            helperText={errors.apiKey?.message}
          />
          <TextField
            required label={text.apiTokenLabel}
            defaultValue={sheetProperties.apiToken}
            {...register("apiToken")}
            error={"apiToken" in errors}
            helperText={errors.apiToken?.message}
          />
          <TextField
            required label={text.appKeyLabel}
            defaultValue={sheetProperties.appKey}
            {...register("appKey")}
            error={"appKey" in errors}
            helperText={errors.appKey?.message}
          />
          <Box className='flex justify-center'>
            <Button
              className="w-1/4" variant="contained" size="large"
              disabled={loading} sx={buttonSx}
              onClick={handleSubmit(onSubmit)}
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
        </Stack>
      </Box>
    </Box>
  )
}

export default SetAuth
