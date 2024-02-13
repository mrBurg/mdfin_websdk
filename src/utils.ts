import { RecognID } from '.';
import { IScriptProps, TJSON, TLogerData } from './@types';

export const $ = document.querySelector.bind(document);
export const $$ = document.querySelectorAll.bind(document);

export function generateUUId() {
  return ('' + 1e7 + -1e3 + -4e3 + -8e3 + -1e11).replace(
    /[018]/g,
    (c: unknown) =>
      (
        (c as number) ^
        (crypto.getRandomValues(new Uint8Array(1))[0] &
          (15 >> ((c as number) / 4)))
      ).toString(16)
  );
}

export const _ = {
  isBoolean(data: unknown) {
    return typeof data == typeof true;
  },
  isNumber(data: unknown) {
    return typeof data == typeof 0;
  },
  isString(data: unknown) {
    return typeof data == typeof '';
  },
  isFunction(data: unknown) {
    return typeof data == typeof (() => ({}));
  },
  isNull(data: unknown) {
    return data === null;
  },
  isObject(data: unknown) {
    return data != null && typeof data == typeof {} && !Array.isArray(data);
  },
  isArray(data: unknown) {
    return Array.isArray(data);
  },
  isUndefined(data: unknown) {
    return typeof data == String(void 0);
  },
};

/**
 * @param json - data object
 * @param restProps - [ string, boolean ]
 * @default encode true
 * @description string encoding
 * @default symbol ?
 * @description first symbol
 */
export function jsonToQueryString(
  json: TJSON,
  ...restProps: (boolean | string)[]
) {
  let encode = true;
  let symbol = '?';

  for (const param of restProps) {
    switch (true) {
      case _.isBoolean(param):
        encode = param as boolean;

        break;

      case _.isString(param):
        symbol = param as string;

        break;
    }
  }

  return (
    symbol +
    Object.entries(json)
      .map((item) => {
        let [key, value] = item;

        if (!value) {
          return false;
        }

        if (encode) {
          key = encodeURIComponent(key);
          value = encodeURIComponent(value as string);
        }

        return `${key}=${value}`;
      })
      .filter((value) => value)
      .join('&')
  );
}

export function appendScript(
  id: string,
  props: IScriptProps,
  callBack: () => void
) {
  const { src, type = 'text/javascript' } = props;

  if (document.getElementById(id)) {
    console.log(`The ${id} script is already appended`);

    callBack();

    return;
  }

  const script = document.createElement('script');

  script.onload = () => callBack();
  script.setAttribute('id', id);
  script.setAttribute('type', type);
  script.setAttribute('src', src);

  document.getElementsByTagName('head')[0].append(script);
}

export function appendStyle(id: string, callBack = () => void 0) {
  if (document.getElementById(id)) {
    console.log(`The ${id} style is already appended`);

    callBack();

    return;
  }

  const style = document.createElement('style');

  style.setAttribute('id', id);
  style.innerHTML = `
  * {
    outline: none;
  }
  `;

  document.head.append(style);
}

export function removeScripts(ids: string | string[]) {
  if (_.isString(ids)) {
    ids = [ids as string];
  }

  while (ids.length) {
    const script = document.getElementById(
      (ids as string[]).shift()
    ) as HTMLScriptElement;

    if (script) {
      script.remove();

      console.log(`Script ${script.id} has been removed`);
    } else {
      console.log(`The ${script.id} script is already removed or missing`);
    }
  }
}

export function joinURL(prefix: string, ...args: string[]) {
  const slash = new RegExp(/[\\/]/, 'g');
  const doublingSlash = new RegExp(`${slash.source}+`, 'g');
  const trimSlash = new RegExp(
    `^${doublingSlash.source}|${doublingSlash.source}$`,
    'g'
  );

  const replaceSlash = (data: string) =>
    data.replace(slash, '/').replace(trimSlash, '');

  return [
    replaceSlash(prefix),
    ...args.map((item) => replaceSlash(item).replace(doublingSlash, '/')),
  ].join('/');
}

export async function fetchData(uri: string, options?: RequestInit) {
  const response = await fetch(uri, options);
  const data = await response.json();

  if (response.status == 200) {
    return data;
  }

  throw { status: response.status, operation_id: data.operation_id };
}

export function string2html(
  str: string,
  type = 'text/html' as DOMParserSupportedType
) {
  return new DOMParser().parseFromString(str, type).body.firstChild;
}

/* function loggerOutput(data: TLogerData[], colorize?: boolean) {
  const consoleStyle = [
    'color: #ede4a3',
    'background-color: #564e4a',
    'padding: 0.2em',
  ].join(';');

  data.forEach((item: TLogerData) => {
    switch (true) {
      case _.isArray(item):
      case _.isObject(item):
      case _.isFunction(item):
        if (colorize) {
          console.groupCollapsed(`%c${item.constructor.name}`, consoleStyle);
        } else {
          console.groupCollapsed(typeof item);
        }
        console.log(item);
        console.groupEnd();

        break;
        
      default:
        if (colorize) {
          console.log(`%c${item}`, consoleStyle);
        } else {
          console.log(item);
        }
    }
  });
} */

/* export function logger(...data: TLogerData[]) {
  if (RecognID.logger) {
    loggerOutput(data, true);
  }
} */

export function trace(...data: TLogerData[]) {
  if (RecognID.environment == 'development') {
    console.log(...data);
  }
}

export const delay = (() => {
  let counter = 0;

  return (callback: () => void, ms = 0) => {
    clearTimeout(counter);
    counter = window.setTimeout(callback, ms);
  };
})();

export function triggerEvent(node: Document | HTMLElement, eventType: string) {
  const clickEvent = new Event(eventType, {
    bubbles: true,
    cancelable: false,
  });

  node.dispatchEvent(clickEvent);
}
