---
title: Knauf Infothek
meta: 2018 | Design, Code
description: Technical documentation in a native app for Android and iOS.
thumb: knauf-infothek.jpg
layout: layouts/post.njk
---
<a href="https://www.knauf.de/" target="_blank" rel="noopener noreferrer">Knauf Gips KG</a> is a manufacturer and distributor of systems for drywall, flooring, plaster and facade. This abundance of products naturally requires a lot of technical documentation, which somehow has to be brought to the customer. This is where the Knauf Infothek comes in, an application for Android and iOS tablets.

However, I must confess that we have not completely reinvented the wheel. Such an app already existed. But it was implemented with AngularJS, packed into a container and with little native user experience. In 2018 this was no longer enough to compete in the App Store.

So Knauf commissioned <a href="https://irs-nbg.de/" target="_blank" rel="noopener noreferrer">IRS GmbH</a>, my former employer, with the Knauf Infothek 2.0. A real, native app for Android and iOS was to be created, with the initial focus again on tablet formats. However, the next step to the smartphone should be kept in mind both in terms of visualization and technical implementation. Of course, the content should also be available online and offline again.

<figure>
  <img src="{{ '/img/details/knauf-infothek.jpg' | url }}">
  <figcaption class="post__caption">Screenshot of Knauf Infothek</figcaption>
</figure>

Our four-member team developed a functional UX concept for navigating through Knauf's product range and managing the associated content. The final visualization of the UI was largely in my hands. Native elements determined the design, efficiency and visual integration into the respective operating system were the main focus. We collected feedback in regular customer reviews.

The technical implementation was done with React Native, for the management of the state information we used Redux. The possibility to work in our familiar environment and to provide two systems with one code base made this choice easy for us as web developers. So we brought the Knauf Infothek back to its well-deserved place in <a href="https://apps.apple.com/de/app/knauf-infothek/id949469695/" target="_blank" rel="noopener noreferrer">App Store</a> and <a href="https://play.google.com/store/apps/details?id=de.knauf.infothek/" target="_blank" rel="noopener noreferrer">Google Play Store</a>.