# Dockerfile Reference = https://docs.docker.com/engine/reference/builder/

# With the FROM keyword we can tell docker which image we are going to use.
# For a list of images: https://hub.docker.com/search?q=&type=image
FROM python:alpine

# Copy our app
COPY . /app

# Set our app as the working directory
WORKDIR /app

# Install the requirements of our app
# Remember to generate this in our project: pip freeze > requirements.txt
RUN pip install -r requirements.txt

# We are using flask, so we need a port open
# Make sure you expose the same port as in your python flask script.
EXPOSE 5000

# Then run our app
CMD python ./main.py