# LinuxUPC Website

This is the website of LinuxUPC, a community at the UPC dedicated to Free Software.

## Project Structure

The project is organized as follows:

- `assets/css/`: Contains CSS files.
- `assets/js/`: Contains JavaScript files.
- `assets/fonts`: Contains the font files.
- `assets/icons/`: Contains icon files used in the project.
- `assets/img/`: Contains image files used in the project.
- `components/`: Contains HTML files for components.
- `index.html`: The main page and the entry point of the website.

## Running the Project Locally

To avoid issues with `fetch` and `file://`, the project should be served from a local server. Here are some options:

### Using Python

```sh
python -m http.server 8000
```

### Using Node.js

```sh
npx http-server -p 8000
```

### Using PHP

```sh
php -S localhost:8000
```

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).