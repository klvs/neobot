# Neopets playwright automation

### Requirements
* node.js (npm)
* vscode
* playwright vscode extension

This [video](https://www.youtube.com/watch?v=Xz6lhEzgI5I) will walk you through the environment set up.

### Auth set up
Since by default playwright users a fresh browser with NO session data, cookies or any of that jazz, you'll need to login manually once by running `tests/login.spec.ts`.

This will open up a new chromium window and take you to the neopets login page. **You have 30 seconds to sign into neopets manually. Once signed in, let the test finish running.** This will save your browser's session data in `.auth/user.json`. **DO NOT SHARE OR COMMIT THIS FILE! It will allow other people to access your neopets account if you do.**

### Generating "tests" (bots)
[This video](https://www.youtube.com/watch?v=LM4yqrOzmFE) will walk you through generating "tests" (bots in our case) using playwright's codegen feature in the vscode playwright extension. It's 7 minutes. Just watch it. It's easier than me writing it all out.