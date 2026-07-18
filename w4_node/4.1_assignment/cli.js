import fs from "fs";
import { Command } from "commander";

const program = new Command();

program
  .name("counter")
  .description("CLI for file statistics")
  .version("1.0.0");

program
  .command("words")
  .description("Count the number of words in a file")
  .argument("<file>", "file to count words from")
  .action((file) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        console.error("Error reading file:", err.message);
        process.exit(1);
      }

      const words = data.trim().split(/\s+/).length;

      console.log(`There are ${words} words in ${file}`);
    });
  });

program.parse();