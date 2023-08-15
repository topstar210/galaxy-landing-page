export {};

declare global {
  type TextInput =
    | "email"
    | "number"
    | "password"
    | "search"
    | "tel"
    | "text"
    | "url";

  interface Test {
    status: string;
  }

  interface ContentfulReqBody {
    content_type: string;
    // TODO: Define project specific filters for ts-autocompletion.
    [key: string]: any;
  }
  
}

