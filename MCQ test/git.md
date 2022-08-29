                                      GIT

Q1. How can you check your current git version?
- [ ] git --v
- [x] git --version 
- [ ] git --option
- [ ] git --current

Q2. What command lets you create a connection between a local and remote repository?
- [ ] git remote add new
- [x] git remote add origin 
- [ ] git remote new origin 
- [ ] git remote origin

Q3. Describe what these Git commands do to the commit history:
bash
git reset --hard HEAD~5
git merge --squash HEAD@{1}```

- [ ] They reset the HEAD to the fifth commit in the repo, then merge to the master branch.
- [x] The current branch 's HEAD is reset back five commits, then prior commits are squashed into a single commit.
- [ ] They delete the last five commits.
- [ ] They merge the last five commits into a new branch.

Q4. Your current project has several branches; master, beta, and push-notifications. You've just finished the notification feature in the push-notification branch, and you want to commit it to beta branch. How can you accomplish this?
- [ ] Checkout the push-notifications branch and run git merge beta
- [ ] Checkout the master branch and run git merge beta -> push-notification
- [ ] Delete the push-notification branch and it will be committed to the master branch automatically
- [x] Checkout the beta branch and run git merge push-notification

Q5. Which of the following is true you when you use the following command?
`git add -A`
- [x] All new and updated files are staged 
- [ ] Files are staged in alphabetical order. 
- [ ] All new files are staged
- [ ] Only updated files are staged