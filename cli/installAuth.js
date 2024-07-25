import { Command } from "commander";
import inquirer from "inquirer";
import ejs from "ejs";
import fs from "node:fs/promises";
import path from "node:path";

export const installAuth = async () => {
  try {
    const answers = await inquirer.prompt([
      {
        type: "confirm",
        name: "installAuth",
        message: "Do you want to install Supabase auth setup?",
        default: false,
      },
    ]);

    if (answers.installAuth) {
      // Path to your EJS template
      const templatePath = path.join(__dirname, "templates", "auth.ejs");

      // Read the EJS template
      const template = await fs.readFile(templatePath, "utf-8");

      // Render the EJS template (you can pass data here if needed)
      const renderedContent = ejs.render(template, { style: "nativewind" });

      // Write the rendered content to the target path
      const targetPath = path.join(process.cwd(), "auth.js");
      await fs.writeFile(targetPath, renderedContent);

      console.log("Auth setup has been installed successfully!");
    } else {
      console.log("Auth installation skipped.");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

program.parse(process.argv);
