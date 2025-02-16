---
sidebar_position: 1
---

# Tutorial Intro

Let's discover **Telebox in less than 5 minutes**.

## Getting Started

Get started by **Downloading the software**.

In the repo **Github** with **[Telebox on github](https://github.com/joedebiden/Telegram-scraper-adder-app)**.


### What you'll need

- [Python](https://www.python.org/downloads/release/python-3129/) version 10 or above (12.9 is perfect):
  - When installing Python, you are recommended to check all checkboxes expecially the one who add Python to the env path.
  - Need [pip](https://packaging.python.org/en/latest/tutorials/installing-packages/) to install all the libraries.

- [Telegram account](https://my.telegram.org/auth) get all the details of your telegram account
  - It include the `api_id`, `api_hash`, `phone number`.


## Installation

Once you've gone to the official [python website](https://www.python.org/) and downloaded the executable, run it and check all the boxes.
![image](@site/static/img/python-installer.webp)

### 1 Clone the project
If it hasn't already
```bash
git clone https://github.com/joedebiden/Telegram-scraper-adder-app.git
cd Telebox-app
```

### 2 Start a virtual environment
In the directory where the **requirements.txt** file is located
```bash
python -m venv .venv
.venv\Scripts\activate 
```
### 3 Install the dependencies
```bash
pip install -r requirements.txt
```

## Start Telebox app
Now every time you want to use the app, just open the **virtual environment**
you normally see a **(.venv)** in first line of the cmd else type:
![image](@site/static/img/venv-cmd-show.webp)
```bash
.venv\Scripts\activate 
```
&
```bash
python telebox\main.py 
```

Now let's take a closer look at how to use Telebox's features.