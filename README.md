# SpaceX Vibe Check

**SpaceX Vibe Check** is a playful, data-driven web app that pulls real launch data from the SpaceX GraphQL API and layers on random, unrelated factors to create a "vibe score" for each mission. It’s an experiment in blending factual data with totally nonsensical inputs to generate vibe reports that (jokingly) explain rocket success or failure through cosmic coincidence and pop culture.

---

## How It Works (Under the Hood)

- **Data Flow:**
  - Apollo Client/Server handles connections to the SpaceX GraphQL API, fetching detailed launch data (e.g., mission name, dates, outcomes).
  - Custom data sources (like Billboard’s Top 100 and other APIs) inject external "vibe factors"—these might include things like top songs, weather snapshots, or pop culture trends around the launch date.
  - These sources are unified through GraphQL resolvers, blending real mission data with absurd extras to create a vibe-rich dataset.

- **Front-End:**
  - Built with **Next.js 15** and **React 19**, styled using **TailwindCSS** for fast, clean UI.
  - **Recharts** visualizes the vibe factors and launch data, making patterns (or complete randomness) easy to spot.
  - Apollo’s React hooks manage GraphQL queries and state smoothly across the app.

- **Type Safety & Linting:**
  - Fully typed with **TypeScript**, using **GraphQL Codegen** to generate types and ensure query/mutation safety.
  - **ESLint** is set up for strict code linting, alongside a type-checking script to keep everything tidy and predictable.

- **Supporting Libraries:**
  - Axios for API calls to random external sources.
  - Custom error handling and response validation to keep external data in check.

- **API Layer:**
  - A Next.js API route exposes a combined GraphQL endpoint that merges SpaceX data with additional vibe factors.

---

## Integration Ideas (To-Do)

<sub>(Currently just whatever chatgpt came up with so will need revisited with a more critical view)</sub>

A growing list of potential data points to fuel future vibes:

- Moon phase at launch time
- Top-charting song on launch date
- Weather snapshot from a random country
- Horoscope for the launch date
- Stock market trend (random index)
- Meme of the week
- Global happiness index snapshot
- Wikipedia edit count for the day
- Random D&D dice roll result
- UFO sightings worldwide
- Active volcanoes at the time
- Air quality index in the launch city
- Books published that month
- Coffee consumption in a random city
- Sentiment analysis for a random hashtag

---

## Future Plans

- **WASM LLM Integration:**  
  Planning to embed a WebAssembly-based language model that will analyze past vibe data and try to predict a launch’s vibe if it happened today. The focus won’t be on factual launch conditions but on teasing out strange patterns and coincidences that might tell a "story".

- **API Call Optimization:**  
  To reduce redundant requests (especially when fetching historical data that rarely changes ) the aim is to implement a caching layer using **Redis** (or a similar lightweight solution). This will help cut down on external API hits and keep things quick.

- **Auth Provider:**  
  Planning to integrate a simple SSO-based auth system (likely starting with Google Auth) to limit access to certain features like an admin dashboard. The idea is to keep the vibe-checking public but have a secure way to manage privileged operations (e.g., writing to the API or accessing WIP reports). Initial implementation will likely use a basic allowlist of authorized emails, with the GraphQL server enforcing access checks based on the authenticated user's identity, which is extracted into the context dynamically for each request.


---

**Disclaimer:** This project is strictly for fun. There’s no scientific basis behind the vibe scores, and none of the external data has any real bearing on actual launch outcomes.
