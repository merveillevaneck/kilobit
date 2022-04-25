# Welcome to the KiloBit workspace

To get started straight away run `bit start` and open [localhost:3000](http://localhost:3000). It may take a while to build the first time you run this command as it is building the whole User Interface for your development environment.

```bash
bit start
```

## What we build here

This is a bit component registry where we build reuseable web components using styled components and styled system. The purpose is to achieve
a best practice approach for component users that match the methodology of native base but does not require the use of `react-native-web`
as a mediary between native component primitive and web primitive elements.

## What you can do with these components

These components aim to be used in NextJS and ReactJS projects with styled components support. All of the styling should be done through props.
These components, once published to https://bit.cloud/kilo-lab/web-design should be importable individually on a case by case basis. No need to require importing a whole library to use one or two components.

The main focus of the components included on this collection are as follows:

- formik coupled user input components
- frequently used formik hooks and utilities
- frequently use redux hooks and utilities
- frequently used layout components
- frequently used visual components

## What's included

- **workspace.jsonc**

This is the main configuration file of your bit workspace. Here you can modify the workspace name and icon as well as default directory and scope. It is where dependencies are found when you install anything. It is also where you register aspects, bit extensions as well as apply the environments for your components. This workspace has been setup so that all components use the React env. However you can create other components and apply other envs to them such as node, html, angular and aspect envs.

- **.bitmap**

This is an auto-generated file and includes the mapping of your components. There is one component included here. In order to remove this component you can run the following command.


- **Demo Components**

A folder (unless the --empty flag was used) containing demo components are included in this workspace. These components are used to demonstrate the different features of Bit. If you would like to remove these components you can run the following command.

```jsx
bit remove "ui/*" --delete files
```

This removes the components from the bitmap as well as removes the files.


- **.gitignore**

Ignoring any files from version control
