#!/usr/bin/env node

import chalk from "chalk";
import path from "path";
import fs from "fs";
import { Command } from "commander";
import select from "@inquirer/select";
import { input } from "@inquirer/prompts";
import { execa, execaCommand } from "execa";
import ora from "ora";
import childProcess from "child_process";

const log = console.log;
const program = new Command();
const green = chalk.green;

const repoUrl = "https://github.com/bidah/uni-stack.git";

const isYarnInstalled = () => {
  try {
    childProcess.execSync("yarn --version");
    return true;
  } catch {
    return false;
  }
};

const isBunInstalled = () => {
  try {
    childProcess.execSync("bun --version");
    return true;
  } catch (err) {
    return false;
  }
};

async function main() {
  const spinner = ora({
    text: "Creating codebase",
  });
  try {
    const kebabRegez = /^([a-z]+)(-[a-z0-9]+)*$/;

    program
      .name("Create uni app")
      .description(
        "Full Stack React Native Boilerplate for building streaming AI apps."
      );

    program.parse(process.argv);

    const args = program.args;
    let appName = args[0];

    if (!appName || !kebabRegez.test(args[0])) {
      appName = await input({
        message: "Enter your app name",
        default: "unify-app",
        validate: (d) => {
          if (!kebabRegez.test(d)) {
            return "please enter your app name in the format of my-app-name";
          }
          return true;
        },
      });
    }

    const uiLibrary = await select({
      message: "Which UI library do you want to use?",
      choices: [
        { name: "Nativewind v4", value: "nativewind" },
        { name: "Gluestack UI", value: "gluestack" },
      ],
      default: "Nativewind v4",
    });

    spinner.start();
    await execa("git", ["clone", repoUrl, appName]);
    try {
      if (uiLibrary === "gluestack") {
        await execa("rm", ["-r", `${appName}/with-nativewind`]);
        await execa("rm", ["-r", `${appName}/with-tamagui`]);
      } else if (uiLibrary === "nativewind") {
        await execa("rm", ["-r", `${appName}/with-gluestack`]);
        await execa("rm", ["-r", `${appName}/with-tamagui`]);
      }
      await execa("rm", ["-r", `${appName}/web`]);
      await execa("rm", ["-r", `${appName}/cli`]);
      await execa("rm", ["-rf", `${appName}/.git`]);
    } catch (err) {}

    log("Moving folders");
    const pwd = process.cwd();
    log(pwd);

    await execaCommand(`mv ${pwd}/${appName}/with-${uiLibrary} ${pwd}`);
    await execaCommand(`rm -rf ${appName}`);
    await execaCommand(`mv with-${uiLibrary} ${appName}`);

    let packageJson = fs.readFileSync(`${appName}/package.json`, "utf8");
    const packageObj = JSON.parse(packageJson);
    packageObj.name = appName;
    packageJson = JSON.stringify(packageObj, null, 2);
    fs.writeFileSync(`${appName}/package.json`, packageJson);

    spinner.text = "";
    let serverStartCommand = "";

    if (isBunInstalled()) {
      spinner.text = "Installing dependencies";
      await execaCommand("bun install").pipeStdout(process.stdout);
      spinner.text = "";
      serverStartCommand = "bun web";
      console.log("\n");
    } else if (isYarnInstalled()) {
      await execaCommand("yarn").pipeStdout(process.stdout);
      serverStartCommand = "yarn web";
    } else {
      spinner.text = "Installing dependencies";
      await execa("npm", ["install", "--verbose"]).pipeStdout(process.stdout);
      spinner.text = "";
      serverStartCommand = "npm run web";
    }

    process.chdir("../");
    process.chdir(path.join(process.cwd(), `app`));

    spinner.text = "";
    let appStartCommand = "";

    if (isBunInstalled()) {
      spinner.text = "Installing app dependencies";
      await execaCommand("bun install").pipeStdout(process.stdout);
      spinner.text = "";
      appStartCommand = "bun start";
      console.log("\n");
    } else if (isYarnInstalled()) {
      await execaCommand("yarn").pipeStdout(process.stdout);
      appStartCommand = "yarn start";
    } else {
      spinner.text = "Installing app dependencies";
      await execa("npm", ["install", "--verbose"]).pipeStdout(process.stdout);
      spinner.text = "";
      appStartCommand = "npm start";
    }
    spinner.stop();
    process.chdir("../");
    log(
      `${green.bold(
        "Success!"
      )} Created fullstack Expo universal native app setup for ${appName} at ${process.cwd()} \n`
    );
    log(
      `To get started run ${chalk.cyan(
        serverStartCommand
      )} to run the web app with the expo router API routes\n`
    );
    log(
      `In a separate terminal, run ${chalk.cyan(
        appStartCommand
      )} and to launch native app hit I for IOS simulator or A for Android emulator in your keyboard\n`
    );

    log("-----------------------------");
    log(
      "Follow ROFI @ http://x.com/bidah for updates on the project and universal app development"
    );
  } catch (err) {
    log("Error: ", err);
    log("\n");
    if (err.exitCode == 128) {
      log("Error: directory already exists.");
    }
    spinner.stop();
  }
}
main();
