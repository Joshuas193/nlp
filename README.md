# Natural Language Processing using MeaningCloud Sentiment Analysis

This project will analyze a news or other article using meaningCloud's API. A huge amount of data is returned so we're just utilizing a few of the data tytpes returned.

### What is sentiment analysis?
Well in Meaning Cloud's own words Sentiment Analysis is MeaningCloud's solution for performing a detailed multilingual sentiment analysis of texts from different sources.

The text provided is analyzed to determine if it expresses a positive/negative/neutral sentiment; to do this, the local polarity of the different sentences in the text is identified and the relationship between them evaluated, resulting in a global polarity value for the whole text.

Besides polarity at sentence and global level, Sentiment Analysis uses advanced natural language processing techniques to also detect the polarity associated to both entities and concepts in the text. It provides a reference in the relevant sentence and a list of elements detected with the aggregated polarity derived from all their appearances, also taking into account the grammatical structures in which they are contained.

## Instructions for using the app.

### You will need to sign up for an API key
Go to meaningCloud's website and sign up for an API_KEY. Click this [Link](https://www.meaningcloud.com/developer/create-account)
Once you have signed up you can get an API key for free. You will then need to go into the file I have ccalled .env_template.
Chaneg the name of this to just **.env** and paste in your API key you got from Meaning Cloud.

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


### Validation:
There is a JS function that ensures that you haven't entered a invalid URL but you can enter it in the format you want
so if its `https://example.com/article` or `www.example.com/article` or just `example.com/article` they will all work. Although
the third example is somewhat slower to return the data. If you leave off the .com it will alert you that you need to enter a valid article.

### Styling
I went with very minimal styling as the point of the project was setting up Webpack with loaders and plug-ins and making API calls from the server.

### Develoment Environment
You can run a development environment with a auto-reload feature. You will need to start the production server following the steps above and then in
a second terminal you will need to run the **npm run build-dev** .
This will open a browser window on localhost:8080. Since the server runs on port 8081 you will need to keep both running while in the development environment.

