//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//┃
//┃──┨ import.ts [Ver.2022_07_20] ┃
//┃
//┠──┨ Copyright(C) https://github.com/yano-kentaro
//┠──┨ https://www.kengineer.dev
//┠──┨ 開発開始日：2022_07_20
//┃
//┃──┨ Importクラス ┃
//┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

//=============================================================|0
//                         依存関係
//====================================================|2022_07_18

import { TextCommon, TextImport } from '../text/text';
import { Common } from '../lib/common';
import { Property } from './property';

//=============================================================|0
//                         Commonクラスの定義
//====================================================|2022_07_18

export class Import {
    private textCommon = new TextCommon();
    private textImport = new TextImport();
    private common = new Common();
    private property = new Property();

    //=============================================================|0
    //                         一括登録設定の取得
    //====================================================|2022_07_20
    public getImportAPI = () => {
        // 認証情報の検証
        const properties: SheetProperties = JSON.parse(this.property.getProperties());
        if (!properties.auth) {
            return Browser.msgBox(this.textCommon.noAuth);
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
        const response: responseGetImportSuccess|responseGetImportFailed = JSON.parse(UrlFetchApp.fetch(
            this.textCommon.baseEndpoint + properties.appKey + '/import/settings', options
        ).getContentText());

        // 実行ログの出力
        this.common.logOutput(this.textImport.logTitle);

        // エラーハンドリング
        if ('error' in response) {
            return Browser.msgBox(response.error.message);
        }

        // 出力情報
        const columns: string[] = [
            '識別キー',
            '設定名称',
            'インポートタイプ',
            'データの種類',
            '状態',
            'サブレコード番号',
            '設定作成者名',
            '設定作成者コード'
        ];
        const sheet = this.common.specifySheet(this.textImport.tabTitle, columns);
        this.common.clearSheetExceptColumns(sheet);
        const values: (string)[][] = [];
        this.pushResponseGetImport(values, response)
        sheet.getRange(2,1,values.length,values[0].length).setValues(values);
    }

    //=============================================================|0
    //                         一括登録設定の出力
    //====================================================|2022_07_18
    private pushResponseGetImport(values: (string)[][], settings: responseGetImportSuccess) {
        const importSettings = settings.importSettings;
        importSettings.forEach(el => {
            const rowData: string[] = [];
            el.importKey ? rowData.push(el.importKey) : rowData.push('');
            el.importName ? rowData.push(el.importName) : rowData.push('');
            el.importTyep ? rowData.push(el.importTyep) : rowData.push('');
            el.importKind ? rowData.push(el.importKind) : rowData.push('');
            el.importStatus ? rowData.push(el.importStatus) : rowData.push('');
            el.importSubRecord ? rowData.push(el.importSubRecord) : rowData.push('');
            el.importRegistAaccount.name ? rowData.push(el.importRegistAaccount.name) : rowData.push('');
            el.importRegistAaccount.code ? rowData.push(el.importRegistAaccount.code) : rowData.push('');
            values.push(rowData);
        });
    }
}
