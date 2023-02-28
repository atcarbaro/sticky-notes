I've used the Create React App boilerplate for this project so everything is inside the src folder.
Inside the src folder I have two directories, components and pages.
Components folder will hold reusable components, these can be buttons, input fields, and content containers like cards. In my case I have Board and Note.
Pages folder has only the Home page, this will hold our main page which call all the components needed
So in this way if we need to add test or storybook files in a future, we can do it inside our component folder like Board or Note