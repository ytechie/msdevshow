[![Build Status](https://travis-ci.org/ytechie/msdevshow.svg?branch=master)](https://travis-ci.org/ytechie/msdevshow)

# The _MS Dev Show_ Site

[MS Dev Show Podcast](http://msdevshow.com) website source. Our website is automatically updated when this repo changes. Fork this project to make a similar site.

A NEW podcast for Microsoft developers covering topics such as Azure/cloud, Windows, Windows Phone, .NET, Visual Studio, and more! Hosted by Jason Young and Carl Schweitzer.

Subscribe to the show using our [RSS Feed](http://msdevshow.libsyn.com/rss), or search for "ms dev show" in your favorite podcast app.

## Getting Started with Docpad
The _MS Dev Show_ site utilizes Docpad, a nodejs-based static site generation tool, to build its website and resources. Follow the installation steps below to run a local copy of the site.

### Running with Docker

If you just want to run a local copy of the site using Docker, simply run:
`docker run -i -d -P ytechie/msdevshow`

### Installation

1. Download and install [nodejs](http://nodejs.org/) (use default options)
1. In the command prompt/terminal, navigate to your git repository folder

        npm install
        npm install -g docpad@6
        docpad run

And done! These guidelines should work for both Windows and Mac OS X.

### Running the Site

1. From the command prompt/terminal, navigate to your git repository folder
2. Run the command `docpad run`, this will start a local server and begin rendering your files
3. Open your favorite web browser and navigate to [http://localhost:9778/](http://localhost:9778/)

