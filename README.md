<img width="1920" height="961" alt="Screenshot 2025-07-26 at 9 08 13 AM" src="https://github.com/user-attachments/assets/19a3772b-3c99-4a2b-94cd-fea4883d3a37" />

App home: http://127.0.0.1:5173/react-workshop/
Getting Started
Setup
Install gems

bundle install
ENV Variables
Create .env file

touch .env
Inside .env, set these variables. For any APIs, see group Slack channel.

CLOUDINARY_URL=your_own_cloudinary_url_key
DB Setup
rails db:create
rails db:migrate
rails db:seed
Run a server
rails s
Built With
Rails 7 - Backend / Front-end
Stimulus JS - Front-end JS
Heroku - Deployment
PostgreSQL - Database
Bootstrap — Styling
Figma — Prototyping
Acknowledgements
Inspired by my friend's obsession with coffee. I wanted to create an app that would help him find what he needs whenever he visits me in Tokyo. Mainly to save time deciding on which cafe to go haha.

Team Members
Jason R. Rocha(https://www.linkedin.com/in/jason-rocha-37188a150/)
Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

License
This project is licensed under the MIT License
