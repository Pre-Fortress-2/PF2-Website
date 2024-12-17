# Build Instructions
- Install [ruby](https://www.ruby-lang.org/en/documentation/installation/) 
- Install [Jekyll](https://jekyllrb.com/)
- Open up a terminal. For Windows, you can use cmd.exe. Run the command ``bundle install`` to install the dependencies mentioned in the Gemfile.
- Run ``build.sh`` on Linux/Mac OS or ``build.bat`` on Windows. These scripts just run ``bundle exec jekyll serve`` to start the website, so it's easy to remember.
- The website should start building using the .md files (not this one!). This converts all these files into HTML files to construct the finished website.

# Testing
Once the build is done, Jekyll will start up a local web server on your computer. This is where the website is hosted. Navigate to [http://localhost:4000](http://localhost:4000) in your browser. The page should be there with your modifications. Modifications can be made while the website is running and will apply in real time. Refresh the website to see your changes.