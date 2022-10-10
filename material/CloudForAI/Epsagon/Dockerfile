FROM python:alpine

COPY . /app
WORKDIR /app

RUN pip install --upgrade pip
RUN apk update && apk add python3-dev gcc libc-dev
RUN apk add build-base linux-headers

RUN pip install -r requirements.txt

EXPOSE 5000

CMD python ./main.py