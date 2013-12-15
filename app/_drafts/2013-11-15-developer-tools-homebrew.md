---
layout: post
title: "Developer Tools: Homebrew"
---

I recently got a new MacBook Pro and had to go through the motions of setting up my development environment. One of my favorite tools for managing my environment is the Mac OS X package manager tool [Homebrew](http://brew.sh/). The following is a brief overview/tutorial of Homebrew.

As a front end developer I'm not nearly nerdy enough to understand many of the details behind the packages I use, but I do know that several of them are required to accomplish the projects that I work on. Homebrew allows me to easily install and maintain those packages.

Homebrew is very easy to install. The documentation site provides one easy Terminal command to get you started:

````bash
ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"
````

### Installing Your First Package

After you have Homebrew installed it's a tool that is very straight forward to use. Before installing a package it's good practice to ensure that Homebrew is up to date and in working order.

````bash
brew doctor
````

The above command is Homebrew's built in utility to check its structure and heath status. The `doctor` command will let you know if your Homebrew is out of date or notices any issues with your package installations.

I like to use [Yeoman](http://yeoman.io/) and a generator I created called [Playbook](https://github.com/centresource/generator-playbook), so one of the first packages I install is [Node.js](http://nodejs.org/). Installing a package is a simple as running the `install` command:

````bash
brew install node
````

### Updating a Package

As time goes on your of course going to need to update packages you've installed. It's typically best to update Homebrew first and then you package.

````bash
brew update
brew upgrade node
````

Homebrew's installation in reality is a clone of a Git repository. The `update` command will pull down the latest information from Homewbrew for you. It will also list out any package formulas that were updated in the process. After you have the latest Homebrew forumlas, you can use the `upgrade` command to update a specific package.

That's it! There's not much to it, but it sure makes installing and managing these packages straight forward and easy. If you have any questions about Homebrew, feel free to leave a comment below.
