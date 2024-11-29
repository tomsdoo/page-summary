# page-summary

It's a page summary getter.

![npm](https://img.shields.io/npm/v/page-summary?style=for-the-badge&logo=npm)
![NPM](https://img.shields.io/npm/l/page-summary?style=for-the-badge&logo=npm)
![release date](https://img.shields.io/github/release-date/tomsdoo/page-summary?style=for-the-badge&logo=npm)
![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/page-summary?style=for-the-badge&logo=npm)

![ci](https://img.shields.io/github/actions/workflow/status/tomsdoo/page-summary/ci.yml?style=social&logo=github)
![checks](https://img.shields.io/github/check-runs/tomsdoo/page-summary/main?style=social&logo=github)
![top language](https://img.shields.io/github/languages/top/tomsdoo/page-summary?style=social&logo=typescript)
![Maintenance](https://img.shields.io/maintenance/yes/2024?style=social&logo=github)
![depends on node greater or equal 18](https://img.shields.io/badge/node.js-%3E%3D%2018-lightyellow?style=social&logo=nodedotjs)

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
