# Checklist for NC Games Front End

## README - write your own and make sure that it:

- [ ] has a link to the deployed version
- [ ] provides general info about your app
- [ ] includes links to your back end repo
- [ ] specifies the minimum version of Node required to run locally (check your Node version, `node --version` and use the major version that you are on)
- [ ] has clear instructions on how to run your project locally (`git clone <repo-url>, cd ...`)

---

TODO: Don't forget to update your README! It's a small but important job.

---

## UX

- [x] Basic styling added
- [x] Responsive design
- [x] Items aligned
- [x] Content legible (not too wide, obstructed, etc)
- [ ] Refreshing doesn't cause an issue on sub-pages
- [x] No errors in the console
- [x] Votes / Posts / Deletions happen instantly _OR_ give user indication of loading

---

TODO: A few things don't persist on refresh at the moment.

---

## Functionality

### Login

- [x] Some indication of who is logged in (this can be hardcoded)

---

TODO: Login doesn't persist on refresh yet. Take a look into localStorage to help you with this.

---

### Reviews

- [x] Serves all reviews / top reviews
- [x] Can vote on reviews
- [ ] Can vote a maximum of once in either direction per page load
- [c] Votes are persistent when page is refreshed
- [x] Reviews by category pages load only relevant reviews (especially when navigating from one category page to another)
- [x] Can sort reviews by date created / comment_count / votes

---

TODO: Votes don't persist on refresh yet. Make sure your API calls are working. DONE

---

### Individual Review / Comments

- [x] Individual reviews are served with comments
- [x] Can vote on comments
- [ ] Can vote a maximum of once in either direction per page load
- [c] Votes are persistent when page is refreshed
- [c] Can post new comments, which are persistent

---

TODO: New comments don't persist on refresh at the moment.

---

### Additional functionality:

- [c] Can only delete comments of logged in user
- [c] Deleted comments don't re-appear on re-render/refresh
- [ ] sort comments by date created / votes
- [x] navigate over pages of reviews (if implemented in back-end)
- [c] navigate over pages of comments (if implemented in back-end)
- [ ] filter / display reviews by specific user
- [ ] post new review
- [ ] delete logged in user's reviews

---

TODO: No comment sorting or deletion functionality yet.
TODO: "New Review" placeholder page has been implemented, but not functional yet.

---

## Error Handling

- [ ] Bad url
- [ ] Bad category slug in url
- [ ] Bad review_id in url
- [ ] Post comment: (No text in comment body / Can you post without logging in?)

---

TODO: No error handling as yet.

---

## Code

- [x] Well named components
- [x] Components reused where possible (`Reviews` / `Voter`...)
- [x] Minimal state - don't hold derivable data in state
- [x] Set state correctly, using previous state where possible
- [x] Handle asynchronicity clearly (i.e. isLoading pattern)
- [x] Functions are DRY (`handleChange` for controlled components / api calls)
- [x] Use object destructuring where possible
- [x] Tidy? If not: ESLint / Prettier
- [x] `node_modules` git ignored
- [ ] No `console.log`s / comments
- [ ] remove unnecessary files (e.g. App.test.js)

---

TODO: Lots of console.logs happening! Make sure to remove them as soon as you don't need them anymore.

---

## MAKE SURE ALL TESTS ARE STILL PASSING IN BACK END

## Once everything else is complete, here are some extra challenges:

- [ ] Use `aXe` extension to check for a11y issues
- [ ] Make sure any pure functions are extracted and tested with `Jest`
- [ ] Use Context API for sharing logged in user amongst components
- [ ] Create a user page where you can change their profile information if they are "logged in as the right user". This will require having an additional PATCH endpoint on your backend
- [ ] Create a view for all the reviews a user has liked. This will require additional functionality on your backend
- [ ] Make use of [web sockets](https://en.wikipedia.org/wiki/WebSocket) to allow your page to automatically update with a little notification if there have been any recent posts. [socket.io](https://socket.io/) is quite a good one to use and has some good getting started guides. This will require additional functionality on your backend for recent reviews e.g. last 10 minutes

## Feedback

### things we loved

- Big fan of your "Advanced Search" section - very nice conditional rendering!
- Love the heart icon with the count bubble for your votes
- "X people are talking about this" - that's a sweet touch!
- Very nice pagination - I like how you've implemented pages of different sizes
- Good combination of MUI and CSS Modules! The whole look of this app is very clean and sleek, I like it a lot <3
- Your custom hooks are _outstanding_. Really really good work there.

### things to work on

- Nice that you're thinking ahead to implementing search functionality - but clicking on the searched-for term link that appears after submitting the search form takes you to the "New Review" placeholder page currently. I'd almost be tempted to remove the search bar from your homepage altogether until you can implement this properly.
- You've allowed for anonymous comments, which is great for now. Have a think about whether this is an ideal user experience for your finished product.
- There are a few unused variables and imports floating about - make sure to remove them if you don't need them, or at least comment them out if you're unsure whether you'll need them in future.
- You can use `dayjs` as an import - you don't need to use `require` syntax with it.
- Don't forget the `alt` property on your images!

## Summary

This is a very impressive app, Ed! You've worked hard this week and it very much shows in the detail that's already here. I've given you some points to consider, but please don't tackle everything at once. Take one task at a time - but before that, you should definitely take a moment to reflect on everything you've done this week. Be proud of yourself! You've achieved an awful lot this week, and that's no mean feat.
