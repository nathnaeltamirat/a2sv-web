# Task Manager App
---

A simple job application showr built with NextJs , Typescript and Tailwind CSS. It allows users to see all opportunites and details about it using real API with authentication and otp.
google auth won't work since only the api is given rather than the db and end to tend testing using jest and cypress

##  Features
- Signup /Login
- Two step verification (otp) - with timer
- See tasks
- Get tasks
- Responsive and clean design

---

##  Tech Stack
- **TailwindCSS** – Styling
- **Typescript** – Logic & Interactivity
- **NextJS** - Framework
- **Cypress and Jest** - Testing



---

##  Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/nathnaeltamirat/a2sv-web.git
cd job-listing-application-task9-bookmark
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```
## Project Structure
```bash
job-listing-application-task-7-dynamic/
├── .next/
├── __tests__ /
├── cypress/
├── node_modules/
├── public/
├── src/
│   ├── app/
│   │   ├── job-listing/
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   │   └── job.tsx
│   │   ├── login/
│   │   ├── signup/
│   │   ├── verify/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   ├── components/
│   │   ├── back.tsx
│   │   └── card.tsx
│   │   └── login.tsx
│   │   └── signUp.tsx
│   │   └── verify.tsx
│   │   └── boomark.tsx
│   ├── utils/
│   │   └── helper.tsx
├── .gitignore
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── jest.setup.ts
├── jest.config.ts
├── cypress.config.ts


```


## Preview


###  Boomarked Screen 
![Boomarked](https://raw.githubusercontent.com/nathnaeltamirat/a2sv-web/main/job-listing-application-task9-bookmark/public/bookmarked.png)

###  UnBookmarked Screen 
![UnBookmarked](https://raw.githubusercontent.com/nathnaeltamirat/a2sv-web/main/job-listing-application-task9-bookmark/public/unbookmarked.png)

###  Signup Screen 
![Signup](https://raw.githubusercontent.com/nathnaeltamirat/a2sv-web/main/job-listing-application-task9-bookmark/public/signup.png)

###  OTP Waiting Screen
![OTP waiting Screen](https://raw.githubusercontent.com/nathnaeltamirat/a2sv-web/main/job-listing-application-task9-bookmark/public/waiting.png)

###  SendOTP Screen 
![SendOTP](https://raw.githubusercontent.com/nathnaeltamirat/a2sv-web/main/job-listing-application-task9-bookmark/public/sendOtp.png)

###  Confirming Screen 
![confirm](https://raw.githubusercontent.com/nathnaeltamirat/a2sv-web/main/job-listing-application-task9-bookmark/public/confirm.png)

###  Login Screen 
![login](https://raw.githubusercontent.com/nathnaeltamirat/a2sv-web/main/job-listing-application-task9-bookmark/public/login.png)




## Future Improvements

- [ ] Update opportunity
- [ ] Delete opportunity
- [ ] Filtering and search  
- [ ] Dark mode  


## 👨‍💻 Author

- **Name**: Nathnael Tamirat  
- **GitHub**: [@nathnaeltamirat](https://github.com/yourusername)  
- **LinkedIn**: [linkedin.com/in/nathnael-tamirat/](https://www.linkedin.com/in/nathnael-tamirat/)  
- **Email**: nathnaeltamirat3@gmail.com
