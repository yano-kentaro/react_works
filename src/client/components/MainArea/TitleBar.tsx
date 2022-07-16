//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//┃
//┃──┨ TitleBar.tsx [Ver.2022_07_16] ┃
//┃
//┠──┨ Copyright(C) https://github.com/yano-kentaro
//┠──┨ https://www.kengineer.dev
//┠──┨ 開発開始日：2022_07_16
//┃
//┃──┨ メインエリアのタイトルバー ┃
//┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

//=============================================================|0
//                         依存関係
//====================================================|2022_07_16

//------------------------------------------
// Components
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import BeenhereIcon from '@mui/icons-material/Beenhere';

//------------------------------------------
// Tailwind CSS
import '../../index.css'

//=============================================================|0
//                         スタイル定義
//====================================================|2022_07_16
const style = {
  root: {
    width: "800px",
  },
  appBar: {
    backgroundColor: "#FDFDFD",
    boxShadow: "none",
    borderBottom: "1px solid #E0E0E0",
  },
  typography: {
    color: "#000000",
    display: "flex",
    alignItems: "center",
  }
}


//=============================================================|0
//                       コンポーネント定義
//====================================================|2022_07_16
type TitleBarProps = {
  title: string;
}

function TitleBar(props: TitleBarProps) {
  return (
    <Box className="TitleBar" sx={style.root}>
      <AppBar position="static" style={style.appBar}>
        <Toolbar>
          <Typography variant="h5" sx={style.typography}>
            <BeenhereIcon className='mx-5' /> {props.title}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default TitleBar
