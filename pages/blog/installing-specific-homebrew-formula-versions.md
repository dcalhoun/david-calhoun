---
description: "Quick, simple steps to install old Homebrew package versions."
date: "2022-10-21"
title: "Installing Specific Homebrew Formula Versions"
---

I have [blogged before](/blog/developer-tools-homebrew) about Homebrew — the incredibly useful tool for managing macOS packages. However, one task is often challenging: installing specific, older package versions. Over the years, the method for accomplishing this changed as the Homebrew maintainers implemented limitations to safeguard users.

The summary of the process, as of today, is the following.

```shell
brew uninstall <package-name>
brew tap-new <your-name>/<tap-name>
brew extract --version <desired-version> <package-name> <your-name>/<tap-name>
brew install <package-name>@<version>
brew pin <package-name>@<version>
```

To provide more context, I will explain each command too. First, the desired package may already be installed on your machine, removing it will ensure the next steps succeed.

```shell
brew uninstall <package-name>
```

Next, Homebrew requires you "manage" your own Formulas when using versions that are not found in `homebrew/core`. To do so, you must create your own tap.

```shell
brew tap-new <your-name>/<tap-name>
```

Extract the desired version

```shell
brew extract --version <desired-version> <package-name> <your-name>/<tap-name>
```

Install the newly extracted version.

```shell
brew install <package-name>@<version>
```

Pin the newly installed version to avoid accidental upgrades.

```shell
brew pin <package-name>@<version>
```

An example of the commands together is the following for the `composer` package.

```shell
brew uninstall composer
brew tap-new dcalhoun/homebrew-legacy
brew extract --version 2.3.5 composer dcalhoun/homewbrew-legacy
brew install composer@2.3.5
brew pin composer@2.3.5
```

## Optional Optimization

While not required, it is helpful to set an “origin” remote for your tap to avoid the following warning whenever upgrading Formulas.

```shell
Warning: No remote 'origin' in /opt/homebrew/Library/Taps/<your-name>/<tap-name>, skipping update!
```

Set the origin remote for your tap via the following.

```shell
cd /opt/homebrew/Library/Taps/<your-name>/<tap-name>
git remote add origin <origin-url>
```

## Credit & Thank You

Of course, I did not come to understand this process on my own. I must credit the [reseach and contributions of others](https://github.com/orgs/Homebrew/discussions/155#discussioncomment-133894). Open-source software is great! ❤️
