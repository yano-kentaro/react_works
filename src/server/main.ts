//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//┃
//┃──┨ main.ts [Ver.2022_07_18] ┃
//┃
//┠──┨ Copyright(C) https://github.com/yano-kentaro
//┠──┨ https://www.kengineer.dev
//┠──┨ 開発開始日：2022_07_18
//┃
//┃──┨ メイン処理 ┃
//┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

//=============================================================|0
//                         依存関係
//====================================================|2022_07_18

import { TextCommon } from './text/text';
const text = new TextCommon();
import { App } from './lib/app';
const app = new App();
import { Property } from './lib/property';
const property = new Property();

//=============================================================|0
//                         シートを開いた際の処理
//====================================================|2022_07_17

const onOpen = () => {
	const menu = SpreadsheetApp.getUi().createMenu(text.menuTitle).addItem(text.itemTitle, "openDialog");
	menu.addToUi();
};

//=============================================================|0
//                         メニューボタン押下時の処理
//====================================================|2022_07_17

const openDialog = () => {
	const html = HtmlService.createHtmlOutputFromFile("index").setWidth(1200).setHeight(600);
	SpreadsheetApp.getUi().showModalDialog(html, `${text.menuTitle} ${text.itemTitle}`);
};

//=============================================================|0
//                         認証設定送信時の処理
//====================================================|2022_07_18

export const setAuth = (data: PostProperties) => {
	property.setProperties(data);
	app.getAppAPI();
};

//=============================================================|0
//                         認証設定取得時の処理
//====================================================|2022_07_18

export const getProperties = () => {
	return property.getProperties();
}
