---
layout: ../../layouts/MarkdownPostLayout.astro

title: Why the heck ShadCN?
slug: why-the-heck-shadcn
pubDate: 2024-05-01
draft: false

ogImage: "/public/blogs/why-the-heck-shadcn.webp"

description: "People are mad about ShadCN UI library. But I can't grasp my mind around the idea"
author: "Ashish Khare"
---

I don't want to set a premise for this post. Let me put it out straight: People are madly using it. I can easily comprehend why people shifted to Tailwind CSS instead of using Bootstrap or doing it all vanilla with CSS modules. Tailwind CSS introduced a completely new paradigm of styling. Like how emotion and styled-components, revolutionized the styling world. On the other hand, Shadcn UI opts in for the palest approach and does nothing new.

It is build on top of well-known, Radix UI, and offers a simple API to use pre-built components. It also offers styling options with themes support. To sum up, it's just a wrapper around the Radix library. I once tried using it, and it was like any other UI library. I fail to see what people like about it so much. Until now...

## The Facade Pattern

Wikipedia says,

> a facade is an object that serves as a front-facing interface masking more complex underlying or structural code.

In a similar fashion, Shadcn components abstract away the implementation logic and present a clean API to the developers. The best part of this approach is that the underlying component can be replaced with any other component without disrupting code elsewhere. It's like having a large enough gift wrap which can wrap around any shape and volume.

Hruthik, my employeer, recently made me aware of this fact. Essentially, what shadcn offers is a beatiful wrapper which can fit upon any button you want. Adopting the facade pattern ensures uniformity across entire codebase regardless of the changes to your design system at any point.

Truely, if I were to create a new design system now, I will definitely deploy components using the facade principle. The principle is beautiful, the implementation is beautiful.

## Still a pessimist

I'm baffled by the popularity of this library. I do not criticize the growth of it. But I can't wrap my head around the simplicity of this library.
