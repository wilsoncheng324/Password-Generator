# Password Generator

This is a simple password generator written in JavaScript. It allows you to create secure passwords based on various criteria like length, including numbers, lowercase and uppercase letters, and special characters.

## Table of Contents

- [Features](#features)
- [Usage](#usage)
- [How It Works](#how-it-works)

## Features

- User-friendly interface for choosing password criteria.
- Customizable password length.
- Options to include numbers, lowercase letters, uppercase letters, and special characters in the generated password.
- Generates a random password based on user choices.

## Usage

To use the password generator, follow these steps:

1. Open the link in a web browser.

2. Click the "Generate Password" button to start.

3. Follow the prompts to specify your password criteria, including length and character types.

4. A secure password meeting your criteria will be generated and displayed in the text area.

5. You can copy the generated password and use it for your needs.

## How It Works

The password generator combines different character sets based on your choices to create a random password. It uses JavaScript to handle user input and generate the password. 

The character sets include:
- Numbers (0-9)
- Lowercase letters (a-z)
- Uppercase letters (A-Z)
- Special characters (+, -, *, /, %, =, >, <, !, &, |, ?, :, ;, ,, .)

The generator validates user choices and ensures that the password length is within the specified range (8 to 128 characters). Once validated, it generates a password by randomly selecting characters from the chosen character sets.

