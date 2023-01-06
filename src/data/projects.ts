interface Project {
  title: string;
  desc: string;
  tools: string[];
  github: string;
  url?: string;
}
export const projects: Project[] = [
  {
    title: "Planner",
    desc: "Make planning social events easier with a unified calendar",
    github: "https://github.com/ericsodev/planner",
    tools: ["Tailwind CSS", "Next.js", "tRPC", "Prisma", "PostgreSQL"],
    url: "https://planner-production.up.railway.app/",
  },
  {
    title: "PasteWin",
    desc: "An easy way to share snippets of code online.",
    tools: ["Next.js", "Chakra UI", "MongoDB"],
    url: "https://pastewin.findericso.com",
    github: "https://github.com/ericsodev/pastewin",
  },
  {
    title: "Pomodoro Timer",
    desc: "A productivity tool to help create healthy study habits.",
    tools: ["React.js", "Chakra UI"],
    github: "https://github.com/ericsodev/pomodoro",
    url: "http://pomodoro.findericso.com",
  },
  {
    title: "Game of Life",
    desc: "A recreation of John Conway's popular simulation game, the  Game of Life.",
    tools: ["React.js", "Tailwind CSS"],
    github: "https://github.com/ericsodev/ConwaysGameofLife",
  },
  {
    title: "Mood Board",
    desc: "A quick way to record the quality of your day and reflect on yourself.",
    tools: ["Tailwind CSS", "React.js", "MongoDB"],
    github: "https://github.com/ericsodev/Moodboard",
  },
  {
    title: "CHIP 8 Emulator",
    desc: "An emulator used to play classic games such Pacman, Space Invaders, and Pong.",
    tools: ["Java", "JavaFX"],
    github: "https://github.com/ericsodev/chip8emu",
  },
];
