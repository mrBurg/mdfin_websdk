/**
 * @param operationId тоже самое что и externalDatabaseRefID для Facetec
 */
export type TLatestNetworkRequestParams = Record<
  | 'sessionId'
  | 'operationId'
  | 'idScan'
  | 'idScanFrontImage'
  | 'idScanBackImage'
  | 'faceScan'
  | 'auditTrailImage'
  | 'lowQualityAuditTrailImage',
  string
> &
  Partial<Record<'minMatchLevel', number>>;
