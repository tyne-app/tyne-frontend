import fs from "fs";
import process from "process";

const dir = "src/environments";
const file = "environment.ts";
const prodFile = "environment.prod.ts";

const envDev = `${process.env.ENV_DEV}`;
const envProd = `${process.env.ENV_PROD}`;

fs.access(dir, fs.constants.F_OK, (err) => {
  if (err) {
    console.log("src doesn't exist, creating now", process.cwd());
    fs.mkdir(dir, { recursive: true }, (err) => {
      if (err) throw err;
    });
  }

  try {
    fs.writeFileSync(dir + "/" + file, envDev);
    fs.writeFileSync(dir + "/" + prodFile, envProd);
    console.log("created successfully in ", process.cwd());
    if (fs.existsSync(dir + "/" + file)) {
      const str = fs.readFileSync(dir + "/" + file).toString();
      console.log(str);
    }
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
});
