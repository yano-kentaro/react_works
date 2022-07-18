//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//┃
//┃──┨ app.ts [Ver.2022_07_18] ┃
//┃
//┠──┨ Copyright(C) https://github.com/yano-kentaro
//┠──┨ https://www.kengineer.dev
//┠──┨ 開発開始日：2022_07_18
//┃
//┃──┨ Appクラス ┃
//┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

//=============================================================|0
//                         依存関係
//====================================================|2022_07_18

import { TextCommon, TextApp } from '../text/text';
import { Common } from '../lib/common';
import { Property } from './property';

//=============================================================|0
//                         Commonクラスの定義
//====================================================|2022_07_18

export class App {
    private textCommon = new TextCommon();
    private textApp = new TextApp();
    private common = new Common();
    private property = new Property();

    //=============================================================|0
    //                         アプリ情報の取得
    //====================================================|2022_07_17
    public getAppAPI = () => {
        // 認証情報の検証
        const properties: SheetProperties = JSON.parse(this.property.getProperties());
        if (!properties.auth) {
            return Browser.msgBox(this.textApp.noAuth);
        }

        // ヘッダー組み立て
        const options: GetAPIOptions = {
            method: 'get',
            headers: {
                'x-api-key': properties.apiKey,
                'x-token': properties.apiToken,
            },
        };

        // API実行
        const response: responseGetAppSuccess|responseGetAppFailed = JSON.parse(UrlFetchApp.fetch(
            this.textCommon.baseEndpoint + properties.appKey + '/app', options
        ).getContentText());

        // 実行ログの出力
        this.common.logOutput(this.textApp.logTitle);

        // エラーハンドリング
        if ('error' in response) {
            return Browser.msgBox(response.error.message);
        }

        // 出力情報
        const columns: string[] = [
            'アプリキー',
            'アプリ名',
            '短縮アプリ名',
            'ステータス',
            'アプリグループ名',
            'アプリ作成者名',
            'アプリ作成者コード',
            'アプリの説明',
            'アプリメインカラー',
            'アプリアイコン',
            'アプリQRコード',
            'お気に入り登録',
            'アプリURL',
            'Webフォーム機能',
            'メール送信機能',
            '帳票機能',
            'ダッシュボード機能',
            'ワークフロー機能',
            'レコード状態管理',
            '閲覧履歴',
            'コメント機能',
            'AI OCR機能',
        ];
        const sheet = this.common.specifySheet(this.textApp.tabTitle, columns);
        const values: (string|boolean)[][] = [];
        this.pushResponseGetApp(values, response)
        sheet.getRange(2,1,values.length,values[0].length).setValues(values);

        // サブレコードが登録されている場合
        if(response.subRecord.length) {
            const columns: string[] = [
                'サブレコード番号',
                'サブレコード名',
                '状態'
            ];
            const sheet = this.common.specifySheet(this.textApp.tabTitleSub, columns);
            const values: (string|boolean)[][] = [];
            this.pushSubRecordGetApp(values, response);
            sheet.getRange(2,1,values.length,values[0].length).setValues(values);
        }
    }

    //=============================================================|0
    //                         メインレコードの出力
    //====================================================|2022_07_18
    private pushResponseGetApp = (values: (string|boolean)[][], responseJson: responseGetAppSuccess) => {
        const rowData: (string|boolean)[] = [];
        const appInfo = responseJson.appInfo;
        appInfo.appKey ? rowData.push(appInfo.appKey) : rowData.push('');
        appInfo.appName ? rowData.push(appInfo.appName) : rowData.push('');
        appInfo.appShortName ? rowData.push(appInfo.appShortName) : rowData.push('');
        appInfo.appStatus ? rowData.push(appInfo.appStatus) : rowData.push('');
        appInfo.appGroup ? rowData.push(appInfo.appGroup) : rowData.push('');
        appInfo.appAuthor.name ? rowData.push(appInfo.appAuthor.name) : rowData.push('');
        appInfo.appAuthor.code ? rowData.push(appInfo.appAuthor.code) : rowData.push('');
        appInfo.appMemo ? rowData.push(appInfo.appMemo) : rowData.push('');
        appInfo.appColor ? rowData.push(appInfo.appColor) : rowData.push('');
        appInfo.appIcon ? rowData.push(appInfo.appIcon) : rowData.push('');
        appInfo.appQrcode ? rowData.push(appInfo.appQrcode) : rowData.push('');
        appInfo.appFavorite ? rowData.push(appInfo.appFavorite) : rowData.push('');
        appInfo.appUrl ? rowData.push(appInfo.appUrl) : rowData.push('');
        appInfo.appFunction.webform ? rowData.push(appInfo.appFunction.webform) : rowData.push('');
        appInfo.appFunction.sendmail ? rowData.push(appInfo.appFunction.sendmail) : rowData.push('');
        appInfo.appFunction.report ? rowData.push(appInfo.appFunction.report) : rowData.push('');
        appInfo.appFunction.dashboard ? rowData.push(appInfo.appFunction.dashboard) : rowData.push('');
        appInfo.appFunction.workflow ? rowData.push(appInfo.appFunction.workflow) : rowData.push('');
        appInfo.appFunction.status ? rowData.push(appInfo.appFunction.status) : rowData.push('');
        appInfo.appFunction.view ? rowData.push(appInfo.appFunction.view) : rowData.push('');
        appInfo.appFunction.comment ? rowData.push(appInfo.appFunction.comment) : rowData.push('');
        appInfo.appFunction.aiocr ? rowData.push(appInfo.appFunction.aiocr) : rowData.push('');
        values.push(rowData);
    }

    //=============================================================|0
    //                         サブレコードの出力
    //====================================================|2022_07_18
    private pushSubRecordGetApp = (values: (string|boolean)[][], responseJson: responseGetAppSuccess) => {
        const subRecords = responseJson.subRecord;
        subRecords.forEach(el => {
            const rowData: string[] = [];
            el.subCode ? rowData.push(el.subCode) : rowData.push('');
            el.subName ? rowData.push(el.subName) : rowData.push('');
            el.subStatus ? rowData.push(el.subStatus) : rowData.push('');
            values.push(rowData);
        });
    }
}
