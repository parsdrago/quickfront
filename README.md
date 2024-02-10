# Quickfront

Quickfront is a simple and easy to use front-end framework for web development.

## Features

- **Easy to use**: Just add `data-src` attribute to the `table` tag to load the data from the server.
- **No need to write JavaScript**: Quickfront will automatically load the data from the server and display it as a table.

## Getting Started

Load js file by adding the following code to your HTML file:

```html
<script src="/path/to/quickfront.js"></script>
```

Add `data-src` attribute to the `table` tag to load the data from the server:

```html

<table data-src="/path/to/api"></table>

```

Then Quickfront will automatically load the data from the server and display it as a table.

## Full example

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>LazyKit</title>
</head>

<body>
    <!-- Just add data-src attribute to table tag -->
    <!-- json data will be fetched and rendered as table -->
    <table data-src="https://jsonplaceholder.typicode.com/posts"></table>

    <!-- Load QuickFront.js -->
    <script src="/quickfront.js"></script>
</body>

</html>
```
