import { type ReactNode } from 'react';

export const aboutIntroParagraphs: string[] = [
  "I'm Andrew Chuah, a software engineer based out of Columbia, Maryland. I specialize in making functional, yet unique designs come to life on the web, where the choices being made are rooted in intention. I started out as someone who took an extreme interest in graphic design, and that interest transformed many times over; from graphic design, to game development, and finally to web development, where I'm able to create products that are not only utilitarian, but also unique and full of character.",
  'Outside of work, I keep my hands busy with electronics, digital art, and 3D modeling. I love traveling to experience how other cultures build and express their worlds; some of my favorite trips have been through Malaysia, Thailand, and Japan. I also do a lot of creative writing, which you can explore at my worldbuilding site.'
];

export const luciradisLink: ReactNode = (
  <a
    href="https://luciradis.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-sakura-accent font-medium hover:underline"
  >
    Luciradis
  </a>
);

export const aboutOutroParagraphs: string[] = [
  'If you want to reach out or want to chat, feel free to send me a message!'
];

export const currentStatusText =
  'Building Endfield Architect, a production planner and simulator for Arknights: Endfield.';
