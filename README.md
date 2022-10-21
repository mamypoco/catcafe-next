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
    3. You may replace Link import from 'next/link'
    4. Change NavLink import from reactstrap instead of 'react-router-dom. Replace to= with href=.
    5. Uninstall react-router-dom to resolve any error.
    6. Install dependencies for reactstrap and fontawesome
    7. Replaced apostrophy with &apos;
    8. For issue that Fontawesome icon gets too big, add imports for fontawesome per https://fontawesome.com/docs/web/use-with/react/use-with
    9. For footer Link, add a tag after <Link> so the css can apply.
