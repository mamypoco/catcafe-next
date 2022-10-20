This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Steps to convert from react project

    1. Copy all files into the appropriate folders
    2. Replace <image> to <Image> and import Image from 'next/image'
    3. Replace NavLink with Link, to= with href= and import Link 'next/link'
    4. Uninstall react-router-dom to resolve any error.
    5. Install dependencies for reactstrap and fontawesome
    6. Replaced apostrophy with &apos;
    7. Add imports for fontawesome per https://fontawesome.com/docs/web/use-with/react/use-with
