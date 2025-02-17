---
sidebar_position: 2
---

# Use the Telebox scraper

## Select an account

First you have to **choose an account** to perform an action, rather useful when you have several Telegram accounts

* If you don't have an account, an error will occur before the scraper is launched.

![image](@site/static/img/select-account.webp)

## Validate the connection

If this is your **first connection** with the telegram account, the app will ask you for a code to validate authentication. Simply enter the code you received by message in your application.

* Telegram will always send a code for the first connection, then a file named `xxxx.session` will be created and you won't need to connect again.

![image](@site/static/img/enter-code.webp)

## Start scraping

Next, select the group/channel in which you want to **scrape** and click on `scrape group`.

:::tip[Note]

* The group/channel must have permission to show members. By definition, you can't scrap members of a private group that blocks access to members.

:::


![image](@site/static/img/select-group.webp)

As you can see, it works quite well

![image](@site/static/img/scraping-completed.webp)

## Save csv list

Finally, you can select the location of your file to be saved. Don't forget where you saved it, as we'll need it for the adder.

![image](@site/static/img/save-users.webp)