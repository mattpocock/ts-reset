import { doNotExecute, Equal, Expect } from "./utils";

// HTMLElement.cloneNode() should return HTMLElement, not Node
doNotExecute(() => {
  const el = document.createElement("div") as HTMLElement;
  const clone = el.cloneNode();

  type test = Expect<Equal<typeof clone, HTMLElement>>;
});

// SVGElement.cloneNode(true) should return SVGElement (original issue #192)
doNotExecute(() => {
  const svg = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg",
  ) as SVGElement;
  const clone = svg.cloneNode(true);

  type test = Expect<Equal<typeof clone, SVGElement>>;
});

// HTMLDivElement.cloneNode() should return HTMLDivElement
doNotExecute(() => {
  const div = document.createElement("div");
  const clone = div.cloneNode();

  type test = Expect<Equal<typeof clone, HTMLDivElement>>;
});

// cloneNode(false) should also preserve the type
doNotExecute(() => {
  const el = document.createElement("span");
  const clone = el.cloneNode(false);

  type test = Expect<Equal<typeof clone, HTMLSpanElement>>;
});

// Document.cloneNode() should return Document
doNotExecute(() => {
  const clone = document.cloneNode();

  type test = Expect<Equal<typeof clone, Document>>;
});

// Negative: cloned HTMLDivElement should not be assignable to a non-DOM type
doNotExecute(() => {
  const div = document.createElement("div");
  const clone = div.cloneNode();

  // @ts-expect-error - HTMLDivElement is not assignable to string
  const str: string = clone;
});
