import { publish } from "gh-pages";

publish(
  "build",
  {
    branch: "gh-pages",
    repo: "https://github.com/RedRikudo/red-portfolio.git", // Update to point to your repository
    user: {
      name: "Diego Imbert",
      email: "diegoimbert@pm.me", // Update to use your email
    },
    dotfiles: true,
  },
  () => {
    console.log("Deploy Complete!");
  },
);
