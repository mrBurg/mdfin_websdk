export type TArgv = Partial<Record<'httpPort' | 'httpsPort', number>>;

export type TNetworkInterface = Record<string, string[]>;

export type TJSON = Record<string, unknown>;

export type TEmptyObject = Record<string, never>;
