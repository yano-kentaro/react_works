import text from './text/text';

const onOpen = () => {
	const menu = SpreadsheetApp.getUi().createMenu(text.menuTitle).addItem(text.itemTitle, "openDialog");
	menu.addToUi();
};

const openDialog = () => {
	const html = HtmlService.createHtmlOutputFromFile("index").setWidth(1200).setHeight(600);
	SpreadsheetApp.getUi().showModalDialog(html, `${text.menuTitle} ${text.itemTitle}`);
};

interface SheetData {
	name: string;
	numOfRows: number;
}

// TODO: テスト用の関数なので、適切なものに変更する
const getSheetData = (): SheetData => {
	const sheet = SpreadsheetApp.getActiveSheet();
	return {
	name: sheet.getName(),
	numOfRows: sheet.getMaxRows(),
	};
};

// TODO: テスト用の関数なので、適切なものに変更する
const appendRowsToSheet = (sheetName: string, rowsToAdd: number): void => {
	const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
	if (!sheet) return;
	sheet.insertRowsAfter(sheet.getMaxRows(), rowsToAdd);
	sheet.getRange(1, 1, 5, 5).setValues([
	[1, 2, 3, 4, 5],
	[6, 7, 8, 9, 10],
	[11, 12, 13, 14, 15],
	[16, 17, 18, 19, 20],
	[21, 22, 23, 24, 25],
	]);
};

export { getSheetData, appendRowsToSheet };