import chalk from 'chalk'

export class Printer {
  title(message: string) {
    console.log(chalk.bold.hex('#E796F3')(message))
  }

  info(message: string) {
    console.log(chalk.blue(message))
  }

  warn(message: string) {
    console.log(chalk.yellow(message))
  }

  error(message: string) {
    console.log(chalk.red(message))
  }
}
