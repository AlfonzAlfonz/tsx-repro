# tsx + c8: uncovered lines reported as covered

```sh
npm ci
npm run coverage             # tsx as published: 100% lines
npm run coverage:no-minify   # same tsx with minifyWhitespace disabled: lines 3-4 uncovered
```

`index.ts` calls `classify(1)`, so the `if (value < 0)` body in `branch.ts` (lines 3-4) never runs.

| | Lines | Uncovered lines |
|---|---|---|
| tsx 4.23.15 | 100% | – |
| tsx 4.23.15, `minifyWhitespace: false` | 75% | 3-4 |

Removing the unrelated `export class Unused {}` makes the published tsx report lines 3-4 correctly again.
