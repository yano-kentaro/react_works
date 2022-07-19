//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//┃
//┃──┨ common.ts [Ver.2022_07_18] ┃
//┃
//┠──┨ Copyright(C) https://github.com/yano-kentaro
//┠──┨ https://www.kengineer.dev
//┠──┨ 開発開始日：2022_07_18
//┃
//┃──┨ Commonクラス ┃
//┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

//=============================================================|0
//                         依存関係
//====================================================|2022_07_18

import { TextCommon } from '../text/text';

//=============================================================|0
//                         Commonクラスの定義
//====================================================|2022_07_18

export class Common {
    private text;
    private ss = SpreadsheetApp.getActiveSpreadsheet();
    private ui = SpreadsheetApp.getUi();
    constructor() {
        this.text = new TextCommon();
    }

    //=============================================================|0
    //                         シートの指定
    //====================================================|2022_07_18
    public specifySheet = (sheetName: string, columns: string[]) => {
        // シートがあればシートを返す
        let ret = this.ss.getSheetByName(sheetName);
        // シートがなければ作成・初期設定して返す
        if(!ret) {
            ret = this.ss.insertSheet(sheetName);
            const sheet = this.ss.getSheetByName(sheetName);
            if(sheet) {
                sheet.getRange(1,1,1,columns.length).setValues([columns]);
                sheet.getDataRange().applyRowBanding(SpreadsheetApp.BandingTheme.LIGHT_GREEN);
            }
            sheet?.setTabColor(this.text.tabColor);
        }
        return ret;
    }

    //=================================================================|0
    //                        シートの登録データ削除
    //========================================================|2022.03.11
    public clearSheetExceptColumns = (sheet: GoogleAppsScript.Spreadsheet.Sheet): void => {
        const lastRow = sheet.getLastRow();
        const lastColum = sheet.getLastColumn();
        sheet.getRange(2,1,lastRow,lastColum).clearContent();
    }

    //=============================================================|0
    //                         API実行ログの出力
    //====================================================|2022_07_17
    public logOutput = (funcName: string): void => {
        // シートの指定
        const columns = [
            '実行日時',
            '実行API',
            '実行ユーザー'
        ];
        const sheet = this.specifySheet(this.text.tabNameLog, columns);
    
        // 実行日時の取得
        const execDate = Utilities.formatDate(new Date(), 'JST', 'yyyy-MM-dd HH:mm:ss');
    
        // 実行ユーザーIDの取得
        const activeUserName = this.getUserName();
    
        // ログの出力
        const logData = [execDate, funcName, activeUserName];
        const lastRow = sheet.getLastRow();
        sheet.getRange(lastRow + 1, 1, 1, logData.length).setValues([logData]);
    }


    //=============================================================|0
    //                         ユーザー名の取得
    //====================================================|2022_07_18
    getUserName = () => {
        let name;
        try {
            const contact = ContactsApp.getContact(Session.getActiveUser().toString());
            name = contact.getFullName()
        } catch (e) {
            console.log(e);
            name = this.text.unknownUser;
        }
        return name;
    }
}
