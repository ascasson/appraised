# Appraised - GitHub Code Collaboration Analysis
Appraise project collaboration within and across teams

## Overview
This JavaScript project is a heavy work in progress, started with a need to quickly look at GitHub relationships between teams, members, and code. It uses private GitHub tokens/keys to access information.

## Initial Intent
The tool is currently for prototyping relationships within an organization. Some components can be used for open source analysis, however, this is not the primary focus at this time. The priority model tries to take into consideration an organization with a team or teams and members within those teams who work on one or more projects.

## Getting Started
Create a [`Personal Access Token`](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line "personal access tokens") on GitHub if you do not have one already. It's _highly_ encouraged that the token include read-only permissions where necessary. While the tool itself does not use write permissions, a token with write permissions is much more problematic out in the wild than read-only tokens.

Clone the repo, then ```npm install```.

In your root directory `touch .env` to create your configuration file. Include one line for your GitHub access token `GH_KEY='mysecretkeyhere'`.

Test it by running `node index.js`.


## Roadmap - TBD
This is a fresh project and will take a bit of time to identify some clearer needs. There will be a roadmap in the future. If you have ideas, comments, or issues, please submit a GitHub issue and tag @ascasson.