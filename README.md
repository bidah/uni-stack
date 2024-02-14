# [️⚛💻📱UNI STACK](http://dub.sh/uni-stack)

### typesafe setup to build fullstack expo universal native apps.

---

## Usage

Create a new project with option to select your prefered UI library with:

```sh
npx create-uni-app
```

## Run web app and API

```sh
npm run web
```

This spins up the web app with expo router API routes

## Run native apps

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
  - Gluestack UI
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

Follow Rodrigo Figueroa, creator of `react-native-vercel-ai` on Twitter: [@bidah](https://twitter.com/bidah)

## License

MIT
