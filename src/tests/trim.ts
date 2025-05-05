import { doNotExecute, Equal, Expect } from "./utils";

doNotExecute(() => {
  const str = "  hello  " as const;

  // trim tests
  const trimmed = str.trim();
  type trimTest = [Expect<Equal<typeof trimmed, "hello">>];

  // trimStart/trimLeft tests
  const trimmedStart = str.trimStart();
  type trimStartTest = Expect<Equal<typeof trimmedStart, "hello  ">>;

  const trimmedLeft = str.trimLeft();
  type trimLeftTest = Expect<Equal<typeof trimmedLeft, "hello  ">>;

  // trimEnd/trimRight tests
  const trimmedEnd = str.trimEnd();
  type trimEndTest = Expect<Equal<typeof trimmedEnd, "  hello">>;

  const trimmedRight = str.trimRight();
  type trimRightTest = Expect<Equal<typeof trimmedRight, "  hello">>;
});

doNotExecute(() => {
  const str = "\thello\n" as const;

  const trimmed = str.trim();
  type trimTest = Expect<Equal<typeof trimmed, "hello">>;

  const trimmedStart = str.trimStart();
  type trimStartTest = Expect<Equal<typeof trimmedStart, "hello\n">>;

  const trimmedEnd = str.trimEnd();
  type trimEndTest = Expect<Equal<typeof trimmedEnd, "\thello">>;
});

doNotExecute(() => {
  // Test with string literals that contain different whitespace combinations
  const str = " \t\nhello world\t \n" as const;

  const trimmed = str.trim();
  type trimTest = Expect<Equal<typeof trimmed, "hello world">>;
});

doNotExecute(() => {
  // Test with empty string and whitespace-only string
  const emptyStr = "" as const;
  const whitespaceStr = "   \t\n" as const;

  const trimmedEmpty = emptyStr.trim();
  type trimEmptyTest = Expect<Equal<typeof trimmedEmpty, "">>;

  const trimmedWhitespace = whitespaceStr.trim();
  type trimWhitespaceTest = Expect<Equal<typeof trimmedWhitespace, "">>;
});

doNotExecute(() => {
  // Test with string type (not literals)
  const str: string = "  hello  ";

  const trimmed = str.trim();
  type trimTest = Expect<Equal<typeof trimmed, string>>;

  const trimmedStart = str.trimStart();
  type trimStartTest = Expect<Equal<typeof trimmedStart, string>>;

  const trimmedEnd = str.trimEnd();
  type trimEndTest = Expect<Equal<typeof trimmedEnd, string>>;
});
