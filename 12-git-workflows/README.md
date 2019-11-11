# Git, GitHub, and Workflows

## Goals 🐛

- [ ] Define and distinguish Git and Github 🐙
- [ ] Compare and contrast initializing, forking, and cloning repositories 🍽
- [ ] Demonstrate staging, committing, and uploading code 🎞
- [ ] Practice resolving merge conflicts 🤼
- [ ] Survey a branching workflow ⚡️

## Git(hub) 🐙

- The Problem: Keeping track of changes
- The Solution:
  - Git
    - "Verson control system"
    - Manages source code history
  - Github
    - Git repository host
    - Social version control

## Getting Started 🍽

- From scratch
  - On GitHub
    - Create repo
    - `git clone`
  - On your computer
    - Create directory
    - `git init`
    - `git remote add origin BRANCHNAME`
- The Remote
  - Remote = Server-side repository
  - `git remote -v`
  - `git remote set-url origin repo-url`
- Forking versus cloning
  - Forking creates a remote copy of a remote repo
  - Cloning creates a local copy of a remote repo

## Saving Progress 🎞

- "Working" directory means just that!
- Staging and saving changes
  - `git add` stages changes
  - `git commit` commits/saves them
    - `-m "MESSAGE"` mandatory option
      - [Good commit messages](https://xkcd.com/1296/)
      - [No really! Good commit messages](https://chris.beams.io/posts/git-commit/)
        - < 50 characters
        - Imperative verb tense
        - Capitalize subject line
        - Don't end in period
    - Creates a snapshot of project
    - Denoted by hash code
  - See all commits with `git log`
- HEAD
  - Like the head of ye olde tape recorder
  - Points to the tip of the current checked out branch
  - Points at the place we're going to start "recording" next

## Workflow ⚡️

- Workflow: _How_ work gets done
- Building software requires version control workflow
- Suggested: Feature branch workflow
  - **Do not** work on `master` branch
  - One branch per feature
  - Merge with master on completion

## Dealing with Conflicts 🤼

- Branches will need to be merged
- If the same file is edited on separate branches and merged: merge conflict
- Resolve merge conflicts with any text editor!

## Takeways 🦋

- [ ] Git helps manage changes to software; Github is a Git hosting platform.
- [ ] New Git repositories can created remotely or locally.
- [ ] Git commits are snapshots of changes to code.
- [ ] Merge conflicts happen when the same file is edited and merged from different branches.
- [ ] Leveraging branches keeps project and code organized. 

## Resources 🌳

- [Atlassian Git tutorials](https://www.atlassian.com/git/tutorials)
- [Resources to learn Git](https://try.github.io/)
- [Git & GitHub Advanced lecture slides](https://docs.google.com/presentation/d/1TINfBSXONL8GdfL5Ej9auUbn4EJ7e9LEzu4iFhOencI/edit?usp=sharing)
- [Git woes lecture slides](https://docs.google.com/presentation/d/1_pm5OMGYQBsJIzF5ohScGS9s83DElkmWtw-y2obDZgk/edit?usp=sharing)
