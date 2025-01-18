# Sakura

## 0.1.1

### Patch Changes

- Minor design tweaks and Information addition

    1. Fix the body `justification` problem

    2. Add information about [Go North](https://go-north.vercel.app/)

    3. Increased the font-size to `base` for more legibility.

## 0.1.0

### Minor Changes

- 06522a4: Initial Version of the Blog Template

    1. Routes added:

        1. `/` the index route with a little detail about the person
        2. `/about` a detailed page about yourself
        3. `/blog` to show list of all written blogs
        4. `/work` couple of work experience points
        5. `/contact` home for all your social detials
        6. `404` custom 404 page(as well)

    2. Rss feed added `/rss.xml`

    3. Enabled **Page Transition**(using default: `fade

    4. Shift from `Sass` -> `Tailwind CSS`.
       Added `tailwind-typography` plugin.

    5. Add open graph images under `/public/blogs/[name]`
       Static for now.

    6. **Footer** with all navigation links.

    7. improved documentation with how-to guides
