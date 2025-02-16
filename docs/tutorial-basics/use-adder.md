---
sidebar_position: 3
---

# Use the Telebox adder

You have two options for using the adder, the first is simple but buggy, the other is the application on cmd and it's a command line to type, but it works perfectly.

## First option

### Load users

This option is very simple, you need to connect your account as the scraper process.
Then you need to load a list of users, the file may look like `users.csv`.

![image](@site/static/img/load-users.webp)

### Load groups

Next, load the group to which you wish to add all the users on your list.

![image](@site/static/img/load-groups.webp)

### Select speed

For better management you can select the **speed recomandation**, `Very slow, Normal, Fast, Very fast`.

* Use at your own risk, the documentation recommand **50 adds per day & per account**.
* If the account get banned or tempbanned (just too much requests, so Telegram disable it to perform any add for ~16hours) there is a **swapper account** method in the code that switch without interrupting the process.

![image](@site/static/img/select-speed.png)

Finally, you can click on `Add members` and *the application freezes...*.

This is because my code is terrible and the main process is running and blocking the application thread.

Don't worry, the *main process works in the background*.

## Second option (best)

To open the terminal option, simply click on `open terminal`.

### Launch the terminal

The first things you need to do is checking if you are in a virtual environnement `(.venv) in front of the command`.


If it's not the case, activate it :

```bash
.venv\Script\activate
```

Then start the script.
```bash
python telebox\telebox_adder_cmd.py
```

![image](@site/static/img/second-option.png)

### Name account

Enter the name of the account which it adds members.

![image](@site/static/img/enter-name.png)

### Select file

Select a csv file with full of users.

![image](@site/static/img/add-file.png)

### Select group

Select a group or a channel where you want to add people.

![image](@site/static/img/select-group-2.png)

### Select speed

Change how fast you want to put for the adding process.

![image](@site/static/img/select-speed-2.png)
