# CSSLab-Take-Home

## How to run the code?
- After cloning/downloading the codes, please go to /my-experiment
- Run ```meteor npm install``` to install node modules
- Run ```meteor``` to start the app
- Go to http://localhost:3000/ to use the app

## About how many hours did it take for you to implement this task?
It took me about 5 hours to implement the task:
- getting familiar with Empirica (documentation, sample task, youtube tutorial) - 1 hour
- understanding the experiment - 0.5 hour
- designing react components - 2 hour
- developing task flows - 0.75 hour
- testing and debug - 0.5 hour


## What was your biggest challenge in implementing this task?
Designing the user interface is the most challenging part. I spent a lot of time finding and testing the best interactive tools for users to draw out the line.

## What was a key design decision you made for this implementation?
I decided to use react-canvas-draw components for users to draw out their solutions. I have considered creating react components for the dots and the edges. 
However, that would significantly limit the ways a user could draw in. Hence, I decided to use react-canvas-draw, replicating the freedom of drawing on paper.
The canvas drawn by the users could also be easily saved for further analytical purposes.
