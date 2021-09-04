#!/usr/bin/env node
const { Command } = require('commander');
const chalk = require('chalk');
const execSync = require('child_process').execSync;
const packageJson = require('../package.json');
const path = require('path');
const fs = require('fs-extra');

let projectName;

const program = new Command(packageJson.name)
	.version(packageJson.version)
	.argument('<project-directory>', 'specify the project directory')
	.usage(`${chalk.green('<project-directory>')}`)
	.action((name) => {
		projectName = name;
	})
	.parse(process.argv);

if (typeof projectName === 'undefined') {
	console.error('Please specify the project directory');
	console.log(
		` ${chalk.cyan(program.name())} ${chalk.green('<project-directory>')}`
	);
	console.log('\nFor Example:');
	console.log(
		` ${chalk.cyan(program.name())} ${chalk.green('my-phaser-project')}`
	);
	process.exit(1);
}

const projectDestination = path.join(process.cwd(), projectName);

if (fs.existsSync(projectDestination)) {
	console.log(`The directory ${chalk.green(projectName)} already exists.`);
	process.exit(1);
}

fs.copySync(path.join(__dirname, '..', 'main-template'), projectName);

const shouldUseYarn = () => {
	try {
		execSync('yarn --version', { stdio: 'ignore' });
		return true;
	} catch (e) {
		return false;
	}
};

process.chdir(projectDestination);
fs.writeFileSync('.gitignore', 'node_modules');

if (shouldUseYarn()) {
	execSync('yarn install', { stdio: [0, 1, 2] });
} else {
	execSync('npm install', { stdio: [0, 1, 2] });
}
