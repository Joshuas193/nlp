# Natural Language Processing using MeaningCloud Sentiment Analysis

This project will analyze a news or other article using meaningCloud's API. A huge amount od data is returned so we're just utilizing a few of the data tytpes returned.


## Instructions for using the app.
### You will need to have Node JS installed to use this.
You can find Node [here](https://nodejs.org/en/).
Install the LTS version.

Once Node is installed you will need to install the app from the command line.
* To Install the app, enter on the command line    **npm install** 
* To build the app enter      **npm run build-prod**
* Then to start the server    **npm run start**
* Open up a browser page and enter **localhost:8081** in the address bar.

Now you will see that it is a pretty basic app with minimal styling. In order to use the app all you need to do is enter
the URL of an article into the form and press Submit. This will send the URL of the article to MeaningCloud
where it will be run through a Sentiment Analysis AI. The article will be gone thru and then the analysis information will be returned
and posted on the page. A great deal of information is returned so I have narrowed it down to 5 categories.

### These Categries Are:
* Score Tag
* Agreement
* Subjectivity
* Confidence
* Irony
