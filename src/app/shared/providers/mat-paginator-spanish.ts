import { Injectable } from "@angular/core";
import { MatPaginatorIntl } from "@angular/material/paginator";

@Injectable()
export class MatPaginatorSpanish extends MatPaginatorIntl {
  public itemsPerPageLabel = "Registros por página: ";
  public nextPageLabel = "Página siguiente";
  public previousPageLabel = "Página anterior";

  public constructor() {
    super();
  }

  public getRangeLabel = (page: number, pageSize: number, length: number): string => {
    if (length === 0 || pageSize === 0) {
      return `0  de ${length}`;
    }
    length = Math.max(length, 0);
    const startIndex = page;
    // const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    const endIndex = Math.ceil(length / pageSize);

    return `Página ${startIndex + 1} de ${endIndex}`;
  };
}

export const MatPaginatorProvider = [
  {
    provide: MatPaginatorIntl,
    useClass: MatPaginatorSpanish,
  },
];
