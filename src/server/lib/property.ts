//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//┃
//┃──┨ property.ts [Ver.2022_07_18] ┃
//┃
//┠──┨ Copyright(C) https://github.com/yano-kentaro
//┠──┨ https://www.kengineer.dev
//┠──┨ 開発開始日：2022_07_18
//┃
//┃──┨ Propertyクラス ┃
//┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

//=============================================================|0
//                         依存関係
//====================================================|2022_07_18

const scriptProperties = PropertiesService.getScriptProperties();
const userProperties = PropertiesService.getUserProperties();

//=============================================================|0
//                         Propertyクラスの定義
//====================================================|2022_07_18

export class Property {
    constructor() {}

    //=============================================================|0
    //                         プロパティの取得
    //====================================================|2022_07_17

    //------------------------------------------
    // 単一のプロパティを取得
    private getProperty = (key: string, type: 'script' | 'user'): string => {
        let value = '', dummy: string|null;
        if (type === 'script') {
            dummy = scriptProperties.getProperty(key);
            value = dummy ? dummy : '';
        } else if (type === 'user') {
            dummy = userProperties.getProperty(key);
            value = dummy ? dummy : '';
        }
        return value;
    }

    //------------------------------------------
    // 全てのプロパティを取得
    public getProperties = (): string => {
        let apiKey = this.getProperty('apiKey', 'script');
        let apiToken = this.getProperty('apiToken', 'user');
        let appKey = this.getProperty('appKey', 'script');
        let auth: boolean;
        (apiKey && apiToken && appKey) ? auth = true : auth = false;

        const properties: SheetProperties = {
            apiKey: apiKey,
            apiToken: apiToken,
            appKey: appKey,
            auth: auth,
        };

        // JSON形式ではフロントに渡せないので、文字列に変換
        return JSON.stringify(properties);
    }

    //=============================================================|0
    //                         プロパティの設定
    //====================================================|2022_07_17

    public setProperties = (properties: PostProperties) => {
        try {
            scriptProperties.setProperty('apiKey', properties.apiKey);
            userProperties.setProperty('apiToken', properties.apiToken);
            scriptProperties.setProperty('appKey', properties.appKey);
        } catch (e) {
            Browser.msgBox(`${e}`);
        }
    }
}