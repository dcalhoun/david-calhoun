---
layout: post
title:  "Migration to Jekyll: My Journey to Understanding Yeoman"
---

I've been wanting to wrap my head [Yeoman](http://yeoman.io/) for awhile now. It seemed everytime I found a moment of free time to dive into understanding Yeoman, my brain was already fried from that day's job-related development work. I continued to spin up a generic "webapp" generator and failed to understand the seemingly complex ideas behind Yeoman. This process continued until now, when I decided to move my personal site to GitHub pages and Jekyll.

It seems that in order for me to finally understand the beauty Yeoman, all I needed was an end goal — a Jekyll site. It turns out this is exactly why Yeoman was created — to help you quickly achieve your end goal and accomplish a lot of the initial legwork/boilerplate code for you.

````bash
npm install -g yo
npm install -g generator-jekyll
cd path/to/site/directory
yo generator-jekyllrb
grunt server
````

Assuming you already have Node installed (I recommend [homebrew](http://brew.sh/)), that's all it takes to get a Yeoman-generated, Grunt-compiling Jekyll site running on your local machine. I am utilizing the [jekyllrb generator](https://github.com/robwierzbowski/generator-jekyllrb) that I found via the Yeoman [community generators page](http://yeoman.io/community-generators.html).

A nice thing about the jekyllrb generator is that is has built in configuration options for including/excluding Sass, Compass, Bootstrap, H5BP & CoffeeScript — as well as other tools. This step-by-step approach to generating my Jekyll site through a Yeoman generator help me understand the benefit of Yeoman generators. Creating and configuring my Jekyll site became very easy.

Yeoman also encourages the use of Grunt.js and Bower. Grunt, as described on it's home page, is a JavaScript task runner. For me, it was an easy way to automate my Sass & CoffeeScript compliation as well as [deployment scripts](https://github.com/robwierzbowski/grunt-build-control) to my GitHub pages hosting.

Bower is a package manager. In short, it simplifies the process of downloading libraries on which your web app/site may depend.

````bash
bower install jquery
````

The above installs the jQuery library into the `_bower_components` directory of my project. I can then load that dependency into my project with a traditional script tag.

The Grunt tasks included with the aforementioned jekyllrb generator also included support for [Usemin](https://github.com/yeoman/grunt-usemin). Usemin allows for replacing references to non-optmized scripts and stylesheets (typically found in development environments) with references to production optimized scripts and stylesheets.

````bash
grunt build
````

The above produces a compiled, concatenated, minified, production-ready version of my Jekyll site. Once that build is created, I can use the task provided by the aforementioned [grunt-build-control](https://github.com/robwierzbowski/grunt-build-control) deployment scripts to automate my deployment to GitHub pages.

````bash
grunt buildcontrol:pages
````

All in all I'm very happy to finally have a high level understanding of the benefits of Yeoman. I look forward to exploring creating custom generators of my own to speed up my workflow, as well as streamlining project spin up for my coworkers.

If you have any questions or comments about using Yeoman, Grunt or the Jekyll generator feel free to leave comments below.
