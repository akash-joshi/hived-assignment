# Hived Feedback

This application is designed to collect feedback from drivers about their deliveries. Drivers can access the application via a link that includes their `deliveryId` and `driverId` as query parameters. The application uses these parameters to fetch delivery details from an API, which returns data in the format outlined below.

### Getting Started

```bash
pnpm install
pnpm run dev
```

Served with hot reload at <http://localhost:5173>.

### Assumptions

![Design]('./Design.png')

1. For speed and having all the data at load-time, the page is server-side rendered.
2. The user may be near the location they are giving feedback for.
3. There is a `/feedback` endpoint which accepts form-data.

### Technology Used

1. React + Vite for rendering the SPA.
2. DaisyUI + Tailwind for styling.
3. Native form data elements for handling state and submission
