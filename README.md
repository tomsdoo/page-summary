# page-summary

It's a page summary getter.

![npm](https://img.shields.io/npm/v/page-summary)
![NPM](https://img.shields.io/npm/l/page-summary)
![npms.io (quality)](https://img.shields.io/npms-io/quality-score/page-summary)
![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/page-summary)
![Maintenance](https://img.shields.io/maintenance/yes/2023)


### Installation

``` shell
npm install page-summary
```

### Usage

``` typescript
import { PageSummary } from "page-summary";

PageSummary
  .fetch("https://some.site/article")
  .then(console.log);

```
