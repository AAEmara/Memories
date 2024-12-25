# Memories

## Table of Contents
- [Introduction](#introduction)
  - [What is Memories Web App?](#what-is-memories-web-app)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Features](#features)
- [Installation Instructions](#installation-instructions)
- [Usage](#usage)
- [Deployment](#deployment)
- [License](#license)

## Introduction
### What is Memories Web App?
It's a web app that provide users with the ability to save their memories
and share it with others.

## Technologies Used
  - **Runtime Environment**: Node.js
  - **Data Tier** AKA _"Model"_: MongoDB, Mongoose
  - **Application Tier** AKA _"Control"_: Express.js
  - **Presentation Tier** AKA _"View"_: React.js
  - **Documentation & API-Documentation**: JSDoc, and Swagger
  - **Containerization**: Docker, Docker-Compose

## Project Structure
  - `containers/`: used to hold docker-compose configurations for different
                   environments (e.g., Development, Test, and Production)
  - `env/`: used to hold the environment variables for the different
            environments
  - `scripts/`: used to hold bash scripts to automate different operations
  - `server/`: used to hold the server side business logic, models, test, etc.
  - `client/`: used to hold the client side code, assets, etc.

## Features
### Current Features
  - **No Features Implemented Yet**

### Features Backlog
  - Add Memories
    - Users can create a new memory by providing details such as a title, description, date, and image.
    - The user-friendly interface ensures a seamless experience while uploading and organizing memories.

  - Edit Memories
    - Update existing memories with new information or replace outdated images.
    - Edit features allow users to keep their memories accurate and up-to-date.

  - Delete Memories
    - Easily delete unwanted or outdated memories with just a click.
    - Soft-delete functionality ensures users don’t lose data accidentally (optional).

  - Share Memories
    - Generate sharable links to share memories with friends and family.
    - Privacy settings allow users to control who can view or access their shared memories.

  - Memory Gallery
    - Browse through an organized gallery of all memories.
    - Sort and filter memories by date, title, or tags for easy access.

  - User Authentication
    - Secure login and registration ensure that only authorized users can access their memories.
    - Social login options for quick account setup.

## Installation Instructions

# Usage

# Deployment

# License
