This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Code assignment - Radio app

The goal is to create a small "Radio app" using the open API from Sveriges Radio, which is the national radio broadcaster of Sweden.

Before jumping into the assignment **make sure to read through the full readme** so you don't miss anything important.

# Assignment

## Overview

Your assignment is to create a small radio app. The app will consist of three pages: Start, Programs, and Episodes. The user will be able to navigate back and forth between these pages. On the episode page the user will be able to play and listen to an episode.

## Step 1 - Base functionality

The first step is to create the base shell of the app. Please refer to the design mockups to understand how the app is structured but in the first step focus on code structure, semantics, proper route setup, fetching data and similar things. Basically, building a great foundation that then can be styled in the last step.

The following pages should exist:

1. Start - start page.
   - Display the app name: Radio app
   - Route URL should be `/`
   - There should be a link to the next page `/channel`
2. Programs - page that will show the channel information and list the available programs for that channel.
   - At the top of the page the channel information should be displayed: `channel.image` and `channel.tagline`. The data is fetched from the API using the Channel-URL. See API section of this readme.
   - List all programs underneath the channel information. This data is fetched from the API using the Program-URL. See API section of this readme.
   - Each program should display: `program.name`, `program.programimage` and `program.description`.
   - Each program should link to the next page that lists episodes. URL: `/channel/episodes/[PROGRAM_ID]`
   - It should be possible to navigate back to the start page (`/`).
3. Episodes - page that will show the channel information, list available episodes for a specific program and each episode can be played.
   - At the top of the page the channel information should be displayed: `channel.image` and `channel.tagline`. The data is fetched from the API using the Channel-URL.
   - List all episodes underneath the channel information. This data is fetched from the API using the Episodes-URL. See API section of this readme.
   - Each episode should display: `episode.title`, `episode.imageurl` and `episode.description`. Each episode will also link to an audio file. Either a pod file (`episode.listenpodfile.url`) or a broadcast file (`episode.broadcast.broadcastfiles`). This audio file should be playable using the built-in audio player.
   - It should be possible to navigate back to the "Programs"-page (`/channel`).

## Step 2 - Filtering

Step two is to allow the user to do in-page filtering. On the "Episodes"-page add an input field where an user can enter text that will be used for filtering episodes.

Minimum requirements:

- Should be possible to filter based on `title` of each episode
- Should be possible to filter based on `published date` by typing date strings
  - Examples:
    - 2022 would list all episodes published 2022 or later
    - 2022-06 would list all episodes published during June 2022 or later
    - 2022-06-10 would list all episodes published on June 10 2022 or later
- The resulting list should be sorted based on the matching search
  - When filtering on title the returned list should be sorted alphabetically (ASC)
  - When filtering on date the returned list should be sorted according to publishing date (ASC)

## Step 3 - App experience

Time to make the app pop! Implement the visual design according to the mocks. It's OK to deviate from the visual design to choose colors and styles to your own liking but it should be as well designed and responsive as the mocks are.

# Important information

## Technologies, frameworks, and libraries

The assignment is meant to be solved using modern web technologies.

The recommendation is that you use something like [Create React App](https://create-react-app.dev/) or [Next.js](https://nextjs.org/) to get you up and running fast and where you don't have to worry and spent time on creating configurations. Pair that with [React router](https://reactrouter.com/) for handling routes, [TailwindCSS](https://tailwindcss.com/) for styling and [Hero icons](https://heroicons.com/) then you got everything you need.

You are of course free to use other frameworks such as [Vue.js](https://vuejs.org/), [Angular](https://angular.io/), [Svelte](https://svelte.dev/) or something else. Just pick something you are comfortable with that get you up and running quickly and where you are comfortable creating high quality code since that's what we'll be reviewing.

### Important limitations

Besides the large and general libraries, you are _not_ permitted to include other libraries. For instance, if the assignment requires you to create an algorithm you are expected to show your own ability to create it from scratch using TypeScript / JavaScript not by installing an external library.

## TypeScript

While we love types and TypeScript, we completely understand that not everyone use it as default. Meaning it's _optional_ to use TypeScript to solve this assignment. But it's good to know that most projects we run will use TypeScript should you start working with us.

We have included types for all the API calls. They are stored in the file `./resources/types/global.d.ts`. They are there for your benefit to save time from mapping everything on your own.

## API

You'll be using three different endpoints from the API.

### Channel

URL: `https://api.sr.se/api/v2/channels/132?format=json`

Type definition: `ChannelResponse`

Parameters: Everything is static in the URL. It will fetch channel `132` specifically. You are _not_ allowed to add any other parameter to the URL even if it's possible.

### Programs

URL: `https://api.sr.se/api/v2/programs/index?format=json&filter=program.haspod&filtervalue=true&channelid=[CHANNEL_ID]`

Type definition: `ProgramsResponse`

Parameters: You should dynamically set `[CHANNEL_ID]` in the URL. Everything else is static and you are _not_ allowed to add any other parameter to the URL even if it's possible.

## Episodes

URL: `https://api.sr.se/api/v2/episodes/index?format=json&programid=[PROGRAM_ID]`

Type definition: `EpisodesResponse`

Parameters: You should dynamically set `[PROGRAM_ID]` in the URL. Everything else is static. If you want to try and fetch all episodes for a program, you can add `&pagination=false` to the URL. However, this is not necessary and makes the loading becomes slow which is why we don't use it as a default.

## Design Mockups

For all pages there are mockups created. You can find all of them in `./resources/mockups/`. The mocks have been created using TailwindCSS and Heroicons but is should be possible to create your own CSS using something if you prefer.

You are allowed to deviate from the design if you wish and you can pick your own colors and styles if you desire. However, re-designing can steal time and we encourage you to stick to the design to focus on the actual code. We aren't judging your design skills but rather your code quality and how things get structured.

## Submitting assignment for review

We recommend that you zip your source code and send it to your contact person directly. Before zipping make sure to not include things like node_modules to limit the file size.

We assume that all projects can be installed using `npm install` and `npm start` to start up the project. Should your project differ from these defaults we ask that you include instructions on what's needed to get the project up and running.

Before handing over the assignment make sure to review your code, add relevant comments and make sure it's working as intended. You should be proud of what you deliver!

Good luck and have fun!
