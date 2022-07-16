//┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//┃
//┃──┨ text.ts [Ver.2022_07_16] ┃
//┃
//┠──┨ Copyright(C) https://github.com/yano-kentaro
//┠──┨ https://www.kengineer.dev
//┠──┨ 開発開始日：2022_07_16
//┃
//┃──┨ 固定文字列の定義ファイル ┃
//┃
//┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

//------------------------------------------
// 汎用文字列
namespace text {
	export const menuTitle = 'サスケWorks';
	export const itemTitle = 'API連携';
}

//------------------------------------------
// サイドバーの文字列
namespace text.sideBar {
	export const config = '認証設定';
}



// ----------------------------------------------------
// 名詞
const STR_SAASKE_WORKS = 'サスケWorks';

const STR_API_KEY = 'API_KEY';

const STR_API_TOKEN = 'API_TOKEN';

const STR_APP_KEY = 'APP_KEY';


// ----------------------------------------------------
// 設定値
const VALUE_TAB_COLOR = '#38761D';


// ----------------------------------------------------
// URL
const URL_API_BASE = 'https://api.works.app/v1/';


// ----------------------------------------------------
// メニュー名
const MENU_API_AUTH_SETTING = 'API認証情報設定';

const MENU_USER = 'ユーザー情報';

const MENU_GET_USERS = '【GET】ユーザー一覧の取得';

const MENU_GET_USER = '【GET】ユーザー詳細の取得';

const MENU_IMPORT = 'レコード一括処理';

const MENU_CUSTOM_RECORDS = 'カスタムリスト関連';

const MENU_GET_IMPORT_SETTING = '【GET】一括登録設定の取得';

const MENU_POST_IMPORT = '【POST】実行する一括登録を選択';

const MENU_DELETE_IMPORT = '【DELETE】一括登録作業データの削除';

const MENU_GET_CUSTOM = '【GET】カスタムリスト一覧の取得';

const MENU_GET_RECORDS = '【GET】レコードを取得';

const MENU_APP = 'アプリ情報'

const MENU_GET_APPS = '【GET】アプリ一覧の取得';


// ----------------------------------------------------
// ダイアログのタイトル
const TITLE_API_CONFIRM = '実行確認';

const TITLE_API_AUTH_SETTING = 'API認証情報';

const TITLE_GET_APP = 'アプリ情報取得確認';

const TITLE_GET_USER = 'ユーザー選択';

const TITLE_POST_IMPORT = '一括登録の選択';

const TITLE_GET_RECORDS = 'レコードを取得するカスタムリストの選択';


// ----------------------------------------------------
// ダイアログのメッセージ
const MESSAGE_API_CONFIRM = 'APIを実行します。よろしいですか？';

const MESSAGE_UNKNOWN_ERROR = '不明なエラーが発生しました。';

const MESSAGE_GET_APP = '入力されたデータを元にアプリ情報を取得しますか？';

const MESSAGE_NO_RECORD = 'レコードが見つかりませんでした。';

const MESSAGE_POST_IMPORT_SUCCESS = "実行結果\\n";

const MESSAGE_POST_IMPORT_FAILED = "下記の理由で失敗しました。\\n";

const MESSAGE_DELETE_IMPORT_SUCCESS = '作業データを削除しました。';

const MESSAGE_DELETE_IMPORT_FAILED = '対象となる作業データはありませんでした。';

const MESSAGE_GET_USER = 'そのユーザー詳細情報は取得済みです。'


// ----------------------------------------------------
// タブ名
const TAB_APP_DETAIL = 'アプリ詳細';

const TAB_APP_DETAIL_SUB = 'サブレコード';

const TAB_GET_IMPORT_SETTING = '一括登録設定';

const TAB_GET_CUSTOM = 'カスタムリスト一覧';

const TAB_API_LOG = '実行履歴';

const TAB_GET_USERS = 'ユーザー一覧';

const TAB_GET_USER = 'ユーザー詳細';

const TAB_GET_APPS = 'アプリ一覧'


// ----------------------------------------------------
// ログの関数名
const LOG_API_AUTH_SETTING = 'アプリ詳細取得';

const LOG_POST_IMPORT = '一括登録';

const LOG_GET_IMPORT_SETTING = '一括登録設定の取得';

const LOG_DELETE_IMPORT_SETTING = '一括登録作業データの削除';

const LOG_GET_CUSTOM = 'カスタムリスト一覧の取得';

const LOG_GET_RECORDS = 'レコード取得（固定リスト）';

const LOG_GET_USERS = 'ユーザー一覧の取得';

const LOG_GET_USER = 'ユーザー詳細の取得';

const LOG_GET_APPS = 'アプリ一覧の取得'

export default text