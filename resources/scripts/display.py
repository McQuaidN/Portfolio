import time
import sys
import os

appJsContent = ""
indexHtmlContent = ""
portfolioHtmlContent = ""
contactHtmlContent = ""

# This is built to look nice and be done easily, not to be efficient. I know how to do better!
with open("app.js") as file:
    appJsContent = file.read()

with open("../../index.html") as file:
    indexHtmlContent = file.read()

with open("../../portfolio.html") as file:
    portfolioHtmlContent = file.read()

with open("../../contact.html") as file:
    contactHtmlContent = file.read()


for character in appJsContent:
    sys.stdout.write(character)
    sys.stdout.flush()
    time.sleep(0.1)

os.system('cls')

for character in indexHtmlContent:
    sys.stdout.write(character)
    sys.stdout.flush()
    time.sleep(0.1)

os.system('cls')

for character in portfolioHtmlContent:
    sys.stdout.write(character)
    sys.stdout.flush()
    time.sleep(0.1)

os.system('cls')

for character in contactHtmlContent:
    sys.stdout.write(character)
    sys.stdout.flush()
    time.sleep(0.1)

os.system('cls')