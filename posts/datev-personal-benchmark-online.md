---
title: DATEV Personal-Benchmark online
lead: An UI for customer-orientated visualization of Big Data.
tag: Code
date: 2020-10
layout: layouts/post.njk
---

<a href="https://www.datev.de/" target="_blank" rel="noopener noreferrer">DATEV eG</a> is a software house and IT service provider whose focus is on the tax advisor market. In 2019, the company was responsible for around 13.5 million payrolls per month, and the amount of data processed is correspondingly large. So large, in fact, that it was only a matter of time before they also wanted their customers to benefit from this treasure trove of data in the form of a consulting tool.

The tool was released as a web application at the end of 2020, is called <a href="https://www.datev.de/web/de/datev-shop/personalwirtschaft/datev-personal-benchmark-online/" target="_blank" rel="noopener noreferrer">DATEV Personal-Benchmark online</a> and I was allowed to accompany its creation since the beginning of 2019 as technical lead of the frontend. The heart of the MVP is a salary comparison. Depending on the profession of an employee to be selected, the salary of the same is compared there with a Germany-wide comparison group. The visualization is done by charts.

<figure>
  <img src="{{ '/img/posts/datev-personal-benchmark-online/evaluation.jpg' | url }}">
  <figcaption class="post__caption">
    Employee versus comparison group
    <a href="https://www.datev.de/web/de/datev-shop/personalwirtschaft/datev-personal-benchmark-online/" target="_blank" rel="noopener noreferrer">(DATEV-Shop)</a>
  </figcaption>
</figure>

The technology stack of the frontend is relatively narrow, consisting primarily of <a href="https://angular.io/" target="_blank" rel="noopener noreferrer">Angular</a> and <a href="https://d3js.org/" target="_blank" rel="noopener noreferrer">D3</a>. The latter is used to draw the graphics. Away from the UI, challenges for the team were (and still are) mainly to meet data protection requirements as well as to establish a web-based application in a still on-prem-dominated environment.
