declare namespace API.Base {
  type BaseVO = {
    id: string | number;
  };

  type BaseDTO = {
    id?: string | number;
  };

  type GetQuery = {
    id?: string | number;
  };

  type BaseQuery = {
    current?: number;
    pageNo?: number;
    pageSize?: number;
  };

  type DeleteDTO = {
    ids: Array<string | number>;
  };
}
