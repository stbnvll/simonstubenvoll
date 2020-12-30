---
title: DATEV Personal-Benchmark online
meta: 2020 | Code
description: An UI for customer-orientated visualization of Big Data.
thumb: datev-personal-benchmark-online-thumb.jpg
layout: layouts/post.njk
---

<a href="https://www.datev.de/" target="_blank" rel="noopener noreferrer">DATEV eG</a> is a software house and IT service provider whose focus is on the tax advisor market. In 2019, the company was responsible for around 13.5 million payrolls per month, and the amount of data processed is correspondingly large. So large, in fact, that it was only a matter of time before they also wanted their customers to benefit from this treasure trove of data in the form of a consulting tool.

The tool was released as a web application at the end of 2020, is called <a href="https://www.datev.de/web/de/datev-shop/personalwirtschaft/datev-personal-benchmark-online/" target="_blank" rel="noopener noreferrer">DATEV Personal-Benchmark online</a> and I was allowed to accompany its creation since the beginning of 2019 as technical lead of the frontend. The heart of the MVP is a salary comparison. Depending on the profession of an employee to be selected, the salary of the same is compared there with a Germany-wide comparison group. The visualization is done by charts.

<figure>
  <img src="{{ '/img/portfolio/datev-personal-benchmark-online-detail.jpg' | url }}">
  <figcaption class="post__caption">Employee versus comparison group</figcaption>
</figure>

The technology stack of the UI is relatively narrow, it is based on <a href="https://angular.io/" target="_blank" rel="noopener noreferrer">Angular</a> and uses <a href="https://d3js.org" target="_blank" rel="noopener noreferrer">D3</a> to draw the graphics. The tasks were also to establish a web application in an on-prem-dominated environment and to develop a suitable user experience - they still are.
