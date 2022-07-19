//------------------------------------------
// GETメソッドのヘッダー
type GetAPIOptions = {
    method: 'get';
    headers: {
        'x-api-key': string;
        'x-token': string;
    }
}

//------------------------------------------
// プロパティ
type PostProperties = {
    apiKey: string;
    apiToken: string;
    appKey: string;
}

type SheetProperties = {
    apiKey: string;
    apiToken: string;
    appKey: string;
    auth: boolean;
}

//------------------------------------------
// GET /app のレスポンス
type responseGetAppSuccess = {
    appInfo: {
        appKey: string,
        appName: string,
        appShortName: string,
        appStatus: string,
        appGroup: string,
        appAuthor: {
            name: string,
            code: string,
        },
        appMemo: string,
        appColor: string,
        appIcon: string,
        appQrcode: string,
        appFavorite: string,
        appUrl: string,
        appFunction: {
            webform: boolean,
            sendmail: boolean,
            report: boolean,
            dashboard: boolean,
            workflow: boolean,
            status: boolean,
            view: boolean,
            comment: boolean,
            aiocr: boolean
        }
    },
    subRecord: {
        subCode: string,
        subName: string,
        subStatus: string
    }[]
};

type responseGetAppFailed = {
    error: {
        id: number,
        code: string,
        message: string
    }
}

//------------------------------------------
// GET /import/settings のレスポンス
type responseGetImportSuccess = {
	count: number,
	importSettings: {
		importKey: string,
		importName: string,
		importTyep: string,
		importKind: string,
		importStatus: string,
		importSubRecord: string,
		importRegistAaccount: {
			name: string,
			code: string
		}
	}[]
};

type responseGetImportFailed = {
	error: {
		id: number,
		code: string,
		message: string
	}
}

//------------------------------------------
// タイトルバーの文字列 prop
type TitleBarProps = {
    title: string;
}
