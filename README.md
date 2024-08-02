
# My Portfolio

This repository contains the source code for my personal portfolio website. Follow the instructions below to get started with cloning the repo, running it locally, and making changes.

## Getting Started

### Step 1: Clone the Repository

First, clone the repository to your local machine using the following command:

```bash
git clone https://github.com/dikshithvishnu/dikshith-portfolio.git
```

### Step 2: Navigate to the Project Directory

Once the repository is cloned, navigate into the project directory:

```bash
cd dikshith-portfolio
```

### Step 3: Install Dependencies

Before running the project, make sure to install all the necessary dependencies. You can do this by running:

```bash
npm install
```

or if you're using `yarn`:

```bash
yarn install
```

### Step 4: Run the Development Server

To view the portfolio locally, start the development server:

```bash
npm run dev
```

or if you're using `yarn`:

```bash
yarn dev
```

The application should now be running on `http://localhost:3000`.

## Making Changes

To update the content on the portfolio, start by editing the file located at:

```
lib/constants/index.ts
```

This file contains the main constants and data used across the portfolio. Modify this file to reflect the changes you want to make.

### Step 5: Build for Production

If you're ready to deploy your changes, you can build the project for production by running:

```bash
npm run build
```

or if you're using `yarn`:

```bash
yarn build
```

This will create an optimized production build in the `out` directory.

## Deploying

You can deploy the built project to your preferred hosting service. For example, if you're using Vercel, Netlify, or GitHub Pages, follow their specific deployment instructions.

---

Feel free to reach out if you have any questions or encounter any issues.

Happy coding!
