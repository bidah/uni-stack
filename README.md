# [️⚛💻📱UNI STACK](https://www.uni-stack.dev/)

### typesafe setup to build fullstack expo universal native apps.

---

## Usage

### Starter installation

Create a new project with option to select your prefered UI library with:

```sh
npx create-uni-app
```

### Set .env file

Rename .env.sample to .env

```sh
mv .env.sample .env
```

### Configure your Prisma Client

⚠️ you will get a `TypeError: ExpoResponse is not a constructor` error if you don't do this before running the server

```sh
npm run prisma:generate
```

### Run web app and API

```sh
npm run web
```

This spins up the web app with expo router API routes

### Run native apps

In a separate terminal run

```sh
npm run start
```

To launch native app hit I for IOS simulator or A for Android emulator in your keyboard

## Tech stack

- Expo v50
- Typescript v5
- Prisma v5.9
- tRPC v11
- Expo Router v3
- UI
  - Nativewind v4
  - Tamagui
  - gluestack-ui
- SQLite database

## Prisma

> SQLite database comes with two tables `users`, and `posts` for you to try out the setup.

To generate and instantiate Prisma Client run:

```sh
npm run prisma:generate
```

The db push command pushes the state of your Prisma schema file to the database without using migrations.

```sh
npm run prisma:push
```

Explore and manipulate your data with a web UI

```sh
npm run prisma:studio
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## About Author

### Rodrigo Figueroa

Follow Rodrigo Figueroa, creator of `uni-stack` for updates on the project and universal app development on [x/twitter](https://twitter.com/bidah)

## Credits

- [Nader Dabit](https://x.com/dabit3) for [RN-AI](https://github.com/dabit3/react-native-ai) and using it's CLI setup as a template to build uni-stack CLI.
- [Nishan](https://x.com/nishanbende) for [expo-trpc](https://github.com/intergalacticspacehighway/expo-trpc) starter that served as inspiration to build this setup.
- [Nate Birdman](https://x.com/natebirdman) from [Tamagui](https://tamagui.dev/) for testing this modified version of the Tamagui Expo Router starter and fixing various issues.
- [Sanket Sahu](https://x.com/sanketsahu) from [Gluestack](https://gluestack.io/) for being the first to join the conversation about the project and offer his support.

## License

MIT
