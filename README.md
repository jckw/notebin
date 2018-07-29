# 📝 Notebin
A simple, anonymous textbin app!

### Idea
When the app is launched, and the first text-note is written, a unique code is generated to access the "folder" which stores all of the text-notes created.

The folder can be viewed later by entering the unique code generated when it was first created.

Text-notes can be added or edited whenever a folder is viewed, but cannot be deleted.

### Stack
Since this project is really to provide some experience with the following stack, it's definitely overkill.

* Django
* React
* Redux
* GraphQL
    * Graphene
    * Relay
* SCSS
* Jest
* Enzyme

## Development
1. Clone this repo
2. `cd backend`
3. Set up a virtual environment using: `python3 -m venv .`
4. Install the requirements: `pip install -r requirements.txt`
5. Move into the Django project with: `cd server`
6. Set up the database: `python manage.py makemigrations`
7. Move into the frontend: `cd ../../frontend`
8. Install the dependencies: `yarn install`

## License
This project is licensed under the MIT license.
