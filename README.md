## Table of contents

- [The project](#The-project)
- [Technologies](#technologies)
- [Setup](#setup)
- [Testing scenarios](#testing-scenarios)
- [What I learned](#What-I-learned)

## The project

This is a simple react project that demonstrates requesting an invite by posting to an API via a form in order to fetch a response.
It was made with responsiveness in mind as well as accessibility.
This single page web app also features a dummy About and Contact section which demonstrate react-router.

## Technologies

- React as the JavaScript library
- HTML
- SCSS
- Bootstrap (rarely)
- React-modal
- React-router

## Setup

To run this project:

1. Install dependencies using npm or yarn

```
npm install
```

2. Navigate to the root of the project

```
$ cd broccoli-and-co
```

3. Run the project

```
$ npm start
```

# Testing scenarios

- Test Nav functionality
- Click on request invite which prompts modal
- Form should check for
  - Name validation (min 3 characters)
  - Email validation and warning if it doesn't
  - Emails match and warning if they dont
- The form should not submit if:
  - Form is empty
  - Name or email is invalid
  - Emails don't match
- Successful form submit should prompt second modal
- Requesting another invite should have a clear form
- All the above should be done in both Desktop and mobile viewport.

# What I learned

- It was great to brush up on React and this is the first time using React hooks and I appreciate how clean the code is and how much easier it is to work with.
- Structure of SCSS by managing files and using mixins.
- I did briefly learn about Jest's mocks and the type of tests but was unfortunately unable to demonstate it in the project due to configuration issues. This is something to improve on in the future because I'm willing to use testing regularly in a professional environment.
- Accessibility tags and other important things to take into consideration when building a web page.
- That I need do more testing in order to get better. ie unit tests
