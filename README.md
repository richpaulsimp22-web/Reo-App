# REO — Te Reo Māori Learning App

React + Vite learning application for Te Reo Māori.

## Deploy

- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Root directory: repository root

The repository intentionally contains source files only; `node_modules` and `dist` are excluded.


## Learner-first interface

The default learner experience is intentionally minimal: choose a level, choose a topic, and start learning. Learners see only Learn, Kōrero, and Progress navigation. Teacher/developer systems remain available behind Teacher mode. Sentence-building is a first-class practice entry point, and classroom reo is a dedicated learner topic.

### Deploying an update

1. Extract this package.
2. Upload the contents of `reo-final/` to the root of the existing GitHub repository, replacing the existing files.
3. Commit the changes to `main`.
4. Vercel will redeploy from the connected repository.
5. If the browser has an older cached learner/teacher preference, the UI version migration defaults the first visit to the learner experience; after that, the selected mode is remembered.
