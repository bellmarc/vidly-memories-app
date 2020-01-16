---
title: FullStack Vidly App Project
tags: Templates, Talk
description: View the slide with "Slide Mode".
---

# React.js FullStack Vidly App Project Proposal

<!-- Put the link to this slide here so people can follow -->

slide: https://hackmd.io/p/vidly-talk-slide

<iframe src="https://drive.google.com/file/d/1B8p1KEQ82G6dAKJjqdtIR3JO8Nh2kgx7/preview" width="640" height="480"></iframe>
---


### What I'm Building:

A platform to connect professional videographers/cinematographers to users who seek their services to capture their special moments (weddings), family memories, or document their journey abroad. Packages available | Specific timeframe, dates/specific time up to individual videographers. Local videographers know the areas well and can take individuals or families to best shooting locations.

The audience would reach international adventurers, social media-influencers, couples, and family travelers who would like less stress since they don't have to bring equipment along their trip overseas.

---

## Who am I?

- Nice to e-meet you. I'm Marc, a Software engineer
- Technologies include: React.js, Express, Node.js, mongoose, and MongoDB

---

### MVP(Minimum Viable Product):

- A registration/login feature complete with JWT(JSOn Web Token) authentication, brief graphic explanation of the service offered, a list of popular travel locations w/ filter for associated professionals who can capture hi-quality memories(videos) for users.

#### User stories

- User views landing page and will view all popular destinations
- User is prompted to click 'Book Now', explains booking process
- User views navigation bar featuring 'Home', About', 'Search', & 'Register/Sign-Up'
- Home page displays all popular listings i.e. Tokyo, Sydney, Bali & videographer cards w/ profile image, associated with each location & professional
- On hover the professional's imageBg will animate to video
- If User selects a Travel Destination card(by popularity), they may view all videographers shooting in that region to consider booking.
- Email list for sign-up discount/offers, what's new

-Sign-up as customer/professional & customer can make booking with professional, the profile page will show customers booking & vice versa.
-Static pages: Homepage process w/images
Testimonial page
-Make fake pros from diff locations & only locations that are signed up by pros will be found by customers.

##### Other future features:

- Book to Checkout (Stripe/Paypal)integration
- Calender for available dates
- -Verification (Pros)
- Chat
- Mailchimp integration
- Splash page w/Video
- Vetting/Sign up process | Portfolio upload submission for videographer professionals
- Request a location for services (user) Search feature
- FAQ
- Customer Service (bot/live/remote service)

---

## Content script

- Minimum of Home, Search, Payment linked pages
- Two Different APIs
- React Components:
  - Home (BookNow, Destinations)
  - About (brief intro on front page)
  - Search [popularLocations, listOfVideographersByLocation, DestinationsByName],
  - GoogleMaps Integration
  - Payment (Paypal, checkout process)
- Added context (UserProvider)
  - using React Hooks

---

Mind-Map

![](https://i.imgur.com/WdNN5oO.png)

---

<style>
code.blue {
  color: #337AB7 !important;
}
code.orange {
  color: #F7A004 !important;
}
</style>

- <code class="orange">const [toggle, setToggle] = useState(false)</code>: Toggle SignUp/Login

- <code class="blue">sendMessage('event')</code>: Trigger event

<b>Toggle Sign Up/Login:</b>

```typescript
import React, { useState } from 'react'

{!toggle ?
<>
    <AuthForm
        inputs={inputs}
        handleChange={handleChange}
        handleSubmit={handleSignupSubmit}
        btnText="Signup"
    />
    <button onClick={() => setToggle(prevToggle => !prevToggle)}>
        Already A Member?
    </button>
</>
:
<>
    <AuthForm
        inputs={inputs}
        handleChange={handleChange}
        handleSubmit={handleLoginSubmit}
        btnText="Login"
    />
    <button onClick={() => setToggle(prevToggle => !prevToggle)}>
        Not A Member?
    </button>
</>\\,
}
```

---

useState/useContext

```typescript
import React, { useState } from "react";

// setup channel in different page environment, once
export const useContext = React.createContext();
```

---

```typescript
// Login w/Axios call
const login = credentials => {
  axios
    .post("/auth/login", credentials)
    .then(res => {
      const { user, token } = res.data;
      localStorage.setItem("user", JSON.stringify("user"));
      localStorage.setItem("token", token);
      setUserState(prevUserState => ({
        ...prevUserState,
        user: user,
        token: token
      }));
    })
    .catch(err => console.log(err));
};
```

<br>

```typescript
// axios get data of Bookings
const getUserBooking = () => {
  userAxios
    .get("/api/book/user")
    .then(res => {
      setUserState(prevUserState => ({
        ...prevUserState,
        userBooked: res.data
      }));
    })
    .catch(err => console.log(err));
};
```

```typescript

---

### Wrap up

- Cross videographer/consumer communication to coordinate plans
- Smooth booking process to solve traveling pains

---

### MongoDB Data

This project will be built using Mock Data (Data present in local MongoDB):
---
```
[My GitHub](https://github.com/bellmarc/vidly-memories-app)

