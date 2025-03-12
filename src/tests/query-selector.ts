import { doNotExecute, Equal, Expect } from "./utils";

doNotExecute(() => {
  const a = document.querySelector("div.banner > a.call-to-action");
  const b = document.querySelector("input,div");
  const c = document.querySelector('circle[cx="150"]');
  const d = document.querySelector("button#buy-now");
  const e = document.querySelector("section p:first-of-type");
  const f = document.querySelector("main>section>svg>path");
  const g = document.querySelector("div~span");
  const h = document.querySelector("col||td");
  const i = document.querySelector("#app");
  const j = document.querySelector(".flex");

  type testA = Expect<Equal<HTMLAnchorElement | null, typeof a>>;
  type testB = Expect<
    Equal<HTMLInputElement | HTMLDivElement | null, typeof b>
  >;
  type testC = Expect<Equal<SVGCircleElement | null, typeof c>>;
  type testD = Expect<Equal<HTMLButtonElement | null, typeof d>>;
  type testE = Expect<Equal<HTMLParagraphElement | null, typeof e>>;
  type testF = Expect<Equal<SVGPathElement | null, typeof f>>;
  type testG = Expect<Equal<HTMLSpanElement | null, typeof g>>;
  type testH = Expect<Equal<HTMLTableCellElement | null, typeof h>>;
  type testI = Expect<Equal<Element | null, typeof i>>;
  type testJ = Expect<Equal<Element | null, typeof j>>;

  const aa = document.querySelectorAll("div.banner > a.call-to-action");
  const bb = document.querySelectorAll("input,div");
  const cc = document.querySelectorAll('circle[cx="150"]');
  const dd = document.querySelectorAll("button#buy-now");
  const ee = document.querySelectorAll("section p:first-of-type");
  const ff = document.querySelectorAll("main>section>svg>path");
  const gg = document.querySelectorAll("div~span");
  const hh = document.querySelectorAll("col||td");
  const ii = document.querySelectorAll("#app");
  const jj = document.querySelectorAll(".flex");

  type testAA = Expect<Equal<NodeListOf<HTMLAnchorElement>, typeof aa>>;
  type testBB = Expect<
    Equal<NodeListOf<HTMLInputElement | HTMLDivElement>, typeof bb>
  >;
  type testCC = Expect<Equal<NodeListOf<SVGCircleElement>, typeof cc>>;
  type testDD = Expect<Equal<NodeListOf<HTMLButtonElement>, typeof dd>>;
  type testEE = Expect<Equal<NodeListOf<HTMLParagraphElement>, typeof ee>>;
  type testFF = Expect<Equal<NodeListOf<SVGPathElement>, typeof ff>>;
  type testGG = Expect<Equal<NodeListOf<HTMLSpanElement>, typeof gg>>;
  type testHH = Expect<Equal<NodeListOf<HTMLTableCellElement>, typeof hh>>;
  type testII = Expect<Equal<NodeListOf<Element>, typeof ii>>;
  type testJJ = Expect<Equal<NodeListOf<Element>, typeof jj>>;
});
