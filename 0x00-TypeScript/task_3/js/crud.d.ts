import { RowElement, RowID  } from './interface';

export function insertRow (row: RowElement): number;

export function deleteRow (rowid: RowID): void;

export function updateRow (rowid: RowID, row: RowElement): number;

