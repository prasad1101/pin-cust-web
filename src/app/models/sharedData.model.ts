interface CountryDataItem {
  [countryCode: string]: {
    country: string;
    region: string;
  };
}

export interface CountryData {
  status: string;
  'status-code': number;
  version: string;
  total: number;
  limit: number;
  offset: number;
  access: string;
  data: CountryDataItem;
}
