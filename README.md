<br/>
<!-- Logo & Title-->
<div align="center">
  <img src="https://github.com/lucaslobasso/js_logger/blob/main/assets/logo.png" width="200">
  
  # jsLogger
</div>


<!-- Description -->
<p align="center">
  A simple JavaScript plugin that automatically logs your runtime errors, AJAX errors and rejected Promises.
  <br/>
  <a href="https://github.com/lucaslobasso/js_logger/issues">Report a bug</a>
  ·
  <a href="https://github.com/lucaslobasso/js_logger/issues">Request a feature</a>
</p>

<!-- Shields -->
<div align="center">
  
  ![GitHub issues](https://img.shields.io/github/issues/lucaslobasso/js_logger)
  ![GitHub contributors](https://img.shields.io/github/contributors-anon/lucaslobasso/js_logger)
  ![GitHub](https://img.shields.io/github/license/lucaslobasso/js_logger?color=4884c9)
  ![GitHub forks](https://img.shields.io/github/forks/lucaslobasso/js_logger?style=social)
</div>

<!-- Table of contents -->
<details open="open">
  <summary>Table of contents</summary>
  <ol>
    <li><a href="#about-the-project">About the project</a></li>
    <li><a href="#getting-started">Getting started</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- About -->
## About the project

**jsLogger** originated from the need to log the JavaScript errors that occur during runtime in a file. 

It depends on having a logging platform in the backend to write in the file, but it takes care of detecting and logging code errors, AJAX errors and even rejected Promises.

It also offers the user simple methods to log anything they want with differents levels.

<!-- Getting started -->
## Getting started

For **jsLogger** to work, all you need to do is set up a method in your backend that handles the logging.

In this example I'm using the .NET framework and NLog:

<div align="center">
  <img src="https://github.com/lucaslobasso/js_logger/blob/main/assets/screenshots/logController.png" width="900">
</div>

<!-- Usage -->
## Usage

**jsLogger** automatically logs any error caused on runtime, any rejected Promise and any error caused in a AJAX request. But if you also want to manually log something, you can do it by using any of it's methods: Info, Debug, Error or Exception.

<div align="center">
  <img src="https://github.com/lucaslobasso/js_logger/blob/main/assets/screenshots/jsLogger.png" width="700">
</div>

<!-- Readmap -->
## Roadmap

See the [open issues](https://github.com/lucaslobasso/js_logger/issues) for a list of proposed features (and known issues).


<!-- Contributing -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the project.
2. Create your feature nranch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a `Pull Request`.


<!-- License -->
## License

Distributed under the MIT License. See `LICENSE` for more information.


<!-- Contact -->
## Contact

Lucas Damián Lobasso - lobassolucas@gmail.com

Project link: [https://github.com/lucaslobasso/js_logger](https://github.com/lucaslobasso/js_logger)
